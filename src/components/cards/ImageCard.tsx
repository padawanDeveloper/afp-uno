"use client";
import { memo } from "react";
import Image from "next/image";

interface IProps {
    visible: boolean;
    onClick: () => void;
    src: string;
    index: number;
}

const ImageCard = ({ visible, onClick, src, index }: IProps) => (
    <div
        data-testid="image-container"
        className={`flex justify-center text-4xl font-bold text-black 
            items-center w-28 bg-slate-200 h-28 transform cursor-pointer 
            transition-transform duration-300 relative ${
                visible ? "rotate-180" : ""
            }`}
        onClick={() => onClick()}
    >
        {visible ? (
            <Image
                data-testid={`image-card-${index}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rotate-180"
                src={src}
                fill
                alt="Memory Card"
            />
        ) : (
            "?"
        )}
    </div>
);

export default memo(ImageCard);
