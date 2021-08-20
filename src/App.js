import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementHandler,
  incrementHandler,
  resetHandler
} from "./Redux/action";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1> Workshop Redux </h1>
      <h4>Counter</h4>
      <div className="counter">
        <button
          onClick={() => {
            dispatch(incrementHandler());
          }}
        >
          {" "}
          +{" "}
        </button>
        <h3> {count} </h3>
        <button
          onClick={() => {
            dispatch(decrementHandler());
          }}
        >
          {" "}
          -{" "}
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(resetHandler());
        }}
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

export default App;
