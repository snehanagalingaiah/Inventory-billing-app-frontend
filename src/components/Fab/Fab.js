import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddClient from '../Invoice/AddClient';
import AddProduct from "../Products/addProduct"


const FabButton = () => {

  const location = useLocation()
  const mainButtonStyles = {backgroundColor: '#1976D2'}
  const [open, setOpen] = useState(false)
  const [openAddItem, setOpenAddItem] = useState(false)


    return (
        <div>
           <AddClient setOpen={setOpen} open={open} />
           <AddProduct setOpen={setOpenAddItem} open={openAddItem} />
          <Fab
            mainButtonStyles={mainButtonStyles}
            icon={ <AddIcon />}
            alwaysShowTitle={true}
          >

            {location.pathname !== '/invoice' && (
              <Action
                  text="New Invoice"
                  // onClick={() =>  history.push(`/invoice`)}
                  onClick={() => window.location.href='/invoice'}
                >
                  <CreateIcon />
              </Action>
            )}

            <Action
                text="New Customer"
                onClick={() => setOpen((prev) => !prev)}
              >
                <PersonAddIcon />
            </Action>

            <Action
                text="New Product"
                onClick={() => setOpenAddItem((prev) => !prev)}
              >
                <PersonAddIcon />
            </Action>

          </Fab>
        </div>
    )
}

export default FabButton
