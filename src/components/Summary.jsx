// import React from 'react'
// import IconBold from '../assets/icons/bold-icon.svg'
// import IconItalic from '../assets/icons/italic-icon.svg'
// import IconUnderline from '../assets/icons/underlined-icon.svg'
// import IconList from '../assets/icons/list-icon.svg'

// const Summary = () => {
//   return (
//     <main className="w-full bg-gray-100 min-h-screen flex">
//       <div className="w-full mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
//       <h1 className="text-left text-[#002D6B] text-2xl md:text-4xl font-semibold font-merriweather mb-6">
//           Summary
//         </h1>
//             <div className="flex flex-col items-center space-y-4 relative">
//                 <div
//                 className="w-full bg-white p-4 border border-[#002D6B] rounded-lg shadow-sm focus:outline-none"
//                 contentEditable={true}
//                 placeholder="Add your skills here"
//                 style={{ minHeight: "400px" }}
//                 />
//                     {/* Toolbar for formatting */}
//                 <div className="w-full absolute bottom-0 p-5 flex gap-4 mb-2 rounded-bl-lg rounded-br-lg border-t-[1px] border-[#002D6B]">
//                     {/* Bold */}
//                     <button onClick={() => document.execCommand("bold")} className="w-4">
//                         <b><img src={IconBold} alt="" /></b>
//                     </button>
                    
//                     {/* Italic */}
//                     <button onClick={() => document.execCommand("italic")} className="text-xl text-[#002D6B]">
//                         <i><img src={IconItalic} alt="" /></i>
//                     </button>
                    
//                     {/* Underline */}
//                     <button onClick={() => document.execCommand("underline")} className="text-xl text-[#002D6B]">
//                         <u><img src={IconUnderline} alt="" /></u>
//                     </button>
                    
//                     {/* Unordered List */}
//                     <button onClick={() => document.execCommand("insertUnorderedList")} className="text-xl text-[#002D6B]">
//                         <ul className="list-disc">
//                             <img src={IconList} alt="" />
//                         </ul>
//                     </button>
//                 </div>
//             </div> 
//         </div>
//     </main>
//   )
// }

// export default Summary

import React, { useRef, useState } from 'react';
import IconBold from '../assets/icons/bold-icon.svg';
import IconItalic from '../assets/icons/italic-icon.svg';
import IconUnderline from '../assets/icons/underlined-icon.svg';
import IconList from '../assets/icons/list-icon.svg';

const Summary = () => {
  const textAreaRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInput = (e) => {
    const text = e.target.innerText;
    if (text.length > 500) {
      e.target.innerText = text.substring(0, 500); // Trim excess characters
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(e.target);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    setCharCount(e.target.innerText.length);
  };

  return (
    <main className="w-full bg-gray-100 min-h-screen flex">
      <div className="w-full mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
        <h1 className="text-left text-[#002D6B] text-2xl md:text-4xl font-semibold font-merriweather mb-6">
          Summary
        </h1>
        <div className="flex flex-col items-center space-y-4 relative">
          {/* Text Area */}
          <div
            ref={textAreaRef}
            className="w-full bg-white p-4 border border-[#002D6B] rounded-lg shadow-sm focus:outline-none"
            contentEditable={true}
            placeholder="Add your skills here"
            onInput={handleInput}
            style={{ minHeight: '400px',maxHeight: '400px', paddingBottom: '60px', overflow: 'auto' }}
          />
          <p className="text-sm text-gray-500 text-right w-full">
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
      </div>
    </main>
  );
};

export default Summary;
