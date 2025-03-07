import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Rest of the component code remains exactly the same
  const [formData, setFormData] = useState({
    // Team Information
    teamName: '',
    institution: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    teamSize: '1',
    teamMembers: '',
    
    // Background & Experience
    howDidYouKnow: '',
    otherSource: '',
    roboticsExperience: '',
    technicalSkills: '',
    
    // Technical Preparation
    priorExperience: 'no',
    priorExperienceDetails: '',
    relevantProjects: '',
    anticipatedChallenges: '',
    
    // Agreements
    agreeToRules: false,
    agreeToMedia: false,
    verifyInformation: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Redirect to success page or show success message
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the ultimate robotics competition
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div key={index} className="flex-1 px-2">
                <div
                  className={`h-2 rounded-full ${
                    index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-700'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="text-center text-gray-400">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Rest of the form JSX remains exactly the same */}
          {currentStep === 1 && (
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Team Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Institution/Organization *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Leader's Name *
                  </label>
                  <input
                    type="text"
                    name="leaderName"
                    value={formData.leaderName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Leader's Email *
                  </label>
                  <input
                    type="email"
                    name="leaderEmail"
                    value={formData.leaderEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Leader's Phone *
                  </label>
                  <input
                    type="tel"
                    name="leaderPhone"
                    value={formData.leaderPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Size *
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {[...Array(5)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Members List (Name and Role) *
                </label>
                <textarea
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="e.g., John Smith - Programming Lead&#10;Jane Doe - Mechanical Design"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Background & Experience</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you learn about ORC? *
                  </label>
                  <select
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="">Select an option</option>
                    <option value="social">Social Media</option>
                    <option value="friends">Friends/Family</option>
                    <option value="school">School/University</option>
                    <option value="search">Online Search</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formData.howDidYouKnow === 'other' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Please specify *
                    </label>
                    <input
                      type="text"
                      name="otherSource"
                      value={formData.otherSource}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team's Robotics Experience *
                  </label>
                  <textarea
                    name="roboticsExperience"
                    value={formData.roboticsExperience}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your team's experience with robotics"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Technical Skills *
                  </label>
                  <textarea
                    name="technicalSkills"
                    value={formData.technicalSkills}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="List relevant technical skills"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Technical Preparation</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Previous Competition Experience *
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priorExperience"
                        value="yes"
                        checked={formData.priorExperience === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 bg-gray-900 border-gray-700 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-300">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priorExperience"
                        value="no"
                        checked={formData.priorExperience === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 bg-gray-900 border-gray-700 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-300">No</span>
                    </label>
                  </div>
                </div>

                {formData.priorExperience === 'yes' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Competition Details *
                    </label>
                    <textarea
                      name="priorExperienceDetails"
                      value={formData.priorExperienceDetails}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Relevant Projects *
                  </label>
                  <textarea
                    name="relevantProjects"
                    value={formData.relevantProjects}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Anticipated Challenges *
                  </label>
                  <textarea
                    name="anticipatedChallenges"
                    value={formData.anticipatedChallenges}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Agreements</h3>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToRules"
                      checked={formData.agreeToRules}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-300">
                      I confirm that all team members have read and agree to the competition rules and safety regulations *
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToMedia"
                      checked={formData.agreeToMedia}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-300">
                      I grant permission for ORC to use team photos/videos for promotional purposes *
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="verifyInformation"
                      checked={formData.verifyInformation}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-300">
                      I verify that all information provided is accurate and complete *
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Previous
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ml-auto"
              >
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;