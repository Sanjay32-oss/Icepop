import React,{memo} from 'react';
import {useOutletContext } from 'react-router-dom';
import styles from '../CSS/Third.module.css';

const Home1 = () => {
  const {MainData, todos}= useOutletContext();
  return (
    <>
     {todos.map((todo, index) => (
        <h2 key={index}>{todo}</h2>
      ))}
    <h1 style={{backgroundColor:'yellow'}}>Home Page </h1>
    <h3 className={styles.bigblue}>Hello Skyu1</h3>
    <p><b>{MainData.data11}</b></p>
    <p><b>{MainData.data22}</b></p>
    <p><b>{MainData.data33}</b></p>
    <p><b>{MainData.data44}</b></p>
    <p><b>{MainData.data55}</b></p>
    </>
  );
};

export default memo(Home1);
