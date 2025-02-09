// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import IconDelete from '../assets/icons/delete-icon.svg'
// import IconAdd from '../assets/icons/plus-icon.svg'
// import IconBold from '../assets/icons/bold-icon.svg'
// import IconItalic from '../assets/icons/italic-icon.svg'
// import IconUnderline from '../assets/icons/underlined-icon.svg'
// import IconList from '../assets/icons/list-icon.svg'

// const Skills = ({ activeStep, onNextStep, onPreviousStep }) => {

//   const navigate = useNavigate();
//   const [activeSkill, setActiveSkill] = useState("skill1");
//   const [skills, setSkills] = useState([{ id: 1, rating: 0, feedback: "" }]);

//   const handleAddSkill = () => {
//     setSkills([...skills, { id: skills.length + 1, rating: 0, feedback: "" }]);
//   };

//   const handleRatingChange = (id, newRating) => {
//     setSkills(
//       skills.map((skill) =>
//         skill.id === id ? { ...skill, rating: newRating } : skill
//       )
//     );
//   };

//   const handleFeedbackChange = (id, feedback) => {
//     setSkills(
//       skills.map((skill) =>
//         skill.id === id ? { ...skill, feedback } : skill
//       )
//     );
//   };

//   const handleDelete = (id) => {
//     const updatedSkills = skills.filter((skill) => skill.id !== id);
//     setSkills(updatedSkills);
//   };

//   const handleNextClick = () => {
//     onNextStep();
//     navigate("/summary");
//   };

//   const handleBackClick = () => {
//     onPreviousStep();
//     navigate("/education");
//   };
//   return (
//     <main className="w-full bg-gray-100 min-h-screen flex">
//       <div className="w-full mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
//         <h1 className="text-left text-[#002D6B] text-2xl md:text-4xl font-semibold font-merriweather mb-6">
//           Skills
//         </h1>

//         <div className="flex justify-center space-x-6 border-b border-gray-300 pb-2">
//           <button
//             className={`relative px-6 py-2 text-lg font-medium text-[#002D6B] ${activeSkill === "skill1"
//               ? "font-bold after:block after:h-1 after:bg-[#FF8873] after:w-full after:rounded-md after:absolute after:bottom-0 after:left-0"
//               : "font-normal"
//               }`}
//             onClick={() => setActiveSkill("skill1")}
//           >
//             Text Editor
//           </button>
//           <button
//             className={`relative px-6 py-2 text-lg font-medium text-[#002D6B] ${activeSkill === "skill2"
//               ? "font-bold after:block after:h-1 after:bg-[#FF8873] after:w-full after:rounded-md after:absolute after:bottom-0 after:left-0"
//               : "font-normal"
//               }`}
//             onClick={() => setActiveSkill("skill2")}
//           >
//             Skills Rating
//           </button>
//         </div>

//         <div className="mt-6">
//           {activeSkill === "skill1" && (
//             <div className="flex flex-col items-center space-y-4 relative">
//               {/* ContentEditable div for rich text */}
//               <div
//                 ref={textAreaRef}
//                 className="w-full text-[18px] bg-white p-4 border border-[#002D6B] rounded-lg shadow-sm focus:outline-none"
//                 contentEditable={true}
//                 placeholder="Add your skills here"
//                 onInput={handleInput}
//                 style={{ minHeight: '400px', maxHeight: '400px', paddingBottom: '60px', overflow: 'auto', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
//               />
//               <p className="text-sm text-gray-500 text-right w-[150px] absolute bottom-14 right-0 p-4">
//                 {charCount}/500 characters
//               </p>
//               {/* Toolbar */}
//               <div className="w-full absolute bottom-0 flex gap-4 p-4 bg-gray-50 border-t-[1px] border-[#002D6B] rounded-bl-lg rounded-br-lg border-[1px]">
//                 {/* Bold */}
//                 <button onClick={() => document.execCommand('bold')} className="w-4">
//                   <b>
//                     <img src={IconBold} alt="Bold" />
//                   </b>
//                 </button>

//                 {/* Italic */}
//                 <button onClick={() => document.execCommand('italic')} className="text-xl text-[#002D6B]">
//                   <i>
//                     <img src={IconItalic} alt="Italic" />
//                   </i>
//                 </button>

