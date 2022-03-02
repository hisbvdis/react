import { useState } from "react";

const Search = ({setSearch}) => {
  const [value, setValue] = useState("");
  
  return (
    <input
      type="text"
      placeholder="Поиск по имени"
      value={value}
      onChange={(evt) => {
        setValue(evt.target.value);
        setSearch(evt.target.value);
      }}
    />
  )
}

export default Search;