import { useState, useEffect, useContext } from "react";

import useFetchData from "@/hooks/useFetchImagesData";
import { ImageCard } from "@/components/cards";
import { LoadingSpinner } from "@/components/common";
import { INITIAL_RESULT_VALUES } from "@/constants/common";
import { Data } from "@/types/common";
import GlobalContext from "@/state/GlobalContext";
import UserModal from "@/pages/components/Modal";

export default function Home() {
    const [fetchData, { data, loading }] = useFetchData("/images");
    const { user } = useContext(GlobalContext);

    const [flipped, setFlipped] = useState<number[]>([]);
    const [solved, setSolved] = useState<number[]>([]);
    const [results, setResults] = useState(INITIAL_RESULT_VALUES);

    const handleResultState = (prop: string, value: number) =>
        setResults((oldState) => ({ ...oldState, [prop]: value }));

    useEffect(() => {
        const checkForMatch = () => {
            const [first, second] = flipped;

            if (data[first].uuid === data[second].uuid) {
                setSolved([...solved, ...flipped]);
                handleResultState("success", results.success + 1);
            } else {
                handleResultState("mismatch", results.mismatch + 1);
            }

            setFlipped([]);
        };

        if (flipped.length === 2) {
            setTimeout(() => {
                checkForMatch();
            }, 1000);
        }
    }, [data, flipped, solved]);

    const handleClick = (index: number) => {
        if (!flipped.includes(index) && flipped.length < 2) {
            setFlipped([...flipped, index]);
        }
    };

    const gameOver = solved.length === data.length;

    const resetGame = () => {
        setFlipped([]);
        setSolved([]);
        fetchData("/images");
        setResults(INITIAL_RESULT_VALUES);
    };

    return (
        <>
            <div className="text-center">
                <h1>Juego Memorice</h1>
                <h2 className="p-5">
                    {`Errores: ${results.mismatch} - Aciertos: ${results.success}`}
                </h2>
                {solved.length > 0 && gameOver && (
                    <h2 className="text-green-500 p-5">
                        {`Felicidades! ${user.name} Ganaste!`}
                    </h2>
                )}
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="grid md:grid-cols-8 sm:grid-cols-4 gap-5 mt-5">
                        {data?.map(({ url }: Data, index: number) => (
                            <ImageCard
                                index={index}
                                key={index}
                                src={url}
                                onClick={() => handleClick(index)}
                                visible={
                                    flipped.includes(index) ||
                                    solved.includes(index)
                                }
                            />
                        ))}
                    </div>
                )}
                <button
                    className="mt-10 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick={() => resetGame()}
                >
                    Reset
                </button>
            </div>
            <UserModal />
        </>
    );
}
