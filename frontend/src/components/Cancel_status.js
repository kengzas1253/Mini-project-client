import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

export default function Cancel_status() {
    const cancels = useSelector(state => state.cancel);
    const dispatch = useDispatch()
    useEffect(() => {
        getCancel();
    }, [])
    const getCancel = async () => {
        const result = await axios.get(`https://api-mongodb-mini-project.herokuapp.com/api/cancel_job`)
        console.log("cancel job data", result.data)
        dispatch({ type: 'GET_CANCEL', cancel: result.data })
    }
    const printCancel = () => {
        if (cancels && cancels.length) {
            return cancels.map((cancel, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
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
        else {
            return (<h1>No data</h1>)
        }
    }
    return (
        <div className="Prompt">
            <h2>Status means</h2>

            <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <span className="badge badge-info">Waiting</span>
                        </td>
                        <td>Wait staff feedback(รอเจ้าหน้าที่ตอบรับ)</td>
                    </tr>
                    <tr>
                        <td>
                            <span className="badge badge-success">Approve</span>
                        </td>
                        <td>Staff Approve(เจ้าหน้าที่ตอบรับแล้ว)</td>
                    </tr>

                </tbody>
            </table>
            <div className="container">
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
            </div>

        </div>
    )
}
