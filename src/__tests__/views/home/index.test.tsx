import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import GlobalContext from "@/state/GlobalContext";
import Home from "@/pages";

jest.mock("../../../hooks/useFetchImagesData", () => {
    return jest.fn(() => [
        jest.fn(),
        {
            data: [
                { uuid: "1", url: "/image1.jpg" },
                { uuid: "2", url: "/image1.jpg" },
                { uuid: "3", url: "/image2.jpg" },
                { uuid: "4", url: "/image2.jpg" },
            ],
            loading: false,
        },
    ]);
});

describe("Page", () => {
    it("renders a heading", () => {
        render(<Home />);

        const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toBeInTheDocument();
    });

    const mockUser = { name: "Test User" };

    const renderWithContext = () =>
        render(
            <GlobalContext.Provider value={{ user: mockUser }}>
                <Home />
            </GlobalContext.Provider>
        );

    it("renders the game correctly", () => {
        renderWithContext();
        expect(screen.getByText("Juego Memorice")).toBeInTheDocument();
        expect(
            screen.getByText("Errores: 0 - Aciertos: 0")
        ).toBeInTheDocument();
    });

    it("renders images container", () => {
        renderWithContext();
        const images = screen.getAllByTestId("image-container");
        expect(images.length).toBe(4);
    });

    it("flips a card on click", () => {
        renderWithContext();
        const cards = screen.getAllByTestId("image-container");

        fireEvent.click(cards[0]);
        const card = screen.getByTestId("image-card-0");
        expect(card).toBeTruthy();
    });

    it("handles mismatches", async () => {
        renderWithContext();
        const cards = screen.getAllByTestId("image-container");

        fireEvent.click(cards[0]);
        fireEvent.click(cards[2]);

        await waitFor(
            () => {
                expect(
                    screen.getByText("Errores: 1 - Aciertos: 0")
                ).toBeInTheDocument();
            },
            { timeout: 3000 }
        );
    });

    it("resets the game", async () => {
        renderWithContext();
        const resetButton = screen.getByText("Reset");
        fireEvent.click(resetButton);
        await waitFor(
            () => {
                expect(
                    screen.getByText("Errores: 0 - Aciertos: 0")
                ).toBeInTheDocument();
            },
            { timeout: 3000 }
        );
    });
});
