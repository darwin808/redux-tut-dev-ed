import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/index";
import { decrement } from "./actions/index";
import { signIn } from "./actions/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((e) => e.islogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>HEllo</h1>
      counter - {counter}
      {islogged ? <h1>yeah bebe</h1> : <h1>Noooooo</h1>}
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        DEL
      </button>
      <button
        onClick={() => {
          dispatch(signIn());
        }}>
        TOGGLE
      </button>
    </div>
  );
}

export default App;
