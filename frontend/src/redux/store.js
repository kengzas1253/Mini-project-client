import {createStore, combineReducers} from 'redux'
const initialForm = {
    
    name: '',
    surname: '',
    tel: '',
    position: '',
    date:'',
    status:'waiting'
}
const workForm = {
    job: '',
    detail: '',
    number: '',
}
const formWorkReducer = (state=workForm,action)=>{
    switch(action.type){
        case 'CHANGE_JOB': return {...state,job: action.job}
        case 'CHANGE_DETAIL': return {...state,detail: action.detail}
        case 'CHANGE_NUMBER': return {...state,number: action.number}
        default:return state;
    }
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_SURNAME': return {...state,surname: action.surname}
        case 'CHANGE_TEL': return {...state,tel: action.tel}
        case 'CHANGE_POSITION': return {...state,position: action.position}
        case 'CHANGE_DATE': return {...state,date: action.date}
        case 'CHANGE_STATUS': return {...state,status: action.status}
        default:return state;
    }
}


const employeeReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_EMPLOYEES':
            return action.employee
        case 'ADD_EMPLOYEE': 
            return [...state,action.employee]
        case 'DELETE_EMPLOYEE':
                return state.filter(employee => employee.id !== +action.id)
        case 'UPDATE_EMPLOYEE':
            return state.map(employee =>{
                if(+employee.id === +action.id)
                    return action.employee;
                else return employee;
                })
        default:
            return state;
    }
}
const workReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_WORKS':
            return action.work
        case 'ADD_WORK': 
            return [...state,action.work]
        case 'DELETE_WORK':
                return state.filter(work => work.id !== +action.id)
        case 'UPDATE_WORK':
            return state.map(work =>{
                if(+work.id === +action.id)
                    return action.work;
                else return work;
                })
        default:
            return state;
    }
}
const reducer = combineReducers({
    employee: employeeReducer,
    form: formReducer,
    formWork: formWorkReducer,
    work: workReducer
})

export const store = createStore(reducer)