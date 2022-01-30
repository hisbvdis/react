import React from "react";

// Компонент высшего порядка (функция, возвращающая класс)
const Data = (Component, size) => {
  return (props) => (
    <Component {...props} size={size}/>
  )
}

export default Data;