import "./App.css";

function App() {
	const studentName = "Сергій";

	return (
		<div className="App">
			<header className="App-header">
				<h1>Привіт, я React-додаток!</h1>
				<p>Мене розробляє {studentName}.</p>
			</header>
		</div>
	);
}

export default App;
