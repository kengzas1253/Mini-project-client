import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const InputWorks = () => {
    const dispatch = useDispatch();
    const formWork = useSelector(state => state.formWork)
    const works = useSelector(state => state.work)

    useEffect(() => {
        getWorks();
    }, [])
    const getWorks = async () => {
        const result = await axios.get(`https://api-mongodb-mini-project.herokuapp.com/api/works`)
        console.log("my data", result.data)
        dispatch({ type: 'GET_WORKS', work: result.data })
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
    return (
        <div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Job:</label>
                <select class="form-control"
                    onChange={(e) => dispatch({ type: 'CHANGE_JOB', job: e.target.value })} >
                    <option>Banquet</option>
                    <option>Causal</option>
                    <option>Chef assistant</option>
                    <option>Set up</option>
                    <option>Staff party</option>
                </select>
            </div>
            <div class="form-group">
                <label >Date:</label>
                <input class="form-control"
                    type="date"
                    placeholder="Enter Date"
                    onChange={(e) => dispatch({ type: 'CHANGE_DAY', day: e.target.value })}
                />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Time:</label>
                <select class="form-control"
                    onChange={(e) => dispatch({ type: 'CHANGE_TIMES', times: e.target.value })} >
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
                <label >Position:</label>
                <input class="form-control"
                    type="number"
                    placeholder="Enter Position"
                    onChange={(e) => dispatch({ type: 'CHANGE_POSITIONS', positions: e.target.value })}
                />
            </div>
            <button style={{ marginLeft: "4px" }}
                class="btn btn-success"
                onClick={addWork}
            >Add Data </button>
        </div>
    )
}
export default InputWorks