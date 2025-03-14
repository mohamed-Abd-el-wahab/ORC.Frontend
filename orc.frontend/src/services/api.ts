// API service for handling all API requests
import axios from 'axios';

// Base API URL
const API_BASE_URL = 'https://api.openrobotcombat.com/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  // Enable CORS
  withCredentials: false
});

// Registration interface matching the required payload
export interface RegistrationData {
  teamName: string;
  institution: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  teamSize: number;
  teamMembers: string;
  
  howDidYouKnow: string;
  otherSource: string | null;
  roboticsExperience: string;
  technicalSkills: string;
  
  hasPriorExperience: boolean;
  priorExperienceDetails: string;
  relevantProjects: string;
  anticipatedChallenges: string;
  
  agreeToRules: boolean;
  agreeToMedia: boolean;
  verifyInformation: boolean;
}

// API service object
const apiService = {
  /**
   * Submit registration data to the API
   * @param data Registration data
   * @returns Promise with the API response
   */
  submitRegistration: async (data: RegistrationData) => {
    try {
      const response = await apiClient.post('/Registration', data);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Registration submission error:', error);
      
      // Handle different types of errors
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return {
            success: false,
            error: `Server error: ${error.response.status} - ${error.response.data?.message || 'Unknown server error'}`,
            details: error.response.data
          };
        } else if (error.request) {
          // The request was made but no response was received
          return {
            success: false,
            error: 'No response from server. Please check your internet connection and try again.'
          };
        } else {
          // Something happened in setting up the request
          return {
            success: false,
            error: `Request configuration error: ${error.message}`
          };
        }
      }
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
};

export default apiService; 