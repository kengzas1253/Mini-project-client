import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import Navbar from './Navbar';
import InputForm from './InputForm';


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
      const deleteEmployee = async (employee_id)=>{
        await axios.delete(`https://api-booking-parttimes.herokuapp.com/api/employees/${employee_id}`)
        dispatch({type:'DELETE_EMPLOYEE',id: employee_id })
        getEmployees()
          
    }
      const printEmployee = ()=>{
        if(employees && employees.length){
            return employees.map((employee,index)=>{
                return(
                    <li key={index}>
                            
                            {employee.name}  {employee.surname  } : 
                            {employee.tel}  {employee.position}
                            <button style={{marginLeft:"6px"}}
                            onClick={()=>deleteEmployee(employee.id)}
                            >Delete</button>
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
        <InputForm/>
    </div>
  );
}

export default Form;
