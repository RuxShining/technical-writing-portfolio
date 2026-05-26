---
title: Payment Gateway Integration
---

# Payment Integration API – Quick Start Guide

# Overview

This guide explains how to integrate the Payment Gateway API into an application to securely process customer transactions.

## Use Cases

- Process credit card payments
- Handle refunds
- Manage recurring billing

## Prerequisites

- Active merchant account
- API credentials
- HTTPS-enabled application

# Authentication

All API requests require authentication using an API key.

## Request Header

```http
X-API-Key: your_api_key_here
```

:::danger

Never expose API keys in client-side applications or public repositories.

:::

# Base URL

## Production

`https://api.paymentgateway.com/v2`

## Sandbox

`https://sandbox.paymentgateway.com/v2`

# Create a Payment

## Endpoint

```http
POST /payments
```

## Request Parameters

| Parameter | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `amount` | integer | Yes | Amount in cents | `1500` |
| `currency` | string | Yes | ISO 4217 currency code | `"USD"` |
| `customer_email` | string | Yes | Customer email address | `"customer@example.com"` |
| `payment_method` | string | Yes | Payment type | `"card"` |
| `description` | string | No | Transaction description | `"Order #12345"` |

## Example Request

```json
POST /v2/payments
Content-Type: application/json
X-API-Key: pk_test_abc123

{
  "amount": 1500,
  "currency": "USD",
  "customer_email": "customer@example.com",
  "payment_method": "card",
  "description": "Order #12345"
}
```

## Success Response

**Status Code:** `200 OK`

```json
{
  "id": "pay_xyz789",
  "status": "succeeded",
  "amount": 1500,
  "currency": "USD",
  "customer_email": "customer@example.com",
  "created_at": "2024-02-15T14:30:00Z"
}
```

## Error Response

**Status Code:** `400 Bad Request`

```json
{
  "error": {
    "code": "invalid_amount",
    "message": "Amount must be at least $1.00 (100 cents)",
    "param": "amount"
  }
}
```

# Error Codes

| Code | Status | Description | Solution |
| --- | --- | --- | --- |
| `invalid_amount` | 400 | Invalid payment amount | Validate payment value |
| `invalid_currency` | 400 | Unsupported currency | Use supported ISO currency |
| `authentication_failed` | 401 | Invalid API key | Verify request credentials |
| `payment_declined` | 402 | Payment method declined | Retry with another method |
| `rate_limit_exceeded` | 429 | Too many requests | Retry after cooldown |

# Rate Limits

- Production: 100 requests per minute
- Sandbox: 20 requests per minute

When the rate limit is exceeded, the API returns:

```http
429 Too Many Requests
```

with a `Retry-After` header.

# Idempotency

To safely retry requests without duplicate charges, include an idempotency key:

```http
Idempotency-Key: unique_key_12345
```

## Best Practice

Use:

- UUIDs
- Order IDs
- Unique transaction references

## Behavior

- identical requests with the same key return the original response
- duplicate payments are prevented
- keys expire after 24 hours

# Testing

Use these test card numbers in the sandbox environment:

| Card Number | Result |
| --- | --- |
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Card declined |
| `4000 0000 0000 9995` | Insufficient funds |

# Next Steps

- Process refunds
- Configure webhooks
- Review transaction history

# Support

## Documentation

`https://docs.paymentgateway.com`

## Support

`support@paymentgateway.com`

## Status Page

`https://status.paymentgateway.com`