import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import HeadingPage from "./HeadingPage";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Finalize from "./components/Finalize";
import MainContent from "./components/MainContent";

const App = () => {

  const [activeStep, setActiveStep] = useState(0);

  // Function to move to the next step
  const handleNextStep = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
  };

  // Function to move to the previous step
  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar activeStep={activeStep}/>
        <div className="flex-1 sm:ml-[20%]">
          <Routes>
            <Route path="/" element={
            <MainContent 
              activeStep={activeStep}
              onNextStep={handleNextStep}
              onPreviousStep={handlePreviousStep}
            />} />
            <Route path="/work-history" element={
              <WorkHistory
              activeStep={activeStep}
              onNextStep={handleNextStep}
              onPreviousStep={handlePreviousStep}
              />
            } />
            <Route path="/education" element={<Education 
              activeStep={activeStep}
              onNextStep={handleNextStep}
              onPreviousStep={handlePreviousStep}/>} />

            <Route path="/skills" element={<Skills 
            activeStep={activeStep}
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}/>} />

            <Route path="/summary" element={<Summary 
            activeStep={activeStep}
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}/>} />

            <Route path="/finalize" element={<Finalize activeStep={activeStep} onPreviousStep={handlePreviousStep}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