//                 {/* Underline */}
//                 <button onClick={() => document.execCommand('underline')} className="text-xl text-[#002D6B]">
//                   <u>
//                     <img src={IconUnderline} alt="Underline" />
//                   </u>
//                 </button>

//                 {/* Unordered List */}
//                 <button onClick={() => document.execCommand('insertUnorderedList')} className="text-xl text-[#002D6B]">
//                   <ul className="list-disc">
//                     <img src={IconList} alt="List" />
//                   </ul>
//                 </button>
//               </div>
//             </div>
//           )}


//           {activeSkill === "skill2" && (
//             <div className="w-full max-w-lg p-4 rounded-lg outline-none border-0 focus:outline-none focus:ring-2 focus:ring-[#026A73] sm:flex sm:flex-col sm:items-center sm:max-w-full min-h-[400px]">
//               {skills.map((skill) => (
//                 <div
//                   key={skill.id}
//                   className="flex items-center justify-center space-x-4 mb-4"
//                 >
//                   <div className="flex items-center space-x-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <button
//                         key={star}
//                         onClick={() => handleRatingChange(skill.id, star)}
//                         className={`text-2xl ${star <= skill.rating
//                           ? "text-[#002D6B]"
//                           : "text-gray-400"
//                           }`}
//                       >
//                         ★
//                       </button>
//                     ))}
//                   </div>

//                   <input
//                     type="text"
//                     value={skill.feedback}
//                     onChange={(e) =>
//                       handleFeedbackChange(skill.id, e.target.value)
//                     }
//                     placeholder="Enter your feedback"
//                     className="w-[500px] border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
//                   />
//                   <div className="cursor-pointer" onClick={() => handleDelete(skill.id)}>
//                     <img src={IconDelete} alt="" className="-text-[#002D6B]" />
//                   </div>
//                 </div>
//               ))}

//               <div className="flex justify-center mt-[30px]">
//                 <button
//                   onClick={handleAddSkill}
//                   className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-2 hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
//                 >
//                   <img src={IconAdd} alt="" />Add More
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
//         <button
//             onClick={handleBackClick}
//             disabled={activeStep === 0}
//             className="font-bold text-sm text-[#002D6B] sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNextClick}
//             disabled={activeStep === 5}
//             className="bg-[#026A73] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8-full rounded-full text-white hover:opacity-90 transition"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//     </main>
//   );
// };

// export default Skills;


import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import IconDelete from '../assets/icons/delete-icon.svg'
import IconAdd from '../assets/icons/plus-icon.svg'
import IconBold from '../assets/icons/bold-icon.svg'
import IconItalic from '../assets/icons/italic-icon.svg'
import IconUnderline from '../assets/icons/underlined-icon.svg'
import IconList from '../assets/icons/list-icon.svg'

