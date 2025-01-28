// jest.setup.js
import "@testing-library/jest-dom";

jest.mock("next/image", () => {
    return ({ src, alt, ...props }) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} {...props} />;
    };
});
