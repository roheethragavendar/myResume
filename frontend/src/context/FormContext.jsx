// import React, { createContext, useState, useContext } from "react";

// const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formDataContext, setFormDataContext] = useState({
//     personalInfo: {
//       firstName: "",
//       lastName: "",
//       city: "",
//       country: "",
//       pinCode: "",
//       phone: "",
//       email: "",
//       linkedIn: "",
//       website: "",
//       userImage: "",
//     },
//     workHistory: [{
      
//     }],
//     education: {},
//   });

//   const updateFormData = (step, newData) => {
//     setFormDataContext((prevData) => ({
//       ...prevData,
//       [step]: { ...prevData[step], ...newData },
//     }));
//   };

//   return (
//     <FormContext.Provider value={{ formDataContext, updateFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useFormContext = () => useContext(FormContext);
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
    workHistory: [],
    education: [],
    skills: {
      textEditor: "", // For the rich text editor content
      skillsRating: [], // For the skills rating and feedback
    },
    summary: "",
  });

  const updateFormData = (step, newData) => {
    setFormDataContext((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], ...newData },
    }));
  };

  const updateWorkHistory = (newWorkHistory) => {
    setFormDataContext((prevData) => ({
      ...prevData,
      workHistory: newWorkHistory,
    }));
  };

  const updateEducation = (newEducation) => {
    setFormDataContext((prevData) => ({
      ...prevData,
      education: newEducation,
    }));
  };

  const updateSkills = (newSkills) => {
    setFormDataContext((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const updateSummary = (newSummary) => {
    setFormDataContext((prevData) => ({
      ...prevData,
      summary: newSummary,
    }));
  };

  return (
    <FormContext.Provider value={{ formDataContext, updateFormData, updateWorkHistory, updateEducation, updateSkills, updateSummary }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);