const Skills = ({ activeStep, onNextStep, onPreviousStep }) => {

  const navigate = useNavigate();
  const [activeSkill, setActiveSkill] = useState("skill1");
  const [skills, setSkills] = useState([{ id: 1, rating: 0, feedback: "" }]);

  const handleAddSkill = () => {
    setSkills([...skills, { id: skills.length + 1, rating: 0, feedback: "" }]);
  };

  const handleRatingChange = (id, newRating) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, rating: newRating } : skill
      )
    );
  };

  const handleFeedbackChange = (id, feedback) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, feedback } : skill
      )
    );
  };

  const handleDelete = (id) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updatedSkills);
  };

  const handleNextClick = () => {
    navigate("/summary");
    console.log("BTN CLICKED", navigate);
    onNextStep();
  };

  const handleBackClick = () => {
    navigate("/education");
    // console.log("BTN CLICKED", navigate);
    onNextStep();
  };

  const textAreaRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInput = (e) => {
    const text = e.target.innerText.trim();
    if (text.length > 500) {
      e.target.innerText = text.substring(0, 500); // Trim excess characters
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(e.target);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    setCharCount(e.target.innerText.trim().length);
  };
  return (
    <main className="w-full bg-gray-100 min-h-screen flex">
      <div className="w-full mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
        <h1 className="text-left text-[#002D6B] text-2xl md:text-4xl font-semibold font-merriweather mb-6">
          Skills
        </h1>

        <div className="flex justify-center space-x-6 border-b border-gray-300 pb-2">
          <button
            className={`relative px-6 py-2 text-lg font-medium text-[#002D6B] ${activeSkill === "skill1"
              ? "font-bold after:block after:h-1 after:bg-[#FF8873] after:w-full after:rounded-md after:absolute after:bottom-0 after:left-0"
              : "font-normal"
              }`}
            onClick={() => setActiveSkill("skill1")}
          >
            Text Editor
          </button>
          <button
            className={`relative px-6 py-2 text-lg font-medium text-[#002D6B] ${activeSkill === "skill2"
              ? "font-bold after:block after:h-1 after:bg-[#FF8873] after:w-full after:rounded-md after:absolute after:bottom-0 after:left-0"
              : "font-normal"
              }`}
            onClick={() => setActiveSkill("skill2")}
          >
            Skills Rating
          </button>
        </div>

        <div className="mt-6">
          {activeSkill === "skill1" && (
            <div className="flex flex-col items-center space-y-4 relative">
              {/* ContentEditable div for rich text */}
              <div
                ref={textAreaRef}
                className="w-full text-[18px] bg-white p-4 border border-[#002D6B] rounded-lg shadow-sm focus:outline-none"
                contentEditable={true}
                placeholder="Add your skills here"
                onInput={handleInput}
                style={{ minHeight: '400px', maxHeight: '400px', paddingBottom: '60px', overflow: 'auto', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
              />
              <p className="text-sm text-gray-500 text-right w-[150px] absolute bottom-14 right-0 p-4">
                {charCount}/500 characters
              </p>
              {/* Toolbar */}
              <div className="w-full absolute bottom-0 flex gap-4 p-4 bg-gray-50 border-t-[1px] border-[#002D6B] rounded-bl-lg rounded-br-lg border-[1px]">
                {/* Bold */}
                <button onClick={() => document.execCommand('bold')} className="w-4">
                  <b>
                    <img src={IconBold} alt="Bold" />
                  </b>
                </button>

                {/* Italic */}
                <button onClick={() => document.execCommand('italic')} className="text-xl text-[#002D6B]">
                  <i>
                    <img src={IconItalic} alt="Italic" />
                  </i>
                </button>

                {/* Underline */}
                <button onClick={() => document.execCommand('underline')} className="text-xl text-[#002D6B]">
                  <u>
                    <img src={IconUnderline} alt="Underline" />
                  </u>
                </button>

                {/* Unordered List */}
                <button onClick={() => document.execCommand('insertUnorderedList')} className="text-xl text-[#002D6B]">
                  <ul className="list-disc">
                    <img src={IconList} alt="List" />
                  </ul>
                </button>
              </div>
            </div>
          )}


          {activeSkill === "skill2" && (
            <div className="w-full max-w-lg p-4 rounded-lg outline-none border-0 focus:outline-none focus:ring-2 focus:ring-[#026A73] sm:flex sm:flex-col sm:items-center sm:max-w-full min-h-[400px]">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-center space-x-4 mb-4"
                >
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRatingChange(skill.id, star)}
                        className={`text-2xl ${star <= skill.rating
                          ? "text-[#002D6B]"
                          : "text-gray-400"
                          }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={skill.feedback}
                    onChange={(e) =>
                      handleFeedbackChange(skill.id, e.target.value)
                    }
                    placeholder="Enter your feedback"
                    className="w-[500px] border border-[#002D6B] h-10 px-3 focus:outline-none focus:border-[#026A73] focus:border-2"
                  />
                  <div className="cursor-pointer" onClick={() => handleDelete(skill.id)}>
                    <img src={IconDelete} alt="" className="-text-[#002D6B]" />
                  </div>
                </div>
              ))}

              <div className="flex justify-center mt-[30px]">
                <button
                  onClick={handleAddSkill}
                  className="flex items-center gap-2 font-bold text-sm text-gray-400 sm:text-md hover:border-2 hover:border-[#002D6B] hover:py-2 px-6 sm:py-3 sm:px-8 rounded-full transition"
                >
                  <img src={IconAdd} alt="" />Add More
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap ">
          <button
            onClick={handleBackClick}
            disabled={activeStep === 0}
            className="font-bold text-sm text-[#002D6B] sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            disabled={activeStep === 5}
            className="bg-[#026A73] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8-full rounded-full text-white hover:opacity-90 transition"
          >
            Next
          </button>
        </div>
      </div>

    </main>
  );
};

export default Skills;
