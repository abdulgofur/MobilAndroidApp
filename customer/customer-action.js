export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// other constants

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE' 
}

// action creators

export function addCustomer (customers){
    return {type: ADD_CUSTOMER, customers}
}

export function updateCustomer(customer){
    return {type : UPDATE_CUSTOMER, customer}
}


export function deleteCustomer(customer){
    return {type : DELETE_CUSTOMER, customer}
}

export function setVisibilityFilter(filter){
    return {type : SET_VISIBILITY_FILTER, filter}
}