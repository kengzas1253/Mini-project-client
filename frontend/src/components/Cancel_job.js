import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

export default function Cancel_job() {
    const cancels = useSelector(state=> state.cancel);
    const formcancel = useSelector(state => state.formcancel)
    const dispatch = useDispatch()
     useEffect(()=>{
        getCancel();
     },[])
     const getCancel = async () => {
        const result = await axios.get(`https://api-mongodb-mini-project.herokuapp.com/api/cancel_job`)
        console.log("cancel job data",result.data)
        dispatch({type:'GET_CANCEL',cancel: result.data})
      }
      const addCancel = async () => {
        await axios.post(`https://api-mongodb-mini-project.herokuapp.com/api/cancel_job`, formcancel)
        dispatch({
          type: 'ADD_CANCEL', cancel: {
            //  id: employees.length > 0 ? employees[employees.length-1].id+1 : 0,
            ...formcancel
          }
        })
        getCancel()
      }
      const printCancel = ()=>{
        if(cancels && cancels.length){
            return cancels.map((cancel,index)=>{
                return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{cancel._name}</td>
                      <td>{cancel._surname}</td>
                      <td>{cancel._telephone}</td>
                      <td>{cancel._position} </td>
                      <td>{cancel._date} </td>
                      <td>{cancel._time} </td>
                      <td>{cancel._detail} </td>
                      <td>{cancel._status} </td>
                    </tr>
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    } 
    return (
        <div className="container" style={{fontFamily:"Prompt"}}>
            <table className="table table-bordered" >
                <tr >
                  <th>NO</th>
                  <th>Name</th> 
                  <th>Surname</th>
                  <th>Telephone</th>
                  <th>Position</th>
                  <th>Date</th>
                  <th>Tims</th>
                  <th>Detail</th>
                  <th>Status</th>
                </tr>
                    {printCancel()}  
            </table>
        {/* Register Form */}
        <h3>Form Cancel Job </h3>
      {/* <p1>{formcancel._name} {formcancel._surname} {formcancel._telephone} {formcancel._position} {formcancel._date}
    :{formcancel._time} {formcancel._detail} </p1> */}
        <div class="form-group">
        <label >Name:</label>
        <input class="form-control"
          type="text"
          placeholder="Enter name"
          onChange={(e) => dispatch({ type: '_CHANGE_NAME', _name: e.target.value })}
        />
         </div>
         <div class="form-group">
        <label >Surname:</label>
        <input class="form-control"
          type="text"
          placeholder="Enter surname"
          onChange={(e) => dispatch({ type: '_CHANGE_SURNAME', _surname: e.target.value })}
        />
        </div>
        <div class="form-group">
        <label >Telephone number:</label>
        <input class="form-control"
          type="number"
          placeholder="Enter telephone number"
          onChange={(e) => dispatch({ type: '_CHANGE_TELEPHONE', _telephone: e.target.value })}
        />
        </div>
        <div class="form-group">
        <label for="exampleFormControlSelect1">Position:</label>
        <select class="form-control"
         onChange={(e) => dispatch({ type: '_CHANGE_POSITION', _position: e.target.value })}
         >
          <option>Banquet</option>
          <option>Causal</option>
          <option>Chef assistant</option>
          <option>Set up</option>
          <option>Staff party</option>
        </select>
        </div>

        <div class="form-group">
        <label>Date:</label>
        <input class="form-control"
          type="date"
          placeholder="Enter Date"
          onChange={(e) => dispatch({ type: '_CHANGE_DATE', _date: e.target.value })}
        />
        </div>
        
        <div class="form-group">
        <label for="exampleFormControlSelect1">Time:</label>
        <select class="form-control" 
        onChange={(e) => dispatch({ type: '_CHANGE_TIME', _time: e.target.value })}
        >
          <option>08.00-17.00</option>
          <option>09.00-18.00</option>
          <option>12.00-21.00</option>
          <option>13.00-22.00</option>
          <option>15.00-00.00</option>
          <option>18.00-03.00</option>
          <option>20.00-05.00</option>
        </select>
        </div>

        <div class="form-group">
        <label>Detail:</label>
        <input class="form-control"
          type="text"
          placeholder="Enter Detail"
          onChange={(e) => dispatch({ type: '_CHANGE_DETAIL', _detail: e.target.value })}
        />
        </div>
     
        <button style={{ marginLeft: "4px" }}
        onClick={addCancel}
        class="btn btn-success "
        >Apply
        </button>
        </div>
    )
}
