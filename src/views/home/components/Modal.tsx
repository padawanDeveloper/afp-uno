import { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Modal } from "@/components/common";
import GlobalContext from "@/state/GlobalContext";

const UserModal = () => {
    const [isOpen, setOpen] = useState(true);
    const { dispatch } = useContext(GlobalContext);

    const handleModal = () => setOpen(!open);

    const handleSubmit = (values: any) => {
        dispatch({
            type: "SET_USER",
            payload: { name: values.name },
        });
        handleModal();
    };

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, "Mas de 5 caracteres")
                .required("Required"),
        }),
    });

    return (
        <Modal isOpen={isOpen} onOk={formik.handleSubmit}>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                    Ingresa tu nombre <span className="text-red-500">*</span>
                </label>
                <input
                    required
                    onChange={formik.handleChange}
                    value={formik.values.name}
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
