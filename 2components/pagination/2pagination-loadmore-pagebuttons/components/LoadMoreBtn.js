const LoadMoreBtn = ({offset, itemsCountOnPage, total, loadMore}) => {
  // Скрывать кнопку, если смещение + количество элементов на странице
  // ..превышает общее их количество
  if (offset + itemsCountOnPage > total) return null;
  
  return (<>
    <p>
      <button onClick={() => loadMore(offset)}>Загрузить ещё</button>
    </p>
  </>)
}

export default LoadMoreBtn;