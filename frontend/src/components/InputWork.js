import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

const InputWorks=()=>{
    const dispatch = useDispatch();
    const formWork = useSelector(state => state.formWork)
    const works = useSelector(state => state.work)

    const addWork = async () => {
      await axios.post(`https://api-booking-parttimes.herokuapp.com/api/works`, formWork)
      dispatch({
        type: 'ADD_WORK', work: {
            id: works.length > 0 ? works[works.length-1].id+1 : 0,
            ...formWork
        }
    })
       
   }
    return(
        <div>
            <p1>{formWork.job} {formWork.detail} {formWork.number}</p1>
            <div class="form-group">
      <label >Job:</label>
       <input  class="form-control"
             type="text"
             placeholder="Enter Job" 
             onChange={(e) => dispatch({ type: 'CHANGE_JOB', job: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label >Date:</label> 
          <input class="form-control"
             type="text"
             placeholder="Enter Date" 
             onChange={(e) => dispatch({ type: 'CHANGE_DETAIL', detail: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label >Position:</label>
         <input  class="form-control"
             type="number"
             placeholder="Enter Position" 
             onChange={(e) => dispatch({ type: 'CHANGE_NUMBER', number: e.target.value })}
            />
      </div>
      <button style={{marginLeft: "4px" }} 
            class="btn btn-success"
            onClick={addWork}
            >Add Data </button>
        </div>
    )
}
export default InputWorks