import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'


function InputForm() {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const employees = useSelector(state => state.employee)

    const addEmployee = async () => {
      await axios.post(`https://api-mongodb-mini-project.herokuapp.com/api/employee`, form)
       dispatch({
           type: 'ADD_EMPLOYEE', employee: {
              //  id: employees.length > 0 ? employees[employees.length-1].id+1 : 0,
               ...form
           }
       })
       
   }
  return (
    <div className="container">
      <h3>Register Apply job </h3>
  <p1>{form.name} {form.surname} {form.telephone} {form.position} {form.date}{form.time}</p1>
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
             onChange={(e) => dispatch({ type: 'CHANGE_TELEPHONE', telephone: e.target.value })}
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
      <label>Time:</label>
        <input class="form-control"
             type="text"
             placeholder="Enter time" 
             onChange={(e) => dispatch({ type: 'CHANGE_TIME', time: e.target.value })}
            />
      </div>
          
            
            <button style={{marginLeft: "4px" }} 
            class="btn btn-success "
            onClick={addEmployee}>Apply</button>
            
    </div>
  );
}

export default InputForm;
