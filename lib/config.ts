// Environment variable configuration for the store

export const config = {
  // Enable/disable shopping cart functionality (Add to Cart button and cart experience)
  // Cart is currently disabled site-wide. Set this to true to enable it.
  enableCart: false,
  
  // Enable/disable SMS notifications for orders
  // Requires TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER
  enableSMS: process.env.ENABLE_SMS === 'true',
  
  // Store phone number for SMS notifications to owner
  storePhoneNumber: process.env.STORE_PHONE_NUMBER || '',
  
  // Twilio configuration
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID || '',
    authToken: process.env.TWILIO_AUTH_TOKEN || '',
    phoneNumber: process.env.TWILIO_PHONE_NUMBER || '',
  },
}

// Check if cart is enabled (for use in components)
export function isCartEnabled(): boolean {
  return config.enableCart
}

// Check if SMS is enabled
export function isSMSEnabled(): boolean {
  return config.enableSMS && 
    !!config.twilio.accountSid && 
    !!config.twilio.authToken && 
    !!config.twilio.phoneNumber
}
