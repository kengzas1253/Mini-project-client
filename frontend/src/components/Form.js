import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import Navbar from './Navbar';


const Form =()=>{
    const employees = useSelector(state=> state.employee);
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
     useEffect(()=>{
        getEmployees();
     },[])
     const getEmployees = async () => {
        const result = await axios.get(`https://api-booking-parttimes.herokuapp.com/api/employees`)
        console.log(result.data)
        dispatch({type:'GET_EMPLOYEES',employee: result.data})
      }
      const printEmployee = ()=>{
        if(employees && employees.length){
            return employees.map((employee,index)=>{
                return(
                    <li key={index}>
                            
                            {employee.name}  {employee.surname  } : 
                            {employee.tel}  {employee.position}
                    </li> 
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    }
  return (
    <div>
        <Navbar/>
        <ul>
                {printEmployee()}
        </ul>
    </div>
  );
}

export default Form;
