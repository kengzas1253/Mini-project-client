import {createStore, combineReducers} from 'redux'
const initialForm = {
    name: '',
    surname: '',
    telephone: '',
    position: '',
    date:'',
    time:'',
    status:'Waiting'
}
const workForm = {
    job: '',
    day: '',
    times: '',
    positions: ''
}
const cancelForm = {
    _name: '',
    _surname: '',
    _telephone: '',
    _position: '',
    _date:'',
    _time:'',
    _detail:'',
    _status:'Waiting'
}
const formWorkReducer = (state=workForm,action)=>{
    switch(action.type){
        case 'CHANGE_JOB': return {...state,job: action.job}
        case 'CHANGE_DAY': return {...state,day: action.day}
        case 'CHANGE_TIMES': return {...state,times: action.times}
        case 'CHANGE_POSITIONS': return {...state,positions: action.positions}
        default:return state;
    }
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_SURNAME': return {...state,surname: action.surname}
        case 'CHANGE_TELEPHONE': return {...state,telephone: action.telephone}
        case 'CHANGE_POSITION': return {...state,position: action.position}
        case 'CHANGE_DATE': return {...state,date: action.date}
        case 'CHANGE_TIME': return {...state,time: action.time}
        case 'CHANGE_STATUS': return {...state,status: action.status}
        default:return state;
    }
}

const formcancelReducer = (state=cancelForm,action)=>{
    switch(action.type){
        case '_CHANGE_NAME': return {...state,_name: action._name}
        case '_CHANGE_SURNAME': return {...state,_surname: action._surname}
        case '_CHANGE_TELEPHONE': return {...state,_telephone: action._telephone}
        case '_CHANGE_POSITION': return {...state,_position: action._position}
        case '_CHANGE_DATE': return {...state,_date: action._date}
        case '_CHANGE_TIME': return {...state,_time: action._time}
        case '_CHANGE_DETAIL': return {...state,_detail: action._detail}
        case '_CHANGE_STATUS': return {...state,_status: action._status}
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
                return state.filter(work => work._id !== +action.id)
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
const cancelReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_CANCEL':
            return action.cancel
        case 'ADD_CANCEL': 
            return [...state,action.cancel]
        case 'DELETE_CANCEL':
                return state.filter(cancel => cancel.id !== +action.id)
        case 'UPDATE_CANCEL':
            return state.map(cancel =>{
                if(+cancel.id === +action.id)
                    return action.cancel;
                else return cancel;
                })
        default:
            return state;
    }
}
const reducer = combineReducers({
    employee: employeeReducer,
    form: formReducer,
    formWork: formWorkReducer,
    work: workReducer,
    formcancel: formcancelReducer,
    cancel: cancelReducer
})

export const store = createStore(reducer)