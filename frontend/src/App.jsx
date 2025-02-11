import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Finalize from "./components/Finalize";
import MainContent from "./components/MainContent";
import Preview from "./components/Preview";
import { FormProvider } from "./context/FormContext";// Import Form Context Provider

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
    <FormProvider> {/* Wrap everything inside FormProvider */}
      <Router>
        <div className="flex">
          <Sidebar activeStep={activeStep} />
          <div className="flex-1 sm:ml-[20%]">
            <Routes>
              <Route
                path="/"
                element={
                  <MainContent
                    activeStep={activeStep}
                    onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep}
                  />
                }
              />
              <Route
                path="/work-history"
                element={
                  <WorkHistory
                    activeStep={activeStep}
                    onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep}
                  />
                }
              />
              <Route
                path="/education"
                element={
                  <Education
                    activeStep={activeStep}
                    onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep}
                  />
                }
              />
              <Route
                path="/skills"
                element={
                  <Skills
                    activeStep={activeStep}
                    onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep}
                  />
                }
              />
              <Route
                path="/summary"
                element={
                  <Summary
                    activeStep={activeStep}
                    onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep}
                  />
                }
              />
              {/* <Route
                path="/finalize"
                element={
                  <Finalize activeStep={activeStep} onPreviousStep={handlePreviousStep} />
                }
              /> */}
              <Route path="/preview" element={<Preview />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FormProvider>
  );
};

export default App;
