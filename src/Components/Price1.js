import React, {memo} from 'react'
import { useOutletContext } from 'react-router-dom';


const Price1 = () => {
  const {MainData}=useOutletContext();
  return (
    <>
  
    <h1>Price Page</h1>
    <p><b>{MainData.data11}</b></p>
    <p><b>{MainData.data22}</b></p>
    <p><b>{MainData.data33}</b></p>
    <p><b>{MainData.data44}</b></p>
    <p><b>{MainData.data55}</b></p>
    </>
  )
}

export default memo(Price1);