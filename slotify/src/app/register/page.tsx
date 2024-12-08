"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  businessName: string;
  ownerName: string;
  email: string;
  password: string;
  confirmPassword: string;
  businessType: string;
  phoneNumber: string;
}

interface FormErrors {
  businessName?: string;
  ownerName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessType: "salon", // Default value
    phoneNumber: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    const newErrors: FormErrors = {};
    if (!formData.businessName) newErrors.businessName = "Business name is required";
    if (!formData.ownerName) newErrors.ownerName = "Owner name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Set errors
    setErrors(newErrors);

    // Only proceed if there are no errors
    if (Object.keys(newErrors).length === 0) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        
        // Only redirect if form submission is successful
        window.location.href = '/dashboard';
        
      } catch (error) {
        console.error("Registration error:", error);
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Pink circular accents (you can reuse these from home page) */}
      <div className="absolute top-[-50px] right-[20px] w-[120px] h-[120px] rounded-full bg-pink-300/80" />
      <div className="absolute top-[100px] right-[120px] w-[80px] h-[80px] rounded-full bg-pink-300/80" />
      
      {/* Main content */}
      <main className="flex flex-col items-center justify-center px-4 py-12 relative z-10">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8">Register with Slotify</h1>
        
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Enter your business name"
              className="mt-1 text-black block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-150 text-white placeholder-white"
            />
            {errors.businessName && <p className="mt-2 text-sm text-red-600">{errors.businessName}</p>}
          </div>

          <div>
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">Owner Name</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Enter owner's name"
              className="mt-1 text-black block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-150 text-white placeholder-white"
            />
            {errors.ownerName && <p className="mt-2 text-sm text-red-600">{errors.ownerName}</p>}
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="mt-1 text-black block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-150 text-white"
            >
              <option value="salon">Salon</option>
              <option value="spa">Spa</option>
              <option value="fitness">Fitness Studio</option>
              <option value="medical">Medical Practice</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="mt-1 text-black block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-150 text-white placeholder-white"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className="mt-1 text-black block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-150 text-white placeholder-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 text-black block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-150 text-white placeholder-white"
            />
            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="mt-1 text-black block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-150 text-white placeholder-white"
            />
            {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition duration-150 mt-8"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
}