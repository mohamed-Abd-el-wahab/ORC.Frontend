import React, { useState } from 'react';
import apiService, { RegistrationData } from '../services/api';

const ApiTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testRegistration = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // Sample registration data matching the required format
      const testData: RegistrationData = {
        teamName: "RoboWarriors",
        institution: "Tech University",
        leaderName: "John Smith",
        leaderEmail: "mtafeh@gmail.com",
        leaderPhone: "+1234567890",
        teamSize: 3,
        teamMembers: "John Smith - Team Leader\nJane Doe - Mechanical Engineer\nBob Wilson - Software Developer",
        
        howDidYouKnow: "social",
        otherSource: null,
        roboticsExperience: "Our team has participated in several university-level robotics competitions.",
        technicalSkills: "Programming (Python, C++), 3D modeling, Electronics, Mechanical design",
        
        hasPriorExperience: true,
        priorExperienceDetails: "Participated in University Robotics Championship 2023",
        relevantProjects: "Built an autonomous drone, Created a battle robot for university showcase",
        anticipatedChallenges: "Power management, Weight distribution, Control system reliability",
        
        agreeToRules: true,
        agreeToMedia: true,
        verifyInformation: true
      };

      const response = await apiService.submitRegistration(testData);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">API Test</h2>
          
          <button
            onClick={testRegistration}
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Testing...
              </>
            ) : (
              "Test Registration API"
            )}
          </button>
          
          {error && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
              <h3 className="font-semibold mb-2">Error:</h3>
              <p>{error}</p>
            </div>
          )}
          
          {result && (
            <div className="mt-6 p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Result:</h3>
              <pre className="text-gray-300 overflow-auto p-2 bg-black/30 rounded">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiTest; 