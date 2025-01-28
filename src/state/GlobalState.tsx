import React, { useReducer } from "react";
import GlobalContext, { init } from "./GlobalContext";
import { UserReducer } from "./reducers";

type Props = {
    children: React.ReactNode;
};

const GlobalState = ({ children }: Props) => {
    const [state, dispatch] = useReducer(UserReducer, init);

    let initialValue = {
        ...state,
        dispatch,
    };

    return (
        <GlobalContext.Provider value={initialValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
