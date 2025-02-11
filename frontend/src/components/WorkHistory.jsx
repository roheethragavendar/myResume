// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import IconAdd from '../assets/icons/plus-icon.svg'


// const WorkHistory = ({ activeStep, onNextStep, onPreviousStep }) => {
//   const navigate = useNavigate();

//   const handleNextClick = () => {
//     if (validateForm()) {
//       navigate("/education");
//       onNextStep();
//     }
//   };

//   const handleBackClick = () => {
//     navigate("/");
//     console.log("BTN CLICKED", navigate);
//     onNextStep();
//   };

//   const [formData, setFormData] = useState({
//     jobTitle: "",
//     employer: ""
//   });

//   const [workHistory, setWorkHistory] = useState(1)

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.jobTitle.trim()) {
//       newErrors.jobTitle = "Job title is required";
//     }
//     if (!formData.employer.trim()) {
//       newErrors.employer = "Employer is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleAddSkill = () => {
//     setWorkHistory(...workHistory, workHistory.lenght + 1 )
//   }

//   return (
//     <main className="w-full bg-gray-100 min-h-screen">
//       <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-[350px] p-4 sm:p-6 md:p-12">
//         <div className="flex flex-col gap-6">
//           <div className="w-full sm:max-w-[900px]">
//             <h1 className="text-[#002D6B] text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
//               WorkHistory
//             </h1>
//           </div>
//           {workHistory.map((_, index) => (
//             <div className="flex flex-col gap-5" key={index}>
//               <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
//                 <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
//                   <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
//                     <label htmlFor="jobTitle" className="mb-2">
//                       Job Title *
//                     </label>
//                     <input
//                       type="text"
//                       name="jobTitle"
//                       id="jobTitle"
//                       value={formData.jobTitle}
//                       onChange={handleInputChange}
//                       className={`w-full border h-10 px-3 rounded focus:outline-none ${errors.jobTitle ? "border-red-500" : "border-[#002D6B]"}`}
//                     />
//                     {errors.firstName && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
//                     {/* className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2" */}

//                   </div>

//                   <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
//                     <label htmlFor="employer" className="mb-2">
//                       Employer *
//                     </label>
//                     <input
//                       type="text"
//                       name="employer"
//                       id="employer"
//                       // className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                       value={formData.employer}
//                       onChange={handleInputChange}
//                       className={`w-full border h-10 px-3 rounded focus:outline-none ${errors.employer ? "border-red-500" : "border-[#002D6B]"}`}
//                     />
//                     {errors.firstName && <p className="text-red-500 text-sm">{errors.employer}</p>}


//                   </div>

//                   <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
//                     <label htmlFor="location" className="mb-2">
//                       Location
//                     </label>
//                     <input
//                       type="text"
//                       name="location"
//                       id="location"
//                       className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-[10px]">
//                 <input
//                   type="checkbox"
//                   name=""
//                   id=""
//                   className="w-[30px] border-2 border-[#002D6B] h-10 px-3 focus:outline-none focus:border-2"
//                 />
//                 <label className="text-[#002D6B] text-sm sm:text-base w-full sm:max-w-[300px]">
//                   Remote
//                 </label>
//               </div>
//               <div className="flex gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
//                 <div className="flex flex-col w-full">
//                   <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
//                     Start Date
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
//                       <input
//                         type="text"
//                         name="country"
//                         id="country"
//                         className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                       />
//                     </div>

//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
//                       <input
//                         type="text"
//                         name="pinCode"
//                         id="pinCode"
//                         className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col w-full">
//                   <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
//                     End Date
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
//                       <input
//                         type="text"
//                         name="country"
//                         id="country"
//                         className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                       />
//                     </div>

//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[190px]">
//                       <input
//                         type="text"
//                         name="pinCode"
//                         id="pinCode"
//                         className="w-full border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
//             <button
//               onClick={onPreviousStep}
//               disabled={activeStep === 0}
//               className="font-bold text-sm sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleNextClick}
//               disabled={activeStep === 5}
//               className="bg-[#026A73] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8-full rounded-full text-white hover:opacity-90 transition"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-center mt-[30px]">
//           <button
//             onClick={handleAddSkill}
//             className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-2 hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
//           >
//             <img src={IconAdd} alt="" />Add More
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default WorkHistory;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import IconAdd from '../assets/icons/plus-icon.svg';
// import IconDelete from '../assets/icons/delete-icon.svg';
// import Select from 'react-select';

// const WorkHistory = ({ activeStep, onNextStep, onPreviousStep }) => {
//   const navigate = useNavigate();

//   const [workHistory, setWorkHistory] = useState([
//     {
//       id: Date.now(),
//       jobTitle: "",
//       employer: "",
//       location: "",
//       startMonth: "",
//       startYear: "",
//       endMonth: "",
//       endYear: "",
//       remote: false,
//     },
//   ]);

//   const [formData, setFormData] = useState([
//     {
//       id: Date.now(),
//       jobTitle: "",
//       employer: "",
//       location: "",
//       startMonth: "",
//       startYear: "",
//       endMonth: "",
//       endYear: "",
//       remote: false,
//     },
//   ]);

//   const options = [
//     { value: 'January', label: 'January' },
//     { value: 'February', label: 'February' },
//     { value: 'March', label: 'March' },
//     { value: 'April', label: 'April' },
//     { value: 'May', label: 'May' },
//     { value: 'June', label: 'June' },
//     { value: 'July', label: 'July' },
//     { value: 'August', label: 'August' },
//     { value: 'September', label: 'September' },
//     { value: 'October', label: 'October' },
//     { value: 'November', label: 'November' },
//     { value: 'December', label: 'December' },
//   ];

//   const optionsTwo = [
//     { value: '1990', label: '1990' },
//     { value: '1991', label: '1991' },
//     { value: '1992', label: '1992' },
//     { value: '1993', label: '1993' },
//     { value: '1994', label: '1994' },
//     { value: '1995', label: '1995' },
//     { value: '1996', label: '1996' },
//     { value: '1997', label: '1997' },
//     { value: '1998', label: '1998' },
//     { value: '1999', label: '1999' },
//     { value: '2000', label: '2000' },
//     { value: '2001', label: '2001' },
//     { value: '2002', label: '2002' },
//   ];

//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       width: '100%',
//       borderRadius: '0px',
//       border: '1px solid #002D6B',
//       padding: '0 10px',
//       height: '56px',
//       '&:hover': {
//         borderColor: '#026A73',
//       },
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       backgroundColor: state.isSelected ? '#026A73' : state.isFocused ? '#E0F1F3' : '#FFF',
//       color: state.isSelected ? '#FFF' : '#002D6B',
//       padding: '10px',
//       '&:hover': {
//         backgroundColor: '#E0F1F3',
//       },
//     }),
//     menu: (provided) => ({
//       ...provided,
//       borderRadius: '8px',
//       border: '2px solid #002D6B',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     }),
//   };

//   const [errors, setErrors] = useState({});

//   // Handle input changes correctly
//   const handleInputChange = (e, id) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) =>
//       prevFormData.map((entry) =>
//         entry.id === id ? { ...entry, [name]: value } : entry
//       )
//     );
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [`${name}-${id}`]: "",
//     }));
//   };

//   // Validation function
//   const validateForm = () => {
//     let newErrors = {};
//     formData.forEach((data) => {
//       if (!data.jobTitle.trim()) {
//         newErrors[`jobTitle-${data.id}`] = "Job title is required";
//       }
//       if (!data.employer.trim()) {
//         newErrors[`employer-${data.id}`] = "Employer is required";
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle Next Click
//   const handleNextClick = () => {
//     if (validateForm()) {
//       navigate("/education");
//       onNextStep();
//     }
//   };

//   // Handle Back Click
//   const handleBackClick = () => {
//     onPreviousStep();
//     navigate("/");
//   };

//   // Handle adding a new work history entry
//   const handleAddSkill = () => {
//     const newEntry = {
//       id: Date.now(),
//       jobTitle: "",
//       employer: "",
//       location: "",
//       startMonth: "",
//       startYear: "",
//       endMonth: "",
//       endYear: "",
//       remote: false,
//     };
//     setWorkHistory([...workHistory, newEntry]);
//     setFormData([...formData, newEntry]);
//   };

//   // Handle deleting a work history entry
//   const handleDelete = (id) => {
//     setWorkHistory(workHistory.filter((entry) => entry.id !== id));
//     setFormData(formData.filter((data) => data.id !== id));
//   };

//   return (
//     <main className="w-full bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-[200px] p-4 sm:p-6 md:p-12">
//         <div className="flex flex-col gap-6">
//           <div className="w-full sm:max-w-[900px]">
//             <h1 className="text-[#002D6B] text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
//               Work History
//             </h1>
//           </div>
//           {workHistory.map((workEntry) => (
//             <div className="flex flex-col gap-5" key={workEntry.id}>
//               <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
//                 <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
//                   {/* Job Title */}
//                   <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
//                     <label htmlFor={`jobTitle-${workEntry.id}`} className="mb-2">
//                       Job Title *
//                     </label>
//                     <input
//                       type="text"
//                       name="jobTitle"
//                       id={`jobTitle-${workEntry.id}`}
//                       value={formData.find((data) => data.id === workEntry.id)?.jobTitle || ""}
//                       onChange={(e) => handleInputChange(e, workEntry.id)}
//                       placeholder="e.g. Web developer"
//                       className={`w-full border text-[18px] font-normal h-14 px-3 focus:outline-none ${
//                         errors[`jobTitle-${workEntry.id}`] ? "border-red-500" : "border-[#002D6B]"
//                       }`}
//                     />
//                     {errors[`jobTitle-${workEntry.id}`] && (
//                       <p className="text-red-500 text-sm">{errors[`jobTitle-${workEntry.id}`]}</p>
//                     )}
//                   </div>

//                   {/* Employer */}
//                   <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
//                     <label htmlFor={`employer-${workEntry.id}`} className="mb-2">
//                       Employer *
//                     </label>
//                     <input
//                       type="text"
//                       name="employer"
//                       id={`employer-${workEntry.id}`}
//                       value={formData.find((data) => data.id === workEntry.id)?.employer || ""}
//                       onChange={(e) => handleInputChange(e, workEntry.id)}
//                       placeholder="e.g. H&M"
//                       className={`w-full border text-[18px] font-normal h-14 px-3 focus:outline-none ${
//                         errors[`employer-${workEntry.id}`] ? "border-red-500" : "border-[#002D6B]"
//                       }`}
//                     />
//                     {errors[`employer-${workEntry.id}`] && (
//                       <p className="text-red-500 text-sm">{errors[`employer-${workEntry.id}`]}</p>
//                     )}
//                   </div>

//                   {/* Location input */}
//                   <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
//                     <label htmlFor="location" className="mb-2">
//                       Location
//                     </label>
//                     <input
//                       type="text"
//                       name="location"
//                       id="location"
//                       placeholder="e.g. Chennai"
//                       className="w-full border text-[18px] font-normal border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Checkbox */}
//               <div className="flex items-center gap-[10px]">
//                 <input
//                   type="checkbox"
//                   name=""
//                   id=""
//                   className="w-[30px] border-2 border-[#002D6B] h-14 px-3 focus:outline-none focus:border-2"
//                 />
//                 <label className="text-[#002D6B] text-sm sm:text-base w-full sm:max-w-[300px]">
//                   Remote
//                 </label>
//               </div>
//               {/* Start and End Dates */}
//               <div className="flex gap-4 sm:gap-6 gap-y-6 w-full sm:w-[850px]">
//                 <div className="flex flex-col w-full">
//                   <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
//                     Start Date
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
//                       <Select
//                         // defaultValue={selectedOption}
//                         // onChange={setSelectedOption}
//                         options={options}
//                         styles={customStyles}
//                         placeholder="month"
//                       />
//                     </div>

//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
//                       <Select
//                         // defaultValue={selectedOption}
//                         // onChange={setSelectedOption}
//                         options={optionsTwo}
//                         styles={customStyles}
//                         placeholder="year"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col w-full">
//                   <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
//                     End Date
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
//                       <Select
//                         // defaultValue={selectedOption}
//                         // onChange={setSelectedOption}
//                         options={options}
//                         styles={customStyles}
//                         placeholder="month"
//                       />
//                     </div>

//                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
//                       <Select
//                         // defaultValue={selectedOption}
//                         // onChange={setSelectedOption}
//                         options={optionsTwo}
//                         styles={customStyles}
//                         placeholder="year"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           <div className="cursor-pointer" onClick={() => handleDelete(workEntry.id)}>
//             <img src={IconDelete} alt="" className="-text-[#002D6B]" />
//           </div>
//             </div>
//           ))}
//           <div className="flex justify-center mt-[30px]">
//             <button
//               onClick={handleAddSkill}
//               className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-[3px] hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
//             >
//               <img src={IconAdd} alt="" /> Add work experience
//             </button>
//           </div>

//           <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
//             <button
//               onClick={handleBackClick}
//               disabled={activeStep === 0}
//               className="font-bold w-[150px] text-[#026A73] text-sm sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleNextClick}
//               disabled={activeStep === 5}
//               className="bg-[#026A73] w-[150px] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8-full rounded-full text-white hover:opacity-90 transition"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default WorkHistory;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext"; // Adjust the import path as needed
import IconAdd from '../assets/icons/plus-icon.svg';
import IconDelete from '../assets/icons/delete-icon.svg';
import Select from 'react-select';

const WorkHistory = ({ activeStep, onNextStep, onPreviousStep }) => {
  const navigate = useNavigate();
  const { formDataContext, updateWorkHistory } = useFormContext();

  const [workHistory, setWorkHistory] = useState(formDataContext.workHistory);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setWorkHistory(formDataContext.workHistory);
  }, [formDataContext.workHistory]);

  const options = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];

  const optionsTwo = [
    { value: '1990', label: '1990' },
    { value: '1991', label: '1991' },
    { value: '1992', label: '1992' },
    { value: '1993', label: '1993' },
    { value: '1994', label: '1994' },
    { value: '1995', label: '1995' },
    { value: '1996', label: '1996' },
    { value: '1997', label: '1997' },
    { value: '1998', label: '1998' },
    { value: '1999', label: '1999' },
    { value: '2000', label: '2000' },
    { value: '2001', label: '2001' },
    { value: '2002', label: '2002' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '100%',
      borderRadius: '0px',
      border: '1px solid #002D6B',
      padding: '0 10px',
      height: '56px',
      '&:hover': {
        borderColor: '#026A73',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#026A73' : state.isFocused ? '#E0F1F3' : '#FFF',
      color: state.isSelected ? '#FFF' : '#002D6B',
      padding: '10px',
      '&:hover': {
        backgroundColor: '#E0F1F3',
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      border: '2px solid #002D6B',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }),
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedWorkHistory = workHistory.map((entry) =>
      entry.id === id ? { ...entry, [name]: value } : entry
    );
    setWorkHistory(updatedWorkHistory);
    updateWorkHistory(updatedWorkHistory);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [`${name}-${id}`]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    workHistory.forEach((data) => {
      if (!data.jobTitle.trim()) {
        newErrors[`jobTitle-${data.id}`] = "Job title is required";
      }
      if (!data.employer.trim()) {
        newErrors[`employer-${data.id}`] = "Employer is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      navigate("/education");
      onNextStep();
    }
  };

  const handleBackClick = () => {
    onPreviousStep();
    navigate("/");
  };

  const handleAddSkill = () => {
    const newEntry = {
      id: Date.now(),
      jobTitle: "",
      employer: "",
      location: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      remote: false,
    };
    const updatedWorkHistory = [...workHistory, newEntry];
    setWorkHistory(updatedWorkHistory);
    updateWorkHistory(updatedWorkHistory);
  };

  const handleDelete = (id) => {
    const updatedWorkHistory = workHistory.filter((entry) => entry.id !== id);
    setWorkHistory(updatedWorkHistory);
    updateWorkHistory(updatedWorkHistory);
  };

  return (
    <main className="w-full bg-gray-100 min-h-screen flex flex-col justify-center">
      <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-[200px] p-4 sm:p-6 md:p-12">
        <div className="flex flex-col gap-6">
          <div className="w-full sm:max-w-[900px]">
            <h1 className="text-[#002D6B] text-center sm:text-left text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
              Work History
            </h1>
          </div>
          {workHistory.map((workEntry) => (
            <div className="flex flex-col gap-5" key={workEntry.id}>
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
                  {/* Job Title */}
                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                    <label htmlFor={`jobTitle-${workEntry.id}`} className="mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      id={`jobTitle-${workEntry.id}`}
                      value={workEntry.jobTitle || ""}
                      onChange={(e) => handleInputChange(e, workEntry.id)}
                      placeholder="e.g. Web developer"
                      className={`w-full border text-[18px] font-normal h-14 px-3 focus:outline-none ${errors[`jobTitle-${workEntry.id}`] ? "border-red-500" : "border-[#002D6B]"
                        }`}
                    />
                    {errors[`jobTitle-${workEntry.id}`] && (
                      <p className="text-red-500 text-sm">{errors[`jobTitle-${workEntry.id}`]}</p>
                    )}
                  </div>

                  {/* Employer */}
                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                    <label htmlFor={`employer-${workEntry.id}`} className="mb-2">
                      Employer *
                    </label>
                    <input
                      type="text"
                      name="employer"
                      id={`employer-${workEntry.id}`}
                      value={workEntry.employer || ""}
                      onChange={(e) => handleInputChange(e, workEntry.id)}
                      placeholder="e.g. H&M"
                      className={`w-full border text-[18px] font-normal h-14 px-3 focus:outline-none ${errors[`employer-${workEntry.id}`] ? "border-red-500" : "border-[#002D6B]"
                        }`}
                    />
                    {errors[`employer-${workEntry.id}`] && (
                      <p className="text-red-500 text-sm">{errors[`employer-${workEntry.id}`]}</p>
                    )}
                  </div>

                  {/* Location input */}
                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                    <label htmlFor="location" className="mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={workEntry.location || ""}
                      onChange={(e) => handleInputChange(e, workEntry.id)}
                      placeholder="e.g. Chennai"
                      className="w-full border text-[18px] font-normal border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                    />
                  </div>
                </div>
              </div>
              {/* Checkbox */}
              <div className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  name="remote"
                  checked={workEntry.remote || false}
                  onChange={(e) => handleInputChange(e, workEntry.id)}
                  className="w-[30px] border-2 border-[#002D6B] h-14 px-3 focus:outline-none focus:border-2"
                />
                <label className="text-[#002D6B] text-sm sm:text-base w-full sm:max-w-[300px]">
                  Remote
                </label>
              </div>
              {/* Start and End Dates */}
              <div className="flex gap-4 sm:gap-6 gap-y-6 w-full sm:w-[850px]">
                <div className="flex flex-col w-full">
                  <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
                    Start Date
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
                      <Select
                        value={options.find(option => option.value === workEntry.startMonth)}
                        onChange={(selectedOption) => {
                          const updatedWorkHistory = workHistory.map((entry) =>
                            entry.id === workEntry.id ? { ...entry, startMonth: selectedOption.value } : entry
                          );
                          setWorkHistory(updatedWorkHistory);
                          updateWorkHistory(updatedWorkHistory);
                        }}
                        options={options}
                        styles={customStyles}
                        placeholder="month"
                      />
                    </div>

                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
                      <Select
                        value={optionsTwo.find(option => option.value === workEntry.startYear)}
                        onChange={(selectedOption) => {
                          const updatedWorkHistory = workHistory.map((entry) =>
                            entry.id === workEntry.id ? { ...entry, startYear: selectedOption.value } : entry
                          );
                          setWorkHistory(updatedWorkHistory);
                          updateWorkHistory(updatedWorkHistory);
                        }}
                        options={optionsTwo}
                        styles={customStyles}
                        placeholder="year"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[400px] mb-2">
                    End Date
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
                      <Select
                        value={options.find(option => option.value === workEntry.endMonth)}
                        onChange={(selectedOption) => {
                          const updatedWorkHistory = workHistory.map((entry) =>
                            entry.id === workEntry.id ? { ...entry, endMonth: selectedOption.value } : entry
                          );
                          setWorkHistory(updatedWorkHistory);
                          updateWorkHistory(updatedWorkHistory);
                        }}
                        options={options}
                        styles={customStyles}
                        placeholder="month"
                      />
                    </div>

                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[190px]">
                      <Select
                        value={optionsTwo.find(option => option.value === workEntry.endYear)}
                        onChange={(selectedOption) => {
                          const updatedWorkHistory = workHistory.map((entry) =>
                            entry.id === workEntry.id ? { ...entry, endYear: selectedOption.value } : entry
                          );
                          setWorkHistory(updatedWorkHistory);
                          updateWorkHistory(updatedWorkHistory);
                        }}
                        options={optionsTwo}
                        styles={customStyles}
                        placeholder="year"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer" onClick={() => handleDelete(workEntry.id)}>
                <img src={IconDelete} alt="" className="-text-[#002D6B]" />
              </div>
            </div>
          ))}
          {workHistory.length < 1 ? (
            <div className="flex flex-col items-center justify-center mt-[30px]">
              <h1 className="text-[#002D6B] text-lg sm:text-xl font-semibold text-center mb-4">
                Please provide at least one work history to proceed.
              </h1>
              <button
                onClick={handleAddSkill}
                className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-[3px] hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
              >
                <img src={IconAdd} alt="" /> Add work experience
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-[30px]">
              <button
                onClick={handleAddSkill}
                className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-[3px] hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
              >
                <img src={IconAdd} alt="" /> Add work experience
              </button>
            </div>
          )}

          <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
            <button
              onClick={handleBackClick}
              disabled={activeStep === 0}
              className="font-bold w-[150px] text-[#002D6B] text-sm sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              disabled={activeStep === 5}
              className="bg-[#026A73] w-[150px] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8-full rounded-full text-white hover:opacity-90 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkHistory;
