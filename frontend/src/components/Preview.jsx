import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state; // Access the form data passed from the Summary component

  // Function to handle cancel action
  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <main className="w-full bg-gray-100 min-h-screen flex justify-center p-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg relative">
        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          Cancel
        </button>

        <h1 className="text-4xl font-bold text-[#002D6B] mb-8 text-center">Preview</h1>

        {/* User Image at the Top */}
        {formData.personalInfo?.userImage && (
          <div className="flex justify-center mb-8">
            <img
              src={formData.personalInfo.userImage}
              alt="User"
              className="w-48 h-48 rounded-full object-cover border-4 border-[#002D6B]"
            />
          </div>
        )}

        {/* Personal Info */}
        {formData.personalInfo && (
          <section className="mb-8 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-semibold text-[#002D6B] mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
              {formData.personalInfo.firstName && (
                <p><strong>First Name:</strong> {formData.personalInfo.firstName}</p>
              )}
              {formData.personalInfo.lastName && (
                <p><strong>Last Name:</strong> {formData.personalInfo.lastName}</p>
              )}
              {formData.personalInfo.city && (
                <p><strong>City:</strong> {formData.personalInfo.city}</p>
              )}
              {formData.personalInfo.country && (
                <p><strong>Country:</strong> {formData.personalInfo.country}</p>
              )}
              {formData.personalInfo.pinCode && (
                <p><strong>Pin Code:</strong> {formData.personalInfo.pinCode}</p>
              )}
              {formData.personalInfo.phone && (
                <p><strong>Phone:</strong> {formData.personalInfo.phone}</p>
              )}
              {formData.personalInfo.email && (
                <p><strong>Email:</strong> {formData.personalInfo.email}</p>
              )}
              {formData.personalInfo.linkedIn && (
                <p><strong>LinkedIn:</strong> {formData.personalInfo.linkedIn}</p>
              )}
              {formData.personalInfo.website && (
                <p><strong>Website:</strong> {formData.personalInfo.website}</p>
              )}
            </div>
          </section>
        )}

        {/* Work History */}
        {formData.workHistory && formData.workHistory.length > 0 && (
          <section className="mb-8 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-semibold text-[#002D6B] mb-6">Work History</h2>
            {formData.workHistory.map((work, index) => (
              <div key={index} className="mb-6 bg-gray-50 p-6 rounded-lg text-lg">
                {work.employer && <p><strong>Employer:</strong> {work.employer}</p>}
                {work.jobTitle && <p><strong>Job Title:</strong> {work.jobTitle}</p>}
                {work.location && <p><strong>Location:</strong> {work.location}</p>}
                {(work.startMonth || work.startYear) && (
                  <p><strong>Start Date:</strong> {work.startMonth} {work.startYear}</p>
                )}
                {(work.endMonth || work.endYear) && (
                  <p><strong>End Date:</strong> {work.endMonth} {work.endYear}</p>
                )}
                {work.remote !== undefined && (
                  <p><strong>Remote:</strong> {work.remote ? "Yes" : "No"}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {formData.education && formData.education.length > 0 && (
          <section className="mb-8 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-semibold text-[#002D6B] mb-6">Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-6 bg-gray-50 p-6 rounded-lg text-lg">
                {edu.institutionName && <p><strong>Institution:</strong> {edu.institutionName}</p>}
                {edu.institutionLocation && <p><strong>Location:</strong> {edu.institutionLocation}</p>}
                {edu.Degree && <p><strong>Degree:</strong> {edu.Degree}</p>}
                {edu.differentDegree && <p><strong>Different Degree:</strong> {edu.differentDegree}</p>}
                {(edu.startMonth || edu.startYear) && (
                  <p><strong>Start Date:</strong> {edu.startMonth} {edu.startYear}</p>
                )}
                {(edu.endMonth || edu.endYear) && (
                  <p><strong>End Date:</strong> {edu.endMonth} {edu.endYear}</p>
                )}
                {edu.fieldOfStudy && <p><strong>Field of Study:</strong> {edu.fieldOfStudy}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {(formData.skills.textEditor || formData.skills.skillsRating.length > 0) && (
          <section className="mb-8 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-semibold text-[#002D6B] mb-6">Skills</h2>
            {formData.skills.textEditor && (
              <div className="mb-6 bg-gray-50 p-6 rounded-lg text-lg">
                <p><strong>Text Editor Content:</strong></p>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: formData.skills.textEditor }}
                />
              </div>
            )}
            {formData.skills.skillsRating.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg text-lg ">
                <p><strong>Skills Rating:</strong></p>
                <div className='flex mt-5 items-center flex-wrap justify-center'>
                {formData.skills.skillsRating.map((skill, index) => (
                
                  <div key={index} className="mb-4 p-5">
                    <p><strong>Rating:</strong> {skill.rating}</p>
                    <p><strong>Feedback:</strong> {skill.feedback}</p>
                  </div>
                ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Summary */}
        {formData.summary && (
          <section>
            <h2 className="text-3xl font-semibold text-[#002D6B] mb-6">Summary</h2>
            <div className="bg-gray-50 p-6 rounded-lg text-lg">
              <p>{formData.summary}</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Preview;