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
import { useLocalState } from './pages/utils/useLocalStorage';
import ReportPage from './pages/Report/ReportPage';
import NotFound from './pages/NotFound/NotFound';


function App() {
  const [jwt, setJwt] = useLocalState("", "jwt")
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={jwt ?
          <HomePage /> : <LoginPage />}
        />
        <Route path="/register" element={jwt ?
          <HomePage /> : <RegisterPage />}
        />
        <Route path='*' exact={true} element={<NotFound />} />

        <Route path="/" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>}
        />

        <Route path="/create-report" element={
          <PrivateRoute>
            <CreateReportPage />
          </PrivateRoute>}
        />

        <Route path="/report/:reportId" element={
          <PrivateRoute>
            <ReportPage />
          </PrivateRoute>}
        />

        <Route path="/reports" element={
          <PrivateRoute>
            <MyReportsPage />
          </PrivateRoute>}
        />

        <Route path="/get-premium" element={
          <PrivateRoute>
            <GetPremiumPage />
          </PrivateRoute>}
        />

        <Route path="/account-settings" element={
          <PrivateRoute>
            <AccountSettingsPage />
          </PrivateRoute>}
        />

        <Route path="/manage-subscription" element={
          <PrivateRoute>
            <ManageSubscriptionPage />
          </PrivateRoute>}
        />

      </Routes>

    </Router>
  );
}

export default App;
