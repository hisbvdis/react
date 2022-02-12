const User = ({
    id,
    name,
    salary,
    promo,
    favorite,
    changeUser,
    removeUser,
  }) => {
  return (
    <li>
      <span>{name}</span>
      <span>&nbsp;</span>
      <span>{salary + "$"}</span>
      <label>
        <input
          type="checkbox"
          checked={promo}
          onChange={(evt) => changeUser({
            id: id,
            field: "promo",
            value: evt.target.checked
          })}
        />
        <span>Повысить</span>
      </label>
      <button onClick={() => removeUser(id)}>Удалить</button>
      <label>
        <input
          type="checkbox"
          checked={favorite}
          onChange={(evt) => changeUser({
            id: id,
            field: "favorite",
            value: evt.target.checked
          })}
        />
        <span>В избранное</span>
      </label>
    </li>
  )
}

export default User