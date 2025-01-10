import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  // const [count, setCount] = useState(0)
  const [activeStep, setActiveStep] = useState(0); // Track the current active step

  // Function to move to the next step
  const handleNextStep = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar activeStep={activeStep} />
        <MainContent
        activeStep={activeStep}
        onNextStep={handleNextStep}
        onPreviousStep={handlePreviousStep}
        />
      </div>
    </>
  )
}

export default App
