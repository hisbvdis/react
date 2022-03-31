import { useEffect, useState } from "react";

const App = () => {
  const [timerId, setTimerId] = useState(null);
  const [isLaunched, setLaunched] = useState(false);
  const [count, setCount] = useState(0);

  
  // Запустить таймер
  const startTimer = () => {
    const id = setInterval(() => {
      setCount(count => count + 1);
    }, 1000)

    setLaunched(true);
    setTimerId(id);

    localStorage.setItem("isLaunched", "true");
  }


  // Остановить таймер
  const stopTimer = () => {
    clearInterval(timerId);

    setLaunched(false);
    localStorage.setItem("isLaunched", "false");
  }


  // Сбросить таймер
  const resetTimer = () => {
    setCount(0);
    stopTimer();
  }


  // ComponentDidMount
  useEffect(() => {
    if (localStorage.getItem("count")) {
      setCount(Number(localStorage.getItem("count")));
    }
    if (localStorage.getItem("isLaunched") === "true") {
      startTimer();
    }

    // ComponentWillUnmount
    return () => {
      stopTimer();
    }
  }, [])


  // ComponentDidUpdate
  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count])

  
  return (<>
    <h1>{count}</h1>
    {!isLaunched
      ? <button onClick={startTimer}>Start</button>
      : <button onClick={stopTimer}>Stop</button>}
    <button onClick={resetTimer}>Reset</button>
  </>)
}

export default App;