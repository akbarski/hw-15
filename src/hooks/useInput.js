import { useState } from "react";

const useInput = (initialValue, type, validation) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validate = () => {
    if (type === "email") {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(value)) {
        setError("Invalid email address");
        return false;
      }
    }
    if (type === "password") {
      if (value.length < 8) {
        setError("Password must be at least 8 characters long");
        return false;
      }
    }
    if (type === "date") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(value)) {
        setError("Invalid date format (YYYY-MM-DD)");
        return false;
      }
    }
    
    if (validation && !validation(value)) {
      setError("Invalid value");
      return false;
    }

    setError(null);
    return true;
  };

  return {
    value,
    error,
    onChange: handleChange,
    validate,
  };
};

export default useInput;
