import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

const InputWorks=()=>{
    const dispatch = useDispatch();
    const formWork = useSelector(state => state.formWork)
    const works = useSelector(state => state.work)

    useEffect(()=>{
        getWorks();
     },[])
     const getWorks = async () => {
        const result = await axios.get(`https://api-mongodb-mini-project.herokuapp.com/api/works`)
        console.log("my data",result.data)
        dispatch({type:'GET_WORKS',work: result.data})
      }


    const addWork = async () => {
      await axios.post(`https://api-mongodb-mini-project.herokuapp.com/api/works/`, formWork)
      dispatch({
        type: 'ADD_WORK', work: {
            ...formWork
        }
    })
       getWorks();
   }
    return(
        <div>
            <p1>{formWork.job} {formWork.day} {formWork.times} {formWork.positions}</p1>
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
             onChange={(e) => dispatch({ type: 'CHANGE_DAY', day: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label >Time:</label> 
          <input class="form-control"
             type="text"
             placeholder="Enter Time" 
             onChange={(e) => dispatch({ type: 'CHANGE_TIMES', times: e.target.value })}
            />
      </div>
      <div class="form-group">
      <label >Position:</label>
         <input  class="form-control"
             type="number"
             placeholder="Enter Position" 
             onChange={(e) => dispatch({ type: 'CHANGE_POSITIONS', positions: e.target.value })}
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