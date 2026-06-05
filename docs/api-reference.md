# API Reference

## Base URL
https://api.smartcoffee.io/v1
## Authentication

All requests require an API key in the header:

```http
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### GET /status

Returns the current status of the coffee machine.

**Request**

```http
GET /status
Authorization: Bearer YOUR_API_KEY
```

**Response**

```json
{
  "status": "idle",
  "water_level": "full",
  "bean_level": "medium",
  "last_brew": "2026-06-05T08:30:00Z"
}
```

| Field | Type | Description |
|-------|------|-------------|
| status | string | Machine state: `idle`, `brewing`, `error` |
| water_level | string | Water level: `full`, `medium`, `low` |
| bean_level | string | Bean level: `full`, `medium`, `low` |
| last_brew | string | ISO 8601 timestamp of last brew |

---

### POST /brew

Starts a brew cycle.

**Request**

```http
POST /brew
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

```json
{
  "strength": "strong",
  "cups": 2
}
```

**Response**

```json
{
  "brew_id": "abc123",
  "estimated_time": 180,
  "status": "brewing"
}
```

!!! note
    Maximum 4 cups per brew cycle.

    ---

### DELETE /brew/{brew_id}

Cancels an active brew cycle.

**Request**

```http
DELETE /brew/abc123
Authorization: Bearer YOUR_API_KEY
```

**Response**

```json
{
  "brew_id": "abc123",
  "status": "cancelled"
}
```

!!! warning
    You can only cancel a brew that is currently in progress. Completed brews cannot be cancelled.