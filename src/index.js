import React from "react";
import ReactDom from "react-dom";
import {Provider} from "./context/context";
import {SpeechProvider} from "@speechly/react-client";

import App from "./App";
import "./index.css";

ReactDom.render(
    <SpeechProvider appId="341d0fc9-010d-420f-a6b9-28418d43344c" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
);