import React, { memo } from 'react'
import { useOutletContext } from 'react-router-dom'
import '../CSS/Fifth.module.css'
import '../CSS/Sixth.scss'

const Camp1 = () => {
const {MainData}=useOutletContext();
  return (

    <>Camp1
    <h6 style={{backgroundColor:'green'}}>{MainData.data11}</h6>
    <h6 className=''>{MainData.data22}</h6>
    <h6>{MainData.data33}</h6>
    <h6>{MainData.data44}</h6>
    <h6>{MainData.data55}</h6>
    </>
  )
}

export default memo(Camp1)