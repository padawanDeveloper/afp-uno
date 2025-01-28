import React from "react";

interface IProps {
    children?: React.ReactNode;
    isOpen: boolean;
    title?: string;
    onCancel?: () => void;
    onOk: () => void;
}

const Modal = ({ children, isOpen, onCancel, onOk, title }: IProps) => (
    <div className="h-screen flex items-center justify-center">
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        {!!onCancel && (
                            <button
                                className="text-gray-400 hover:text-gray-600"
                                onClick={onCancel}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="mt-4">{children}</div>
                    <div className="mt-6 flex justify-end space-x-2">
                        {!!onCancel && (
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                onClick={onCancel}
                            >
                                Cancelar
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={onOk}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default Modal;
