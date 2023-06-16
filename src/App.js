
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import SnackbarProvider from 'react-simple-snackbar'
import Invoice from './components/Invoice/Invoice';
import Invoices from './components/Invoices/Invoices';
import InvoiceDetails from './components/InvoiceDetails/InvoiceDetails'
import ClientList from './components/Clients/ClientList'
import ProductList from './components/Products/ProductList'
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
function App() {

  const user = JSON.parse(localStorage.getItem('profile')) || true

  return (
    <div>
      <BrowserRouter>
      <SnackbarProvider>
      <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/invoice" exact component={Invoice} />
          <Route path="/edit/invoice/:id" exact component={Invoice} />
          <Route path="/invoice/:id" exact component={InvoiceDetails} />
          <Route path="/invoices" exact component={Invoices} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/customers" exact component={ClientList} />
          <Route path="/products" exact component={ProductList} />
          <Redirect exact from="/new-invoice" to="/invoice" />

        </Switch>
        <Footer />
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
