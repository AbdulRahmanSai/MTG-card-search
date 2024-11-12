import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { store, persistor } from "./redux/store"; // Import store and persistor
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <main>
        <App />
      </main>
    </PersistGate>

  </Provider>,
  document.getElementById("root")
);