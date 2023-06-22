interface Amount {
  currency: string
  value: string
}

interface Recipient {
  account_id: string
  gateway_id: string
}

interface PaymentMethod {
  saved: string
  type: string
  id: string
}

interface Confirmation {
  confirmation_url: string
  return_url: string
  type: string
}

export interface IPaymentResponse {
  payment_method: PaymentMethod
  confirmation: Confirmation
  recipient: Recipient
  created_at: Date
  amount: Amount
  status: string
  id: string
}
