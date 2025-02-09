// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Select from 'react-select';
// import IconAdd from '../assets/icons/plus-icon.svg';

// const Education = ({ activeStep, onNextStep, onPreviousStep }) => {
//     const navigate = useNavigate();

//     const [selectedDegree, setSelectedDegree] = useState(null);
//     const [education, setEducation] = useState([
//         {
//             id: Date.now(),
//             institutionName: "",
//             institutionLocation: "",
//             Degree: "",
//             fieldOfStudy: "",
//             endMonth: "",
//             endYear: "",
//         },
//     ]);

//     const [formData, setFormData] = useState([
//         {
//             id: Date.now(),
//             institutionName: "",
//             institutionLocation: "",
//             Degree: "",
//             fieldOfStudy: "",
//             endMonth: "",
//             endYear: "",
//         },
//     ]);

//     const options = [
//         { value: '', label: 'Select' },
//         { value: 'January', label: 'January' },
//         { value: 'February', label: 'February' },
//         { value: 'March', label: 'March' },
//         { value: 'April', label: 'April' },
//         { value: 'May', label: 'May' },
//         { value: 'June', label: 'June' },
//         { value: 'July', label: 'July' },
//         { value: 'August', label: 'August' },
//         { value: 'September', label: 'September' },
//         { value: 'October', label: 'October' },
//         { value: 'November', label: 'November' },
//         { value: 'December', label: 'December' },
//     ];

//     const optionsTwo = [
//         { value: '', label: 'Select' },
//         { value: '1990', label: '1990' },
//         { value: '1991', label: '1991' },
//         { value: '1992', label: '1992' },
//         { value: '1993', label: '1993' },
//         { value: '1994', label: '1994' },
//         { value: '1995', label: '1995' },
//         { value: '1996', label: '1996' },
//         { value: '1997', label: '1997' },
//         { value: '1998', label: '1998' },
//         { value: '1999', label: '1999' },
//         { value: '2000', label: '2000' },
//         { value: '2001', label: '2001' },
//         { value: '2002', label: '2002' },
//     ];

//     const optionsThree = [
//         { value: '', label: 'Select' },
//         { value: 'High School Deploma', label: 'High School Deploma' },
//         { value: 'GED', label: 'GED' },
//         { value: 'Associate of Arts', label: 'Associate of Arts' },
//         { value: 'Associate of Science', label: 'Associate of Science' },
//         { value: 'Bachelor of Arts', label: 'Bachelor of Arts' },
//         { value: 'Bachelor of Science', label: 'Bachelor of Science' },
//         { value: 'BBA', label: 'BBA' },
//         { value: 'Master of Arts', label: 'Master of Arts' },
//         { value: 'Master of Science', label: 'Master of Science' },
//         { value: 'MBA', label: 'MBA' },
//         { value: 'M.D.', label: 'M.D.' },
//         { value: 'Ph.D.', label: 'Ph.D.' },
//         { value: 'Enter a different degree', label: 'Enter a different degree' },
//         { value: 'No degree', label: 'No degree' },
//     ];

//     const customStyles = {
//         control: (provided) => ({
//             ...provided,
//             width: '100%',
//             borderRadius: '0px',
//             border: '1px solid #002D6B',
//             padding: '0 10px',
//             height: '56px',
//             fontSize: '18px',
//             fontWeight: 'normal',
//             textTransform: 'capitalize',
//             '&:hover': {
//                 borderColor: '#026A73',
//             },
//         }),
//         option: (provided, state) => ({
//             ...provided,
//             backgroundColor: state.isSelected ? '#026A73' : state.isFocused ? '#E0F1F3' : '#FFF',
//             color: state.isSelected ? '#FFF' : '#002D6B',
//             padding: '10px',
//             textTransform: 'capitalize',
//             '&:hover': {
//                 backgroundColor: '#E0F1F3',
//             },
//         }),
//         menu: (provided) => ({
//             ...provided,
//             borderRadius: '8px',
//             border: '2px solid #002D6B',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         }),
//     };

//     const [errors, setErrors] = useState({});

//     // Handle input changes correctly
//     const handleInputChange = (e, id) => {
//         const { name, value } = e.target;
//         setFormData((prevFormData) =>
//             prevFormData.map((entry) =>
//                 entry.id === id ? { ...entry, [name]: value } : entry
//             )
//         );
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             [`${name}-${id}`]: "",
//         }));
//     };

