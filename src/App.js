import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CreateReportPage from './pages//CreateReport/CreateReportPage';
import LoginPage from './pages/Login/LoginPage';
import AccountSettingsPage from './pages/AccountSettings/AccountSettingsPage';
import ManageSubscriptionPage from './pages/ManageSubscription/ManageSubscriptionPage';
import MyReportsPage from './pages/MyReports/MyReportsPage';
import GetPremiumPage from './pages/GetPremium/GetPremiumPage';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import RegisterPage from './pages/Register/RegisterPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>} />

        <Route path="/create-report" element={
          <PrivateRoute>
            <CreateReportPage />
          </PrivateRoute>
        } />

        <Route path="/reports" element={
          <PrivateRoute>
            <MyReportsPage />
          </PrivateRoute>} />

        <Route path="/login" element={
          <LoginPage />}
        />

        <Route path="/register" element={
          <RegisterPage />}
        />

        <Route path="/get-premium" element={
          <PrivateRoute>
            <GetPremiumPage />
          </PrivateRoute>} />

        <Route path="/account-settings" element={
          <PrivateRoute>
            <AccountSettingsPage />
          </PrivateRoute>} />

        <Route path="/manage-subscription" element={
          <PrivateRoute>
            <ManageSubscriptionPage />
          </PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
