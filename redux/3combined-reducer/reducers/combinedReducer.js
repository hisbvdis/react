// 1. Импортировать зависимости
// 1.1. Обычные редьюсеры
import users from "./users.js";
import filters from "./filters.js";
import search from "./search.js";
// 1.2. Функция создания комбинированного редьюсера
import { combineReducers } from "redux";


// 2. Создать комбинированный редьюсер
const combinedReducer = combineReducers({users, filters, search});


// 3. Экспорт
// 3. Комбинированный редьюсер
export default combinedReducer;