 /* eslint-disable */
 import React, { useState, useEffect} from 'react'
 import Products from './products'
 import AddProduct from './addProduct'
 import { getProduct, getProductByUser } from '../../actions/productActions'

 import { useDispatch, useSelector } from 'react-redux'
 import { useLocation, useHistory } from 'react-router-dom'
 import NoData from '../svgIcons/NoData'
 import Spinner from '../Spinner/Spinner'
 
 
 const ProductList = () => {
 
     const location = useLocation()
     const [open, setOpen] = useState(false)
     const [currentId, setCurrentId] = useState(null)
     const dispatch = useDispatch()
     const {products} = useSelector((state) => state.products)
     const isLoading = useSelector(state => state.products.isLoading)
 
 
 useEffect(() => {
     dispatch(getProductByUser({ search: process.env.REACT_APP_CLIENT_ID }));
   },[location, dispatch])
 

 
   
   if(isLoading) {
     return  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '20px'}}>
         <Spinner />
     </div>
   }
 
   if(products.length === 0) {
     return  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '20px', margin: '80px'}}>
       <NoData />
     <p style={{padding: '40px', color: 'gray', textAlign: 'center'}}>No customers yet. Click the plus icon to add customer</p>
   
     </div>
   }
 
     return (
         <div>
             <AddProduct 
                 open={open} 
                 setOpen={setOpen}
                 currentId={currentId}
                 setCurrentId={setCurrentId}
             />
             <Products 
                 open={open} 
                 setOpen={setOpen}
                 currentId={currentId}
                 setCurrentId={setCurrentId}
                 products={products}
             />
         </div>
     )
 }
 
 export default ProductList
 
 