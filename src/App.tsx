import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center space-x-6 pt-12">
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <div>{count}</div>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        by number
      </button>
    </div>
  );
}

export default App;
