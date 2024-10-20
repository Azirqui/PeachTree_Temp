import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard'; // Ensure the path is correct
import AddOrder from './components/AddOrder'; // Ensure the path is correct
import Layout from './components/Layout'; // Ensure the path is correct
import ViewOrders from './components/ViewOrders'; // Ensure the path is correct
import ManageOrders from './components/ManageOrders'; // Ensure the path is correct
//import AddSupplier from './components/AddSupplier'; // Ensure the path is correct
//import ManageSuppliers from './components/ManageSuppliers'; // Ensure the path is correct
//import EditSupplier from './components/EditSupplier'; // Ensure the path is correct
import AddInventoryItem from './components/AddInventoryItem'; // Ensure the path is correct
import ManageInventories from './components/ManageInventories'; // Ensure the path is correct
import AddSalesRecord from './components/AddSalesRecord';
import ManageSales from './components/ManageSales';
import GenerateReport from './components/GenerateReport';
//import AddEmployee from './components/AddEmployee';
//import ManageEmployee from './components/ManageEmployee';
import Settings from './components/Settings';
import Register from './components/register';
import SignIn from './components/signIn';
import InputDisplay from './components/InputDisplay';
function App() {
  return (
    <Router>
      <Routes>
        {/*Dashboard is the Default Route */}
        {/* <Route path="/" element={<CashierProfile />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Layout />}>           
          
          <Route index element={<Dashboard />} /> {/* Default route */}
          {/* <Route path="orders/add" element={<AddOrder />} /> */}
          
          <Route path="orders/add" element={<AddOrder />} />
          <Route path="orders/view" element={<ViewOrders />} />
          <Route path="orders/manage" element={<ManageOrders />} />
          <Route path="inventory/add" element={<AddInventoryItem />} />
          <Route path="inventory/add1" element={<ManageInventories />} />
          <Route path="sales/add" element={<AddSalesRecord />} />
          <Route path="sales/manage" element={<ManageSales />} />
          <Route path="sales/report" element={<GenerateReport />} />
          <Route path="/products" element={<InputDisplay />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
