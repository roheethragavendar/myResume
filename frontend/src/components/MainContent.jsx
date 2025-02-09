import React, {useState,useEffect} from "react";
import PicUpload from "../assets/upload-photo.jpg";
import { useNavigate } from 'react-router-dom'
import { addpersonalDetailsService } from "../services/resume";
import { useFormContext } from "../context/FormContext";

const MainContent = ({ activeStep, onNextStep, onPreviousStep }) => {

    const navigate = useNavigate();

    const { formDataContext, updateFormData } = useFormContext();


    const handleNextClick = () => {
      if (validateForm()) {
        navigate("/work-history");
        onNextStep();
      }
    };
    
    const Data = new FormData();

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      city:"",
      country:"",
      pinCode:"",
      phone: "",
      email: "",
      linkedIn:"",
      website:"",
    });

    const [userImage, setUserImage] = useState(PicUpload);

    const [errors, setErrors] = useState({});

    const validateForm = () => {
      let newErrors = {};

      if (!formData.firstName.trim()) {
        newErrors.firstName = "First Name is required";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last Name is required";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageFieldChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const imageURL = URL.createObjectURL(file);
      setUserImage(imageURL);
      setFormData((prevData) => ({
        ...prevData,
        userImage: file, // Store the file object
      }));
    } else {
      setUserImage(PicUpload);
      setFormData((prevData) => ({
        ...prevData,
        userImage: null,
      }));
    }
  };
  
  const handleDeleteImage = () => {
    setUserImage(PicUpload); 
  };

  const addpersonalDetails = async() => {
    if (validateForm()) {
      let { firstName, lastName, email, city, country, pinCode, website,linkedIn,phone } = formData;
      Data.append('firstName', firstName);
      Data.append('lastName', lastName);
      Data.append('email', email);
      Data.append('city', city);
      Data.append('phone', phone);
      Data.append('country', country);
      Data.append('pinCode', pinCode);
      Data.append('linkedIn', linkedIn);
      Data.append('website', website);
      if(userImage != null){
        Data.append('userImage', userImage);
    }
    try {
      // let response = await addpersonalDetailsService(Data);
      // console.log("response", response);
      updateFormData("personalInfo", formData);

      handleNextClick();
    } catch (error) {
      console.error("Error submitting personal details:", error);
    }
    }
  }

  useEffect(() => {
    setFormData(formDataContext.personalInfo);
    if (formDataContext.personalInfo.userImage) {
      const imageURL = URL.createObjectURL(formDataContext.personalInfo.userImage);
      setUserImage(imageURL);
    } else {
      setUserImage(PicUpload);
    }
  }, [formDataContext.personalInfo]);

  return (
    <main className="w-full bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-24 p-4 sm:p-6 md:p-12">
        <div className="flex flex-col gap-6">
          <div className="w-full sm:items-start sm:max-w-[750px] flex flex-col items-center">
            <h1 className="text-[#002D6B] text-xl sm:text-2xl md:text-4xl font-semibold font-merriweather">
              Personal Details
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                    <div className="relative w-full sm:w-1/2 flex flex-col items-center gap-3">
                      <img
                        src={userImage || PicUpload}
                        alt="Upload"
                        className="object-cover w-[40px] h-[40px] sm:w-full sm:h-full"
                      />
                         {userImage !== PicUpload && (
                            <button
                              onClick={handleDeleteImage}
                              className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full"
                            >
                              ✕
                            </button>
                          )}
                           <input
                          type="file"
                          name="userImage"
                          onChange={(e) => handleImageFieldChange(e, setUserImage, 'userImage')}
                          accept='image/png, image/jpeg'
                        />
                      <p className="text-blue-900 text-sm sm:text-base cursor-pointer underline font-semibold">
                        Upload photo
                      </p>
                    </div>
              <div className="flex flex-wrap gap-4 sm:gap-6 gap-y-6 w-full sm:w-auto">
                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="firstName1" className="mb-2">
                    First Name *
                  </label>
                  <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g. Roheeth"
                  className={`w-full text-[18px] border h-14 px-3 rounded focus:outline-none font-normal ${errors.firstName ? "border-red-500" : "border-[#002D6B]"}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="firstName2" className="mb-2">
                    Last Name *
                  </label>
                  <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="e.g. Ragavendar"
                  className={`w-full text-[18px] border h-14 px-3 rounded focus:outline-none font-normal ${errors.lastName ? "border-red-500" : "border-[#002D6B]"}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="city" className="mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. chennai"
                    className="w-full text-[18px] border border-[#002D6B] h-14 px-3 focus:outline-none font-normal focus:border-[#026A73] focus:border-2 rounded"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/2 sm:flex-row gap-4 sm:gap-6">
                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[190px]">
                    <label htmlFor="country" className="mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      id="country"
                      placeholder="e.g. India"
                      className="w-full text-[18px] border border-[#002D6B] h-14 px-3 focus:outline-none font-normal focus:border-[#026A73] focus:border-2 rounded"
                    />
                  </div>

                  <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[190px]">
                    <label htmlFor="pinCode" className="mb-2">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      id="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      placeholder="e.g. 600028"
                      className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2 rounded"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="phone" className="mb-2">
                    Phone *
                  </label>
                  <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full text-[18px] font-normal border h-14 px-3 rounded focus:outline-none ${errors.phone ? "border-red-500" : "border-[#002D6B]"}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="email" className="mb-2">
                    Email *
                  </label>
                  <input
                  type="email"
                  name="email"
                  placeholder="roheeth123@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full text-[18px] font-normal border h-14 px-3 rounded focus:outline-none ${errors.email ? "border-red-500" : "border-[#002D6B]"}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="linkedin" className="mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    id="linkedin"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="linkedIn.com"
                    className="w-full text-[18px] font-normal border border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2 rounded"
                  />
                </div>

                <div className="flex flex-col text-[#002D6B] font-semibold text-sm sm:text-base uppercase w-full sm:max-w-[300px] lg:max-w-[400px]">
                  <label htmlFor="website" className="mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="samplewebsite.com"
                    className="w-full border text-[18px] font-normal border-[#002D6B] h-14 px-3 focus:outline-none focus:border-[#026A73] focus:border-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-between sm:justify-end mt-6 flex-wrap">
            <button
              onClick={addpersonalDetails}
              disabled={activeStep === 5}
              className="bg-[#026A73] font-bold text-sm sm:text-md py-2 px-6 sm:py-3 sm:px-8 rounded-full text-white hover:opacity-90 transition"
            >
              Next: Work history
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
