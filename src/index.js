import React from "react";
import ReactDOM from "react-dom/client";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css"
import Title from "./components/Title";
import rootReducer from "./reducers/titleReducer";

// function reducer() {
//   return {
//     title: "Title from Redux store"
//   };
// }

const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
