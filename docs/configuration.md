# Configuration

## API Key

To authenticate API requests, you need an API key.

### Generate an API key

1. Open the Smart Coffee Machine mobile app.
2. Go to **Settings → Developer Options**.
3. Tap **Generate API Key**.
4. Copy the key and store it securely.

!!! warning
    Your API key is shown only once. If you lose it, you must generate a new one.

## Environment Variables

Store your API key as an environment variable instead of hardcoding it:

```bash
export COFFEE_API_KEY="your_api_key_here"
```

## Configuration File

You can also use a `config.yaml` file:

```yaml
api:
  key: your_api_key_here
  base_url: https://api.smartcoffee.io/v1
  timeout: 30

device:
  name: Kitchen Coffee Machine
  model: X200
```

!!! note
    The configuration file must be in the same directory as your application.