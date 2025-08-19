import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; 

import CreateAccount from './pages/CreateAccount';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import PasswordVerification from './Pages/PasswordVerification';
import SuccessPage from "./Pages/SuccessPage";
import ProficiencyTest from './Pages/ProficiencyTest';
import TestSuccess from './Pages/TestSuccess';
import TestFailure from './Pages/TestFailure';
import ErrorPage from './Pages/ErrorPage';
import Dashboard from './Pages/Dashboard';
import LeaderBoard from './Pages/LeaderBoard';
import TrackSelection from "./Pages/TrackSelection";
import PageNotFound from './Pages/PageNotFound';




const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/password-verification", element: <PasswordVerification /> },
  { path: "/success", element: <SuccessPage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/LeaderBoard", element: <LeaderBoard /> },
  { path: "/track-selection", element: <TrackSelection /> },
  { path: "/proficiency-test", element: <ProficiencyTest /> },
  { path: "/test-success", element: <TestSuccess /> },
  { path: "/test-failure", element: <TestFailure /> },
  { path: "*", element: <PageNotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

