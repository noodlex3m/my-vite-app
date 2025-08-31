/**
 * 4. Модернізуй App.jsx:
 * 	Імпортуй ProjectList та useState.
 * 	Створи новий стан, який буде відповідати за видимість списку:
 * 		const [showProjects, setShowProjects] = useState(true); // Спочатку список видимий
 * 	У return додай:
 * 		Кнопку, яка буде змінювати стан showProjects на протилежний:
 * 		<button onClick={() => setShowProjects(!showProjects)}> ... </button>
 * 		Текст кнопки можна зробити динамічним за допомогою тернарного оператора: {showProjects ? 'Приховати' : 'Показати'}.
 * 		Використай оператор && для умовного рендерингу компонента ProjectList:
 * 		{showProjects && <ProjectList projects={projects} />}
 * 		Тут ми також передаємо наш масив projects в компонент ProjectList як проп.
 * 5. Запусти і перевір:
 * 	Ти маєш побачити список проєктів і кнопку "Приховати".
 * 	При натисканні на кнопку список має зникати, а текст на кнопці змінюватись на "Показати".
 * 	При повторному натисканні все має з'являтись знову.
 */
import ProjectList from "./ProjectList.jsx";
import Counter from "./Counter.jsx";
import "./App.css";
import { useState } from "react";

function App() {
	const projects = [
		{ id: 1, name: "Особисистий сайт-портфоліо", link: "#" },
		{ id: 2, name: "Калькулятор", link: "#" },
		{ id: 3, name: "Список завдань (Todo App)", link: "#" },
	];
	const [showProjects, setShowProjects] = useState(true);
	return (
		<>
			<button onClick={() => setShowProjects(!showProjects)}>
				{showProjects ? "Приховати" : "Показати"} список проєктів
			</button>
			{showProjects && <ProjectList projects={projects} />}
			<div className="App">
				<h1>Мої Лічильники</h1>
				<Counter />
				<Counter />
				<Counter />
			</div>
		</>
	);
}

export default App;
