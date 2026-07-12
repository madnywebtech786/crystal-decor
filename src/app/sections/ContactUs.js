'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import MultiSelect from '../components/MultiSelect';
import { SERVICE_OPTIONS, sanitizeContactPayload, validateContactPayload } from '../lib/contactValidation';

const INITIAL_FORM_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  services: [],
};

export default function ContactUs() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleServicesChange = (services) => {
    setFormData((prev) => ({ ...prev, services }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setStatusMessage('');

    const payload = sanitizeContactPayload(formData);
    const formErrors = validateContactPayload(payload);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again later.');
        if (data.errors) setErrors(data.errors);
        return;
      }

      setStatus('success');
      setStatusMessage(data.message || 'Your message has been sent successfully.');
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex my-20 px-4 md:px-8 lg:px-12 2xl:px-20 gap-10 flex-col lg:flex-row' id='contact'>
      <div className='w-full lg:w-1/2 serviceSide'>
        <Image
          src={'/images/contactside.webp'}
          alt='contact img'
          width={800}
          height={800}
          className='w-full h-full rounded-lg'
        />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-4 py-10 relative'>
        <div className='flex flex-col gap-4 z-20'>
          <h2 className='text-sm md:text-base lg:text-lg  text-primary fancy-text '>
            Get Free Quote
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold '>
            Design Your Vision with a Free Consultation
          </h3>
        </div>

        <form className='flex flex-col gap-4 z-20' onSubmit={handleSubmit} noValidate>
          <div className='flex gap-3'>
            <div className='w-full'>
              <input
                type='text'
                id='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4 disabled:opacity-60 disabled:cursor-not-allowed'
                placeholder='First Name'
              />
              {errors.firstName && (
                <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>
              )}
            </div>
            <div className='w-full'>
              <input
                type='text'
                id='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4 disabled:opacity-60 disabled:cursor-not-allowed'
                placeholder='Last Name'
              />
              {errors.lastName && (
                <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='w-full'>
              <input
                type='email'
                id='email'
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4 disabled:opacity-60 disabled:cursor-not-allowed'
                placeholder='Email'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>
            <div className='w-full'>
              <input
                type='text'
                id='phone'
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4 disabled:opacity-60 disabled:cursor-not-allowed'
                placeholder='Phone'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
              )}
            </div>
          </div>

          <div className='w-full'>
            <MultiSelect
              id='services'
              options={SERVICE_OPTIONS}
              value={formData.services}
              onChange={handleServicesChange}
              placeholder='Services you are interested in...'
            />
            {errors.services && (
              <p className='text-red-500 text-sm mt-1'>{errors.services}</p>
            )}
          </div>

          <div className='w-full'>
            <textarea
              id='message'
              rows='6'
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className='block p-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 disabled:opacity-60 disabled:cursor-not-allowed'
              placeholder='Write your thoughts here...'
            ></textarea>
            {errors.message && (
              <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-max p-3 px-4 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg text-white font-bold rounded-lg flex items-center gap-2 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'
            }`}
          >
            {isSubmitting && (
              <span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin-fast' />
            )}
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>

          {status === 'success' && (
            <p className='text-green-600 text-sm mt-2 bg-green-50 border border-green-200 rounded-lg p-3'>
              {statusMessage}
            </p>
          )}
          {status === 'error' && (
            <p className='text-red-600 text-sm mt-2 bg-red-50 border border-red-200 rounded-lg p-3'>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
