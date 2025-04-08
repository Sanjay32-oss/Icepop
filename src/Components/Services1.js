import React, {memo} from 'react'
import { useOutletContext } from 'react-router-dom';
import '../CSS/Fourth.scss'

const Services1 = () => {
  const {MainData}=useOutletContext();
  return (
    <>
    
    <h1>Services Page</h1>
    <p>This is a car</p>
    <b>This is a bike</b>
    <p><b>{MainData.data11}</b></p>
    <p><b>{MainData.data22}</b></p>
    <p><b>{MainData.data33}</b></p>
    <p><b>{MainData.data44}</b></p>
    <p><b>{MainData.data55}</b></p>
    </>
  )
}

export default memo(Services1);