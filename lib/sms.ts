import 'server-only'
import { config, isSMSEnabled } from './config'
import { markOrderSMSSent, DBOrder } from './db-orders'
import { formatPrice } from './format'

interface SMSResult {
  success: boolean
  error?: string
}

// Send SMS to customer about their order
export async function sendOrderSMS(order: DBOrder): Promise<SMSResult> {
  if (!isSMSEnabled()) {
    console.log('SMS is not enabled. Skipping SMS notification.')
    return { success: false, error: 'SMS not enabled' }
  }

  try {
    const accountSid = config.twilio.accountSid
    const authToken = config.twilio.authToken
    const fromNumber = config.twilio.phoneNumber

    // Format message for customer
    const orderNumber = order.id.slice(0, 8).toUpperCase()
    const total = formatPrice(order.total_in_cents)
    
    const customerMessage = `Thank you for your order #${orderNumber} from Laxmi Flowers & Garlands! Your total is ${total}. We will contact you soon with pickup/delivery details.`

    // Send to customer
    const customerResponse = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: order.customer_phone,
          From: fromNumber,
          Body: customerMessage,
        }),
      }
    )

    if (!customerResponse.ok) {
      const errorData = await customerResponse.json()
      console.error('Failed to send customer SMS:', errorData)
      return { success: false, error: 'Failed to send customer SMS' }
    }

    // Send to store owner if configured
    if (config.storePhoneNumber) {
      const storeMessage = `New order #${orderNumber}! Customer: ${order.customer_name}, Phone: ${order.customer_phone}, Total: ${total}`
      
      await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            To: config.storePhoneNumber,
            From: fromNumber,
            Body: storeMessage,
          }),
        }
      )
    }

    // Mark SMS as sent in database
    await markOrderSMSSent(order.id)

    return { success: true }
  } catch (error) {
    console.error('SMS error:', error)
    return { success: false, error: 'Failed to send SMS' }
  }
}

// Send custom SMS message
export async function sendCustomSMS(to: string, message: string): Promise<SMSResult> {
  if (!isSMSEnabled()) {
    return { success: false, error: 'SMS not enabled' }
  }

  try {
    const accountSid = config.twilio.accountSid
    const authToken = config.twilio.authToken
    const fromNumber = config.twilio.phoneNumber

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: to,
          From: fromNumber,
          Body: message,
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Failed to send SMS:', errorData)
      return { success: false, error: 'Failed to send SMS' }
    }

    return { success: true }
  } catch (error) {
    console.error('SMS error:', error)
    return { success: false, error: 'Failed to send SMS' }
  }
}
