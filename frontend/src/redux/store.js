import {createStore, combineReducers} from 'redux'
const initialForm = {
    
    name: '',
    surname: '',
    tel: '',
    position: ''

}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_SURNAME': return {...state,surname: action.surname}
        case 'CHANGE_TEL': return {...state,tel: action.tel}
        case 'CHANGE_POSITION': return {...state,position: action.position}
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
const reducer = combineReducers({
    employee: employeeReducer,
    form: formReducer
})

export const store = createStore(reducer)