import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
const Works =()=>{
    const works = useSelector(state=> state.work);
    const dispatch = useDispatch()
     useEffect(()=>{
        getWorks();
     },[])
     const getWorks = async () => {
        const result = await axios.get(`https://api-booking-parttimes.herokuapp.com/api/works`)
        console.log("my data",result.data)
        dispatch({type:'GET_WORKS',work: result.data})
      }
      const printWorks = ()=>{
        if(works && works.length){
            return works.map((work,index)=>{
                return(
                    <tr>
                      <td>{work.id}</td>
                      <td>{work.job}</td>
                      <td>{work.detail}</td>
                      <td>{work.number} position</td>
                    </tr>
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    } 
     
    return(
        <diV class="container">
            <h3>New Parttime job</h3>
            <table className="table table-bordered" >
                <tr >
                  <th>NO.</th>
                  <th>Job</th> 
                  <th>Date</th>
                  <th>Position</th>
                </tr>
                    {printWorks()}  
            </table>
        </diV>
    )
}
export default Works