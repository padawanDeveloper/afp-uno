"use client";

import Image from "next/image";

interface IProps {
    visible: boolean;
    onClick: () => void;
    src: string;
}

const ImageCard = ({ visible, onClick, src }: IProps) => (
    <div
        className={`flex justify-center text-4xl font-bold text-black 
            items-center w-28 bg-slate-200 h-28 transform cursor-pointer 
            transition-transform duration-300 ${visible ? "rotate-180" : ""}`}
        onClick={onClick}
    >
        {visible ? (
            <Image className="rotate-180" src={src} fill alt="Memory Card" />
        ) : (
            "?"
        )}
    </div>
);

export default ImageCard;
