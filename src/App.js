import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreateReportPage from './pages/CreateReportPage';
import LoginPage from './pages/LoginPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import ManageSubscriptionPage from './pages/ManageSubscriptionPage'; 
import MyReportsPage from './pages/MyReportsPage';
import GetPremiumPage from './pages/GetPremiumPage'; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-report" element={<CreateReportPage />} />
        <Route path="/reports" element={<MyReportsPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/get-premium" element={<GetPremiumPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
        <Route path="/manage-subscription" element={<ManageSubscriptionPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
