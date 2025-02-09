import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formDataContext, setFormDataContext] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      pinCode: "",
      phone: "",
      email: "",
      linkedIn: "",
      website: "",
      userImage: "",
    },
    workHistory: [{}],
    education: {},
  });

  const updateFormData = (step, newData) => {
    setFormDataContext((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], ...newData },
    }));
  };

  return (
    <FormContext.Provider value={{ formDataContext, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
