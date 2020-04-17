import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'


function InputFormAdmin(props) {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const employees = useSelector(state => state.employee)

    const addEmployee = async () => {
      await axios.post(`https://api-booking-parttimes.herokuapp.com/api/employees`, form)
       dispatch({
           type: 'ADD_EMPLOYEE', employee: {
               id: employees.length > 0 ? employees[employees.length-1].id+1 : 0,
               ...form
           }
       })
       
   }
  return (
    <div style={{marginTop:"-30px"}} className="container">
        {/* <p1>{form.name} {form.surname} {form.tel} {form.position} {form.date}</p1> */}
        <br/>
      <div class="form-group">
      <label >Name:</label>
       <input  class="form-control"
             type="text"
             placeholder="Enter name" 
             onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label >Surname:</label> 
          <input class="form-control"
             type="text"
             placeholder="Enter surname" 
             onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label >Telephone number:</label>
         <input  class="form-control"
             type="number"
             placeholder="Enter telephone number" 
             onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label>Position:</label>
        <input class="form-control"
             type="text"
             placeholder="Enter Position" 
             onChange={(e) => dispatch({ type: 'CHANGE_POSITION', position: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label>Date:</label>
        <input class="form-control"
             type="text"
             placeholder="Enter Date" 
             onChange={(e) => dispatch({ type: 'CHANGE_DATE', date: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label>Status:</label>
        <input class="form-control"
             type="text"
             placeholder="Enter Status" 
             onChange={(e) => dispatch({ type: 'CHANGE_STATUS', status: e.target.value })}
            />
      </div>
          
            
            <button style={{marginLeft: "4px" }} 
            class="btn btn-success"
            onClick={addEmployee}>Add Data</button>
            
    </div>
  );
}

export default InputFormAdmin;
