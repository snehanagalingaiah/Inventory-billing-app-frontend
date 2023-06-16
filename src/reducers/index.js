import { combineReducers } from 'redux'

import invoices from './invoices'
import clients from './clients'
import products from './products'

export default combineReducers({ invoices, clients, products })