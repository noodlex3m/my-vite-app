import { useState } from "react";
function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div className="counter-container">
			<p>Поточний рахунок: {count}</p>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setCount(count - 1)}>-1</button>
		</div>
	);
}
export default Counter;
