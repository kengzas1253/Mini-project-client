import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

const Employee =()=>{
   
    const employees = useSelector(state=> state.employee);
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
     useEffect(()=>{
        getEmployees();
     },[])
     const getEmployees = async () => {
        const result = await axios.get(`https://api-mongodb-mini-project.herokuapp.com/api/employee`)
        console.log(result.data)
        dispatch({type:'GET_EMPLOYEES',employee: result.data})
      }

      const printEmployees = ()=>{
        if(employees && employees.length){
            return employees.map((employee,index)=>{
                return(
               <tr>
                <td>{index+1}</td>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.telephone}</td>
                <td>{employee.position}</td>
                <td>{employee.date}</td>
                <td>{employee.time}</td>
                <td>{employee.status}</td>
               </tr>
                   
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    }

  return (
    <div className="container-fluid">
         <table className="table table-bordered"  >
                <tr >
                  <th>NO.</th>
                  <th>Firstname</th>
                  <th>Lastname</th> 
                  <th>Telephone Number</th>
                  <th>Position</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
                    {printEmployees()}  
            </table>
                
     
    </div>
  );
}

export default Employee;
