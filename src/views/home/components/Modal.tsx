import { useState, useContext } from "react";

import { Modal } from "@/components/common";
import GlobalContext from "@/state/GlobalContext";

const UserModal = () => {
    const [isOpen, setOpen] = useState(true);
    const { dispatch } = useContext(GlobalContext);

    const handleModal = () => setOpen(!open);

    return (
        <Modal isOpen={isOpen} onOk={handleModal}>
            <div className="mt-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Ingresa tu nombre
                </label>
                <input
                    onChange={(e) =>
                        dispatch({
                            type: "SET_USER",
                            payload: { name: e.target.value },
                        })
                    }
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder=""
                />
            </div>
        </Modal>
    );
};

export default UserModal;
