import emailjs from '@emailjs/browser'

// EmailJS Configuration
// Replace these with your actual EmailJS credentials after setup
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_euam59m',      // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_2nsbcd2',    // Replace with your EmailJS template ID
  PUBLIC_KEY: 'r-_o6ua-paAcUp6_A',      // Replace with your EmailJS public key
}

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data to send
 * @returns {Promise} - EmailJS promise
 */
export const sendEmail = async (formData) => {
  try {
    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service || 'General Inquiry',
      message: formData.message,
      to_name: 'OW CreaTech Team',
    }

    console.log('Sending email with params:', templateParams)

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error Details:', {
      message: error.message || error.text,
      status: error.status,
      error: error
    })
    return {
      success: false,
      error: error.message || error.text || 'Failed to send email'
    }
  }
}

/**
 * Initialize EmailJS (optional, can be used in _app.js or layout.js)
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}