//     // Validation function
//     const validateForm = () => {
//         let newErrors = {};
//         formData.forEach((data) => {
//             if (!data.institutionName.trim()) {
//                 newErrors[`institutionName-${data.id}`] = "Institution Name is required";
//             }
//             if (!data.Degree.trim()) {
//                 newErrors[`Degree-${data.id}`] = "Degree is required";
//                 if(selectedDegree === "Enter a different degree") {
//                     newErrors[`Degree-${data.id}`] = "Degree is required";
//                 }
//             }
//             if (!data.fieldOfStudy.trim()) {
//                 newErrors[`fieldOfStudy-${data.id}`] = "Field Of Study is required";
//             }
//         });

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleDegreeChange = (selectedOption) => {
//         setSelectedDegree(selectedOption?.value);
//     };

//     const handleAddSkill = () => {
//         const newEntry = {
//             id: Date.now(),
//             institutionName: "",
//             institutionLocation: "",
//             Degree: "",
//             fieldOfStudy: "",
//             endMonth: "",
//             endYear: "",
//         };
//         setEducation([...education, newEntry]);
//         setFormData([...formData, newEntry]);
//       };

//     const handleNextClick = () => {
//         if (validateForm()) {
//             onNextStep();
//             navigate("/skills");
//         }
//     };

//     const handleBackClick = () => {
//         onPreviousStep();
//         navigate("/work-history");
//     };

//     const handleDelete = (id) => {
//         setEducation(education.filter((entry) => entry.id !== id));
//         setFormData(formData.filter((data) => data.id !== id));
//       };

//     return (
//         <main className="w-full bg-gray-100 min-h-screen flex flex-col justify-center -mt-[30px]">
//             <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
//                 <div className="flex flex-col gap-6">
//                     <div className="w-full sm:max-w-[900px]">
//                         <h1 className="text-[#002D6B] text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
//                             Education
//                         </h1>
//                     </div>
//                     {<div className="flex flex-col gap-5">
//                         <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
//                             <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
//                                 <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
//                                     <label htmlFor="institutionName" className="mb-2">
//                                         Institution Name *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="institutionName"
//                                         id="institutionName"
//                                         placeholder="e.g. Oxford Software Institution"
//                                         className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                                     />
//                                 </div>

//                                 <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
//                                     <label htmlFor="institutionLocation" className="mb-2">
//                                         Institution Location
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="institutionLocation"
//                                         id="institutionLocation"
//                                         placeholder="e.g. Chennai"
//                                         className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                                     />
//                                 </div>

//                                 <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
//                                     <label htmlFor="degree" className="mb-2">
//                                         Degree *
//                                     </label>
//                                     <Select
//                                         options={optionsThree}
//                                         styles={customStyles}
//                                         placeholder="Select"
//                                         onChange={handleDegreeChange}
//                                     />
//                                 </div>

//                                 {selectedDegree === "Enter a different degree" && <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
//                                     <label htmlFor="studyField" className="mb-2">
//                                         Enter a different degree *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="studyField"
//                                         id="studyField"
//                                         placeholder="e.g. Bachelor's"
//                                         className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                                     />
//                                 </div>}
//                             </div>
//                         </div>
//                         <div className="flex gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
//                             <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
//                                 <label htmlFor="studyField" className="mb-2">
//                                     Field of Study *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="studyField"
//                                     id="studyField"
//                                     placeholder="e.g. Computer Science"
//                                     className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                                 />
//                             </div>

//                             <div className="flex flex-col w-full">
//                                 <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px] mb-2">
//                                     Graduation Date (or expected Graduation Date)
//                                 </p>
//                                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[240px]">
//                                         <Select
//                                             options={options}
//                                             styles={customStyles}
//                                             placeholder="month"
//                                         />
//                                     </div>

//                                     <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[240px]">
//                                         <Select
//                                             options={optionsTwo}
//                                             styles={customStyles}
//                                             placeholder="year"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>}

//                     <div className="flex justify-center mt-[30px]">
//                         <button
//                             // onClick={handleAddSkill}
//                             className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-[3px] hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
//                         >
//                             <img src={IconAdd} alt="" /> Add work experience
//                         </button>
//                     </div>

//                     <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
//                         <button
//                             onClick={handleBackClick}
//                             disabled={activeStep === 0}
//                             className="font-bold w-[150px] text-[#026A73] text-sm sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
//                         >
//                             Previous
//                         </button>
//                         <button
//                             onClick={handleNextClick}
//                             disabled={activeStep === 5}
//                             className="bg-[#026A73] w-[150px] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8-full rounded-full text-white hover:opacity-90 transition"
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Education;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import IconAdd from '../assets/icons/plus-icon.svg';

const Education = ({ activeStep, onNextStep, onPreviousStep }) => {
    const navigate = useNavigate();

    const [selectedDegree, setSelectedDegree] = useState(null);
    const [formData, setFormData] = useState([
        {
            id: Date.now(),
            institutionName: "",
            institutionLocation: "",
            Degree: "",
            fieldOfStudy: "",
            endMonth: "",
            endYear: "",
        },
    ]);

    const options = [
        { value: '', label: 'Select' },
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
        { value: '', label: 'Select' },
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

    const optionsThree = [
        { value: '', label: 'Select' },
        { value: 'High School Deploma', label: 'High School Deploma' },
        { value: 'GED', label: 'GED' },
        { value: 'Associate of Arts', label: 'Associate of Arts' },
        { value: 'Associate of Science', label: 'Associate of Science' },
        { value: 'Bachelor of Arts', label: 'Bachelor of Arts' },
        { value: 'Bachelor of Science', label: 'Bachelor of Science' },
        { value: 'BBA', label: 'BBA' },
        { value: 'Master of Arts', label: 'Master of Arts' },
        { value: 'Master of Science', label: 'Master of Science' },
        { value: 'MBA', label: 'MBA' },
        { value: 'M.D.', label: 'M.D.' },
        { value: 'Ph.D.', label: 'Ph.D.' },
        { value: 'Enter a different degree', label: 'Enter a different degree' },
        { value: 'No degree', label: 'No degree' },
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '100%',
            borderRadius: '0px',
            border: '1px solid #002D6B',
            padding: '0 10px',
            height: '56px',
            fontSize: '18px',
            fontWeight: 'normal',
            textTransform: 'capitalize',
            '&:hover': {
                borderColor: '#026A73',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#026A73' : state.isFocused ? '#E0F1F3' : '#FFF',
            color: state.isSelected ? '#FFF' : '#002D6B',
            padding: '10px',
            textTransform: 'capitalize',
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

    const [errors, setErrors] = useState({});

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        setFormData((prevFormData) =>
            prevFormData.map((entry) =>
                entry.id === id ? { ...entry, [name]: value } : entry
            )
        );
        setErrors((prevErrors) => ({
            ...prevErrors,
            [`${name}-${id}`]: "",
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        formData.forEach((data) => {
            if (!data.institutionName.trim()) {
                newErrors[`institutionName-${data.id}`] = "Institution Name is required";
            }
            if (!data.Degree.trim()) {
                newErrors[`Degree-${data.id}`] = "Degree is required";
                if (selectedDegree === "Enter a different degree") {
                    newErrors[`Degree-${data.id}`] = "Degree is required";
                }
            }
            if (!data.fieldOfStudy.trim()) {
                newErrors[`fieldOfStudy-${data.id}`] = "Field Of Study is required";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleDegreeChange = (selectedOption, id) => {
        setSelectedDegree(selectedOption?.value);
        setFormData((prevFormData) =>
            prevFormData.map((entry) =>
                entry.id === id ? { ...entry, Degree: selectedOption?.value } : entry
            )
        );
    };

    const handleAddSkill = () => {
        const newEntry = {
            id: Date.now(),
            institutionName: "",
            institutionLocation: "",
            Degree: "",
            fieldOfStudy: "",
            endMonth: "",
            endYear: "",
        };
        setFormData([...formData, newEntry]);
    };

    const handleNextClick = () => {
        if (validateForm()) {
            onNextStep();
            navigate("/skills");
        }
    };

    const handleBackClick = () => {
        onPreviousStep();
        navigate("/work-history");
    };

    const handleDelete = (id) => {
        setFormData(formData.filter((data) => data.id !== id));
    };

    return (
        <main className="w-full bg-gray-100 min-h-screen flex flex-col justify-center ">
            <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
                <div className="flex flex-col gap-6">
                    <div className="w-full sm:max-w-[900px]">
                        <h1 className="text-[#002D6B] text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
                            Education
                        </h1>
                    </div>
                    {formData.map((entry, index) => (
                        <div key={entry.id} className="flex flex-col gap-5">
                            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                                <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
                                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                                        <label htmlFor={`institutionName-${entry.id}`} className="mb-2">
                                            Institution Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="institutionName"
                                            id={`institutionName-${entry.id}`}
                                            placeholder="e.g. Oxford Software Institution"
                                            className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                                            value={entry.institutionName}
                                            onChange={(e) => handleInputChange(e, entry.id)}
                                        />
                                        {errors[`institutionName-${entry.id}`] && (
                                            <p className="text-red-500 text-sm">{errors[`institutionName-${entry.id}`]}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                                        <label htmlFor={`institutionLocation-${entry.id}`} className="mb-2">
                                            Institution Location
                                        </label>
                                        <input
                                            type="text"
                                            name="institutionLocation"
                                            id={`institutionLocation-${entry.id}`}
                                            placeholder="e.g. Chennai"
                                            className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                                            value={entry.institutionLocation}
                                            onChange={(e) => handleInputChange(e, entry.id)}
                                        />
                                    </div>

                                    <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                                        <label htmlFor={`degree-${entry.id}`} className="mb-2">
                                            Degree *
                                        </label>
                                        <Select
                                            options={optionsThree}
                                            styles={customStyles}
                                            placeholder="Select"
                                            onChange={(selectedOption) => handleDegreeChange(selectedOption, entry.id)}
                                        />
                                        {errors[`Degree-${entry.id}`] && (
                                            <p className="text-red-500 text-sm">{errors[`Degree-${entry.id}`]}</p>
                                        )}
                                    </div>

                                    {selectedDegree === "Enter a different degree" && (
                                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px]">
                                            <label htmlFor={`studyField-${entry.id}`} className="mb-2">
                                                Enter a different degree *
                                            </label>
                                            <input
                                                type="text"
                                                name="fieldOfStudy"
                                                id={`studyField-${entry.id}`}
                                                placeholder="e.g. Bachelor's"
                                                className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                                                value={entry.fieldOfStudy}
                                                onChange={(e) => handleInputChange(e, entry.id)}
                                            />
                                            {errors[`fieldOfStudy-${entry.id}`] && (
                                                <p className="text-red-500 text-sm">{errors[`fieldOfStudy-${entry.id}`]}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 gap-y-6 w-full sm:w-full">
                                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full max-w-full sm:max-w-[300px] lg:max-w-[500px]">
                                    <label htmlFor={`studyField-${entry.id}`} className="mb-2">
                                        Field of Study *
                                    </label>
                                    <input
                                        type="text"
                                        name="fieldOfStudy"
                                        id={`studyField-${entry.id}`}
                                        placeholder="e.g. Computer Science"
                                        className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                                        value={entry.fieldOfStudy}
                                        onChange={(e) => handleInputChange(e, entry.id)}
                                    />
                                    {errors[`fieldOfStudy-${entry.id}`] && (
                                        <p className="text-red-500 text-sm">{errors[`fieldOfStudy-${entry.id}`]}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full">
                                    <p className="text-[#002D6B] font-semibold text-sm sm:text-[15px] uppercase w-full sm:max-w-[300px] lg:max-w-[500px] mb-2">
                                        Graduation Date (or expected Graduation Date)
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[240px]">
                                            <Select
                                                options={options}
                                                styles={customStyles}
                                                placeholder="month"
                                                onChange={(selectedOption) =>
                                                    setFormData((prevFormData) =>
                                                        prevFormData.map((data) =>
                                                            data.id === entry.id ? { ...data, endMonth: selectedOption?.value } : data
                                                        )
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-[15px] capitalize w-full sm:max-w-[240px]">
                                            <Select
                                                options={optionsTwo}
                                                styles={customStyles}
                                                placeholder="year"
                                                onChange={(selectedOption) =>
                                                    setFormData((prevFormData) =>
                                                        prevFormData.map((data) =>
                                                            data.id === entry.id ? { ...data, endYear: selectedOption?.value } : data
                                                        )
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {index > 0 && (
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => handleDelete(entry.id)}
                                        className="text-red-500 font-bold text-sm sm:text-md hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex justify-center mt-[30px]">
                        <button
                            onClick={handleAddSkill}
                            className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-[3px] hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
                        >
                            <img src={IconAdd} alt="" /> Add education
                        </button>
                    </div>

                    <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
                        <button
                            onClick={handleBackClick}
                            disabled={activeStep === 0}
                            className="font-bold w-[150px] text-[#026A73] text-sm sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
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

export default Education;