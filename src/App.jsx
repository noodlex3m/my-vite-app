/**
 * 4. Використай компонент в App.jsx:
 * 	- Знову очисти App.jsx.
 * 	- Імпортуй і встав свій новий компонент <ProjectLoader />.
 * 5. Запусти і перевір:
 * 	- Відкрий сторінку. Ти маєш на мить побачити напис "Завантаження...", а потім – список проєктів, завантажений з файлу.
 */

import LoginForm from "./LoginForm.jsx";
import ProjectLoader from "./ProjectLoader.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Сторінка Входу</h1>
			<LoginForm />
			<ProjectLoader />
		</div>
	);
}

export default App;
