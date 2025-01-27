import React from "react";

type User = {
    name: string;
};

export interface ContextType {
    user: User;
    dispatch: () => void;
}

export const init = {
    user: {
        name: "",
    },
};

export default React.createContext<ContextType | null>(null);
