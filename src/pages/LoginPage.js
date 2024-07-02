import React from "react";
import LoginForm from "../components/LoginForm";
import ErrorBoundary from "../components/ErrorBoundary";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <ErrorBoundary>
        <LoginForm onLogin={onLogin} />
      </ErrorBoundary>
    </div>
  );
};

export default LoginPage;
