import logo from "./logo.svg";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import Body from "./components/Body/Body";
import allReducers from "./store/reducers/indexReducers";
import { composeWithDevTools } from "redux-devtools-extension";

function App() {
  const store = createStore(allReducers, composeWithDevTools());
  return (
    <div className="App">
      <Provider store={store}>
        <h1>TODO</h1>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
