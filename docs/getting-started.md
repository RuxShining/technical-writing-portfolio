# Getting Started

## Overview

The Smart Coffee Machine API lets you control your coffee machine remotely, 
schedule brews, and monitor status from any device.

## Prerequisites

Before you begin, make sure you have:

- A Smart Coffee Machine (Model X200 or later)
- A valid API key (see [Configuration](configuration.md))
- Python 3.8+ or any REST client (curl, Postman)

## Quick Start

1. Connect your coffee machine to Wi-Fi using the mobile app.
2. Generate your API key in the device settings.
3. Make your first API call:

```bash
curl -X GET https://api.smartcoffee.io/v1/status \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Next Steps

- [Configure your device](configuration.md)
- [Explore the API Reference](api-reference.md)