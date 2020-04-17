import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import InputForm from './InputForm';
import Login from './Login';
import InputFormAdmin from './InputFormAdmin';


const Form =()=>{
    const [name,setName] = useState(' ')
    const [surname,setSurname] = useState(' ')
    const [tel,setTel] = useState(' ')
    const [position,setPoisition] = useState(' ')
    const [status,setStatus] = useState(' ')

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
    const updateEmployee = async (employee_id) => {
      await axios.put(`https://api-booking-parttimes.herokuapp.com/api/employees/${employee_id}`,form)
       dispatch(
           {type:'UPDATE_EMPLOYEE',
          id: employee_id,
           employee:{...form,id:  employee_id}
       })
       getEmployees()
       
     }
      const printEmployee = ()=>{
        if(employees && employees.length){
            return employees.map((employee,index)=>{
                return(
                    <li key={index}>
                            
                            {employee.name}  {employee.surname  } : 
                            {employee.tel}  {employee.position} {employee.date} {employee.status}
                            <br/>
                            <button style={{marginLeft:"6px" }} className="btn btn-info btn-sm"
                            onClick={()=>updateEmployee(employee.id)}
                            >Update</button>
                            <button style={{marginLeft:"6px"}} className="btn btn-danger btn-sm"
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
        <div className="jumbotron">
        <h1 style={{marginTop:"-30px",color:"red"}}>Edit Employee</h1>
        <ul>
                {printEmployee()}
        </ul>

        </div>

        <InputFormAdmin />
    </div>
  );
}

export default Form;
