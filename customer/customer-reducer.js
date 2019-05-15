import { ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER, VisibilityFilters, SET_VISIBILITY_FILTER } from "./lessonAction";


const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    customers: []
}

function customers(customers = [], action) {
    switch (action.type) {
        case ADD_CUSTOMER:
            return [...customers, action.customers]
        case UPDATE_CUSTOMER:
            return customers.map((customer) => {
                if (customer.cif === action.customer.id) {
                    return Object.assign([], action.customer)
                }
                return customer
            })
        case DELETE_CUSTOMER:
            const { deleted, ...newState } = customers
            return newState;
        default:
            return customers
    }
}

function visibilityFilter(visibilityFilter = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return visibilityFilter
    }
}

export default function customerApp(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        customers: customers(state.customers, action)
    }
}
