/**
 * Практичне завдання: Створення форми логіну
 * Твоє завдання – створити простий компонент форми з двома полями (email та пароль) і кнопкою, використовуючи принцип контрольованих компонентів.
 * Інструкції:
 * 1. Створи файл компонента:
 *  В папці src створи новий файл LoginForm.jsx.
 * 2. Напиши код для LoginForm.jsx:
 *  Імпортуй useState.
 *  Створи функцію-компонент LoginForm.
 *  Створи два стани: один для email (email, setEmail), інший для пароля (password, setPassword). Початкове значення для обох – порожній рядок ''.
 *  Створи розмітку JSX:
 *      Тег <form>.
 *      Всередині – два div для кожної пари "лейбл-інпут".
 *      Поле для Email: <label htmlFor="email">Email:</label> та <input type="email" id="email" />. (Зверни увагу: for в HTML стає htmlFor в JSX).
 *      Поле для Пароля: <label htmlFor="password">Пароль:</label> та <input type="password" id="password" />.
 *      Кнопка <button type="submit">Увійти</button>.
 *  Зроби поля контрольованими:
 *      Для інпуту email додай value={email} та onChange={(e) => setEmail(e.target.value)}.
 *      Для інпуту пароля додай value={password} та onChange={(e) => setPassword(e.target.value)}.
 *  Створи обробник для відправки форми:
 *      Створи функцію handleSubmit(event).
 *      Першим ділом всередині неї виклич event.preventDefault();, щоб сторінка не перезавантажувалась.
 *      Після цього виведи в консоль об'єкт з даними: console.log({ email, password });.
 *  Прив'яжи обробник до форми: <form onSubmit={handleSubmit}>.
 *  Експортуй компонент.
 */

import { useState } from "react";
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		console.log({ email, password });
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Пароль:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button type="submit">Увійти</button>
		</form>
	);
}
export default LoginForm;
