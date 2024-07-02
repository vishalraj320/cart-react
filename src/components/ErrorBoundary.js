import React, { useState, useEffect, useCallback } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback((error, errorInfo) => {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    setHasError(true);
  }, []);

  useEffect(() => {
    const errorHandler = (event) => {
      handleError(event.error);
    };
    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
      window.removeEventListener("unhandledrejection", errorHandler);
    };
  }, [handleError]);

  if (hasError) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  return children;
};

export default ErrorBoundary;
