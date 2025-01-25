import useFetchData from "@/hooks/useFetchData";
import { ImageCard } from "@/components/cards";

type Data = {
    url: string;
    uuid: string;
    title: string;
    content_type: string;
};

export default function Home() {
    const { data, loading } = useFetchData("/images");

    console.log({ data, loading });
    const buildData = (data: Data[]) =>
        [...data, ...data]?.sort(() => Math.random() - 0.5);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="text-center">
                <h1>Juego Memorice</h1>
                <div className="grid md:grid-cols-8 sm:grid-cols-4 gap-5 mt-5">
                    {buildData(data)?.map(({ url }) => (
                        <ImageCard
                            src={url}
                            onClick={() => console.log("click")}
                            visible={true}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
