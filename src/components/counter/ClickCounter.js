import { FaMinus, FaPlus, FaRedoAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../../store/counter-slice";
import "./ClickCounterStyles.css";

const ClickCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));   // {type: SOME_UNIQUE_IDENTIFIER, payload}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };


  return (
    <div id="counterID">
      <h2 className="text-center">Redux Counter</h2>
      <div className="tracker text-light rounded-bottom">{counter}</div>
      <div>
        <button className="btn btn-warning" onClick={incrementHandler}><FaPlus /></button>
        <button className="btn btn-warning" onClick={increaseHandler}>Increase by 5</button>
        <button className="btn btn-warning" onClick={decrementHandler}><FaMinus /></button>
      </div>
      <button className="btn btn-warning" onClick={resetHandler}><FaRedoAlt /></button>
    </div>
  );
};

export default ClickCounter;

