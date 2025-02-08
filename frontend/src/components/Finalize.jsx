import React from 'react'
import { useNavigate } from "react-router-dom";


const Finalize = ({activeStep,onPreviousStep}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    onPreviousStep();
    navigate("/summary");
  }

  return (
    <>
    <div>Finalize</div>
    <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
    <button
        onClick={handleBackClick}
        disabled={activeStep === 0}
        className="font-bold text-sm text-[#002D6B] sm:text-md border-2 py-2 px-6 sm:py-3 sm:px-8 rounded-full border-[#002D6B] text-[#002D6B]-full hover:bg-[#002D6B] hover:text-white transition"
    >
        Previous
    </button>
</div>
</>
  )
}

export default Finalize