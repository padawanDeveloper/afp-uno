import "@/styles/globals.css";
import type { AppProps } from "next/app";

import GlobalState from "@/state/GlobalState";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalState>
            <Component {...pageProps} />
        </GlobalState>
    );
}
