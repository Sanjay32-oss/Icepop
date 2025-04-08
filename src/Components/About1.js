import React from 'react'
import { useOutletContext } from 'react-router-dom';

const About1 = () => {
  const {MainData}= useOutletContext();
  return (
    <>
    <h1>About Page</h1>
    <p><b>{MainData.data11}</b></p>
    <p><b>{MainData.data22}</b></p>
    <p><b>{MainData.data33}</b></p>
    <p><b>{MainData.data44}</b></p>
    <p><b>{MainData.data55}</b></p>
    </>
  )
}

export default About1;