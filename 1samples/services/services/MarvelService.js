// Основа адреса для краткости
const baseURL = "https://gateway.marvel.com:443/v1/public";
// Ключ доступа к API
const apiKey = "apikey=fa048bd5ea2cf04c794f49fdb2d0415a";

// Заготовка функции GET-запроса данных
const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status - ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// Функция получения списка пользователей
export const getUserList = async (count=10, offset=0) => {
  const response = await getData(`${baseURL}/characters?limit=${count}&offset=${offset}&${apiKey}`);
  return response.data.results.map(convertUserData);
}

// Функция получения пользователя
export const getUser = async (id) => {
  const response = await getData(`${baseURL}/characters/${id}?${apiKey}`);
  return convertUserData(response.data.results[0]);
}

// Функция, которая преобразует сложные данные из ответа о пользователе
// ..в удобный объект
export const convertUserData = (user) => {
  return {
    id: user.id,
    name: user.name,
    imgSrc: user.thumbnail.path + "." + user.thumbnail.extension,
  }
}