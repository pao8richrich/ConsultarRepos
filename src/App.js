import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu"
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers/reducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import higherOrderComponent  from "./components/HOC/Hoc"

// const MenuConHoc = higherOrderComponent(Menu);
const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store} >
    <div className = "App">
      <Menu />
    </div>
    </Provider>

  );
}

export default App;

