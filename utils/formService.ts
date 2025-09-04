/**
 * Form service for LKDV Solutions Oy website
 */

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  message: string;
}

interface PilotFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  useCase: string;
  challenge: string;
}

// Security token that should match with the token in send-form.php
const SECURITY_TOKEN = "A9f3dR7xH2pQ5sT1zL8mN6bV0cK4eG";

// URL to the form handler script on your web hosting
const API_URL = "https://lkdv.fi/forms/send-form.php";

/**
 * Sends contact form data to the backend
 */
export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    // For local development or if we're not in production
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // Simulate a successful submission for development/testing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('CONTACT FORM SUBMISSION (DEV MODE):');
      console.log('-----------------------');
      console.log('Name:', data.name);
      console.log('Email:', data.email);
      console.log('Company:', data.company);
      console.log('Job Title:', data.jobTitle);
      console.log('Message:', data.message);
      console.log('-----------------------');
      return true;
    }
    
    // In production, send to the server
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Security-Token': SECURITY_TOKEN
      },
      body: JSON.stringify({
        type: 'contact',
        ...data
      })
    });
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};

/**
 * Sends pilot program form data to the backend
 */
export const sendPilotEmail = async (data: PilotFormData): Promise<boolean> => {
  try {
    // Simulate a successful submission for development/testing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For local development or if we're not in production
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('PILOT PROGRAM APPLICATION (DEV MODE):');
      console.log('-----------------------');
      console.log('Name:', data.name);
      console.log('Email:', data.email);
      console.log('Company:', data.company);
      console.log('Industry:', data.industry);
      console.log('Use Case:', data.useCase);
      console.log('Challenge:', data.challenge);
      console.log('-----------------------');
      return true;
    }
    
    // In production, send to the server
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Security-Token': SECURITY_TOKEN
      },
      body: JSON.stringify({
        type: 'pilot',
        ...data
      })
    });
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error sending pilot form:', error);
    return false;
  }
};
