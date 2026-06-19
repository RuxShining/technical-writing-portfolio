# Troubleshooting

## Common Issues

### Machine not responding

**Symptom:** API returns `connection timeout` or `503 Service Unavailable`.

**Solutions:**

1. Check that the coffee machine is powered on.
2. Verify the machine is connected to Wi-Fi.
3. Restart the machine and wait 30 seconds before retrying.

!!! tip
    You can check connectivity status in the mobile app under **Settings → Network**.

---

### Invalid API key error

**Symptom:** API returns `401 Unauthorized`.

**Solutions:**

- Confirm you're using the correct API key.
- Check that the key hasn't expired.
- Generate a new key in **Settings → Developer Options**.

---

### Brew cycle not starting

**Symptom:** POST /brew returns `409 Conflict`.

**Possible causes:**

| Error code | Meaning | Action |
|------------|---------|--------|
| `MACHINE_BUSY` | Already brewing | Wait for current cycle to finish |
| `LOW_WATER` | Water tank empty | Refill water tank |
| `LOW_BEANS` | Bean hopper empty | Refill bean hopper |
| `DOOR_OPEN` | Lid not closed | Close the machine lid |

## FAQ

**Can I brew while the machine is updating firmware?**

No. Firmware updates pause all brewing functions until complete.

**Does the API work without internet connection?**

No. The Smart Coffee Machine requires an active Wi-Fi connection 
to process API requests, since commands are routed through the cloud.

**How often should I clean the machine?**

We recommend a descaling cycle every 4-6 weeks, depending on water hardness.

## Getting Help

If the issue persists, contact support:

- Email: support@smartcoffee.io
- Community forum: community.smartcoffee.io