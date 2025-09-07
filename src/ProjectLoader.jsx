/**
 * 3. Напиши код для ProjectLoader.jsx:
 *  - Імпортуй useState та useEffect.
 *  - Створи компонент ProjectLoader.
 *  - Створи два стани:
 *      1. const [projects, setProjects] = useState([]); – для зберігання списку проєктів (початково – порожній масив).
 *      2. const [isLoading, setIsLoading] = useState(true); – для відстеження процесу завантаження (початково – true, бо ми починаємо завантажувати одразу).
 *  - Створи useEffect:
 *      - Він має запускатись тільки один раз. (Який масив залежностей потрібен?)
 *      - Всередині useEffect створи асинхронну функцію loadProjects.
 *      - Всередині loadProjects:
 *          - Використай try...catch.
 *          - В try зроби fetch('projects.json').
 *          - Отримай дані і онови стан проєктів: setProjects(data).
 *          - В catch оброби помилку (просто виведи в консоль).
 *          - Нарешті (finally): Незалежно від успіху чи помилки, нам потрібно вимкнути індикатор завантаження. Додай блок finally до try...catch і всередині нього виклич setIsLoading(false).
 *      - Не забудь викликати loadProjects() всередині ефекту.
 *  - Напиши JSX для рендерингу:
 *      - Використай умовний рендеринг.
 *      - Якщо isLoading дорівнює true, показуй простий параграф <p>Завантаження...</p>.
 *      - Інакше (коли завантаження завершено), відображай список <ul>, використовуючи .map() для масиву projects, як ми робили в попередньому завданні (не забудь про key).
 */
import React, { useState, useEffect } from "react";

const ProjectLoader = () => {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadProjects = async () => {
			try {
				const response = await fetch("projects.json");
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		loadProjects();
	}, []);
	return isLoading ? (
		<p>Завантаження...</p>
	) : (
		<ul>
			{projects.map((project) => (
				<li key={project.id}>
					<a href={project.link}>{project.name}</a>
					<p>{project.description}</p>
				</li>
			))}
		</ul>
	);
};
export default ProjectLoader;
