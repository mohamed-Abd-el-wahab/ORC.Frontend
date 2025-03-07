import React, { useState } from 'react';
import { Youtube, Users, Bell, Clock, MapPin, Mail, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  age: string;
  emergencyContactName: string;
  emergencyContactNumber: string;

  // Event Experience
  hearAboutUs: string;
  interests: string;
  additionalActivities: {
    workshops: boolean;
    meetAndGreets: boolean;
    robotShowcases: boolean;
  };

  // Health & Safety
  noiseSensitivity: string;
  healthConditions: string;

  // Acknowledgments
  safetyGuidelines: boolean;
  eventConditions: boolean;
  photoConsent: boolean;
  rulesAcceptance: boolean;
}

const Watch = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    hearAboutUs: '',
    interests: '',
    additionalActivities: {
      workshops: false,
      meetAndGreets: false,
      robotShowcases: false,
    },
    noiseSensitivity: '',
    healthConditions: '',
    safetyGuidelines: false,
    eventConditions: false,
    photoConsent: false,
    rulesAcceptance: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName) newErrors.fullName = 'Required';
    if (!formData.email) {
      newErrors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.age) newErrors.age = 'Required';
    if (!formData.emergencyContactName) newErrors.emergencyContactName = 'Required';
    if (!formData.emergencyContactNumber) newErrors.emergencyContactNumber = 'Required';
    if (!formData.noiseSensitivity) newErrors.noiseSensitivity = 'Required';
    if (!formData.safetyGuidelines) newErrors.safetyGuidelines = 'Required';
    if (!formData.eventConditions) newErrors.eventConditions = 'Required';
    if (!formData.photoConsent) newErrors.photoConsent = 'Required';
    if (!formData.rulesAcceptance) newErrors.rulesAcceptance = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name.startsWith('additionalActivities.')) {
        const activity = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          additionalActivities: {
            ...prev.additionalActivities,
            [activity]: checkbox.checked
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checkbox.checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        emergencyContactName: '',
        emergencyContactNumber: '',
        hearAboutUs: '',
        interests: '',
        additionalActivities: {
          workshops: false,
          meetAndGreets: false,
          robotShowcases: false,
        },
        noiseSensitivity: '',
        healthConditions: '',
        safetyGuidelines: false,
        eventConditions: false,
        photoConsent: false,
        rulesAcceptance: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How to Watch ORC
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate robot combat championship live or online
          </p>
        </div>
      </div>

      {/* Watch Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Online Viewing */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <Youtube className="w-12 h-12 text-red-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Watch Online (Free)</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Visit ORC YouTube Channel</h3>
                    <p className="text-gray-300 mt-1">
                      Subscribe to our channel for exclusive content and live streams
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-red-400 font-bold">2</span>
                  </div>
                  <div className="flex items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Enable Notifications</h3>
                      <p className="text-gray-300 mt-1">
                        Click the bell icon <Bell className="inline-block w-4 h-4 mx-1" /> to never miss a stream
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-red-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Join Live Stream</h3>
                    <p className="text-gray-300 mt-1">
                      Watch the competition live on August 15, 2025
                    </p>
                  </div>
                </div>

                <a
                  href="https://youtube.com/@ORC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Visit YouTube Channel
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* In-Person Attendance */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <Users className="w-12 h-12 text-blue-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Attend In Person</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Reserve Your Spot</h3>
                    <p className="text-gray-300 mt-1">
                      Complete the attendance form to secure your place
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Check Your Email</h3>
                    <p className="text-gray-300 mt-1">
                      Receive venue details and entry guidelines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Arrive Early</h3>
                    <p className="text-gray-300 mt-1">
                      Get the best viewing spots and enjoy pre-event activities
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Doors open 2 hours before event</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Venue location sent via email</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-blue-500 mr-3" />
                    <span>support@orc.com</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Register to Attend
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        {showForm && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-8">Event Registration</h2>

              {showSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Registration Successful!</h3>
                  <p className="text-gray-300">
                    Thank you for registering. Check your email for confirmation and event details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-900 border ${
                            errors.fullName ? 'border-red-500' : 'border-gray-700'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
                          required
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-900 border ${
                            errors.email ? 'border-red-500' : 'border-gray-700'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
                          required
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number (optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Age *
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          min="0"
                          className={`w-full px-4 py-3 bg-gray-900 border ${
                            errors.age ? 'border-red-500' : 'border-gray-700'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
                          required
                        />
                        {errors.age && (
                          <p className="mt-1 text-sm text-red-500">{errors.age}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Emergency Contact Name *
                        </label>
                        <input
                          type="text"
                          name="emergencyContactName"
                          value={formData.emergencyContactName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-900 border ${
                            errors.emergencyContactName ? 'border-red-500' : 'border-gray-700'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
                          required
                        />
                        {errors.emergencyContactName && (
                          <p className="mt-1 text-sm text-red-500">{errors.emergencyContactName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Emergency Contact Number *
                        </label>
                        <input
                          type="tel"
                          name="emergencyContactNumber"
                          value={formData.emergencyContactNumber}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-900 border ${
                            errors.emergencyContactNumber ? 'border-red-500' : 'border-gray-700'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
                          required
                        />
                        {errors.emergencyContactNumber && (
                          <p className="mt-1 text-sm text-red-500">{errors.emergencyContactNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Event Experience */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Event Experience</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          name="hearAboutUs"
                          value={formData.hearAboutUs}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        >
                          <option value="">Select an option</option>
                          <option value="social">Social Media</option>
                          <option value="friend">Friend/Family</option>
                          <option value="search">Search Engine</option>
                          <option value="event">Previous Event</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          What interests you most about this event?
                        </label>
                        <textarea
                          name="interests"
                          value={formData.interests}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Would you like information about additional activities?
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="additionalActivities.workshops"
                              checked={formData.additionalActivities.workshops}
                              onChange={handleInputChange}
                              className="w-4 h-4 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-300">Workshops</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="additionalActivities.meetAndGreets"
                              checked={formData.additionalActivities.meetAndGreets}
                              onChange={handleInputChange}
                              className="w-4 h-4 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-300">Meet-and-greets</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="additionalActivities.robotShowcases"
                              checked={formData.additionalActivities.robotShowcases}
                              onChange={handleInputChange}
                              className="w-4 h-4 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-300">Robot showcases</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Health & Safety */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Health & Safety</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Do you have any sensitivities to loud noises or flashing lights? *
                        </label>
                        <div className="space-x-6">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="noiseSensitivity"
                              value="yes"
                              checked={formData.noiseSensitivity === 'yes'}
                              onChange={handleInputChange}
                              className="w-4 h-4 bg-gray-900 border-gray-700 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-300">Yes</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="noiseSensitivity"
                              value="no"
                              checked={formData.noiseSensitivity === 'no'}
                              onChange={handleInputChange}
                              className="w-4 h-4 bg-gray-900 border-gray-700 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-300">No</span>
                          </label>
                        </div>
                        {errors.noiseSensitivity && (
                          <p className="mt-1 text-sm text-red-500">{errors.noiseSensitivity}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Any other health conditions we should be aware of?
                        </label>
                        <textarea
                          name="healthConditions"
                          value={formData.healthConditions}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Acknowledgments */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Acknowledgments</h3>
                    <div className="space-y-4">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="safetyGuidelines"
                          checked={formData.safetyGuidelines}
                          onChange={handleInputChange}
                          className="w-4 h-4 mt-1 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-2 text-gray-300">
                          I agree to follow all safety guidelines and instructions provided by event staff *
                        </span>
                      </label>
                      {errors.safetyGuidelines && (
                        <p className="text-sm text-red-500">{errors.safetyGuidelines}</p>
                      )}

                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="eventConditions"
                          checked={formData.eventConditions}
                          onChange={handleInputChange}
                          className="w-4 h-4 mt-1 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-2 text-gray-300">
                          I understand that the event involves loud noises, flashing lights, and possible debris *
                        </span>
                      </label>
                      {errors.eventConditions && (
                        <p className="text-sm text-red-500">{errors.eventConditions}</p>
                      )}

                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="photoConsent"
                          checked={formData.photoConsent}
                          onChange={handleInputChange}
                          className="w-4 h-4 mt-1 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-2 text-gray-300">
                          I consent to being photographed and filmed during the event *
                        </span>
                      </label>
                      {errors.photoConsent && (
                        <p className="text-sm text-red-500">{errors.photoConsent}</p>
                      )}

                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="rulesAcceptance"
                          checked={formData.rulesAcceptance}
                          onChange={handleInputChange}
                          className="w-4 h-4 mt-1 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-2 text-gray-300">
                          I accept all event rules and regulations *
                        </span>
                      </label>
                      {errors.rulesAcceptance && (
                        <p className="text-sm text-red-500">{errors.rulesAcceptance}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      'Submit Registration'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watch;