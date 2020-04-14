import React from 'react'
import Employee from './Employee'
import Navbar from './Navbar'
const Status = () => {
    return (
        <div>
            <Navbar />

            <div style={{ marginTop: "20px" }} className="container">
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
        <span className="badge badge-danger">Fail</span>   
         
        </td>
        <td>Full job(งานเต็ม)</td>
      </tr>
      <tr>
        <td>
        <span className="badge badge-success">success</span>  
         </td>
        <td>Staff accepted(เจ้าหน้าที่ตอบรับแล้ว)</td>
      </tr>
     
    </tbody>
  </table>

                <Employee />
            </div>

        </div>
    )
}
export default Status