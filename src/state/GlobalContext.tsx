import React from "react";

type User = {
    name: string;
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface ContextType {
    user: User;
    dispatch: (obj: any) => void;
}

export const init = {
    user: {
        name: "",
    },
    dispatch: () => null,
};

export default React.createContext<ContextType>(init);
