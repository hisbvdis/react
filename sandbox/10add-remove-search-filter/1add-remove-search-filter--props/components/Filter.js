const Filter = ({promo, favorite, overk, changeFilters}) => {
  return (<>
    <label>
      <input
        type="checkbox"
        value={promo}
        onChange={(evt) => changeFilters({
          name: "promo",
          value: evt.target.checked
        })}
      />
      <span>На повышение</span>
    </label>
    <label>
      <input
        type="checkbox"
        value={overk}
        onChange={(evt) => changeFilters({
          name: "overk",
          value: evt.target.checked
        })}
      />
      <span>З/п больше 1000$</span>
    </label>
    <label>
      <input
        type="checkbox"
        value={favorite}
        onChange={(evt) => changeFilters({
          name: "favorite",
          value: evt.target.checked
        })}
      />
      <span>Избранное</span>
    </label>
  </>)
}

export default Filter;