import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Navbar from './Navbar';
import Employee from './Employee';
import InputForm from './InputForm';
const ApplyJob=()=>{
    
    return(
        <div >
            <Navbar/>
            <div className="container" style={{marginTop:"20px"}}>
            <Employee/>
            <br/>
            <InputForm/>
            </div>
        </div>
    )
}
export default ApplyJob