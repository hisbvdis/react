// 1. Импортировать функцию комбинирования редьюсеров и создания хранилища
import { combineReducers, createStore } from "redux";
// 2. Импортировать один или несколько обычных редьюсеров из этой же папки (с переименованием)
import { reducer as users } from "./users/users.reducer";
import { reducer as filters } from "./filters/filters.reducer";
import { reducer as search } from "./search/search.reducer";


// 2. Создать комбинированный редьюсер
const rootReducer = combineReducers({users, filters, search});


// 3. Создать хранилище (аргументом передаётся комбинированный редьюсер)
export const store = createStore(rootReducer);