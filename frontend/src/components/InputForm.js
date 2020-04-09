import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'


function InputForm() {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const employees = useSelector(state => state.employee)
  return (
    <div>
        <p1>{form.name} {form.surname} {form.tel} {form.position}</p1>
        <br/>
       <input
             type="text"
             placeholder="Enter name" 
             onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
            />
            <input
             type="text"
             placeholder="Enter surname" 
             onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
            />
            <input
             type="text"
             placeholder="Enter telephone number" 
             onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
            />
            <input
             type="text"
             placeholder="Enter Position" 
             onChange={(e) => dispatch({ type: 'CHANGE_POSITION', position: e.target.value })}
            />
            <button style={{marginLeft: "4px" }}>Add Data</button>
           
    </div>
  );
}

export default InputForm;
