import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import InputWorks from './InputWork';

const Editwork=()=>{
    const works = useSelector(state=> state.work);
    const formWork = useSelector(state => state.formWork)
    const dispatch = useDispatch()
     useEffect(()=>{
        getWorks();
     },[])
     const getWorks = async () => {
        const result = await axios.get(`https://api-mongodb-mini-project.herokuapp.com/api/works`)
        console.log("my data",result.data)
        dispatch({type:'GET_WORKS',work: result.data})
      }
      const deleteWorks = async (work_id)=>{
        await axios.delete(`https://api-mongodb-mini-project.herokuapp.com/api/works/${work_id}`)
        dispatch({type:'DELETE_WORK',id: work_id })
        getWorks()
          
    }
    const updateWork = async (work_id) => {
        await axios.put(`https://api-mongodb-mini-project.herokuapp.com/api/works/${work_id}`,formWork)
         dispatch(
             {type:'UPDATE_WORK',
            id: work_id,
             work:{...formWork,id:  work_id}
         })
         getWorks()
         
       }
      const printWorks = ()=>{
        if(works && works.length){
            return works.map((work,index)=>{
                return(
                    <li key={index}>
                             {work.job} : {work.day} {work.times}: {work.positions} position 
                            <br/>
                            <button style={{marginLeft:"6px"}} className="btn btn-info btn-sm"
                            onClick={()=>updateWork(work._id)} >Update</button>
                           
                            <button style={{marginLeft:"6px"}} className="btn btn-danger btn-sm"
                            onClick={()=>deleteWorks(work._id)} >Delete</button>
                    </li> 
                    
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    } 
    return(
        <div >
            <div className="jumbotron">
            <h1 style={{marginTop:"-30px",color:"blue"}}>Edit Work</h1>
            <ul>
                {printWorks()}
            </ul>
            </div>
            <InputWorks/>
        </div>
    )
}
export default Editwork