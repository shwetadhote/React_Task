import React, { useState } from 'react'
import styles from './style.modules.css'

const Home = () => {

  let newTime = new Date().toLocaleTimeString();
  const [ctime,setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }
  
  //setInterval(UpdateTime, 1000)
  
    return(
      <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>Get Time</button>
      </>
    )

  }

export default Home;
/*
const Home = () => {

    const [count, setCount] = useState(0);

const IncNum = () => {
  setCount(count + 1);
};
  return (

    <>
    <h1>{count}</h1>
    <button onClick={IncNum}> Click Me </button>
    </>
  );
}*/


