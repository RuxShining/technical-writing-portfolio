# How to Schedule Automatic Scans

## Document Scope

Scheduled scans help ensure continuous protection by automatically detecting threats without requiring manual intervention. Automatic scans run in the background to detect and remove threats without manual steps. This guide explains how to set up scheduled scans on your system.

**Recommended:** Schedule a full system scan weekly during off-peak hours, such as Sunday at 2:00 AM.

## Prerequisites

- BitDefender Total Security installed.
- Administrator access to your computer.
- Ensure sufficient disk space is available for full system scans.

## Step-by-Step Instructions

### 1. Open BitDefender Dashboard

- **Windows:** Click the BitDefender icon in the system tray (bottom-right corner).
- **Mac:** Click the BitDefender icon in the menu bar (top-right corner).

**Screenshot:** [Dashboard view]

### 2. Navigate to Scan Settings

1. Click **Protection** in the left menu.
2. Click **Antivirus.**
3. Click **Manage Scans.**

**Screenshot:** [Protection menu]

### 3. Create New Schedule

1. Click **"+ Schedule New Scan".**
2. The scan configuration screen opens.

### 4. Configure Scan Type

Choose one:

| Scan Type | Duration | Resource Usage | Recommended For |
| --- | --- | --- | --- |
| **Quick Scan** | 5-10 min | Low | Daily scans, targeted areas |
| **Full System Scan** | 1-3 hours | High | Weekly deep scans |
| **Custom Scan** | Varies | Varies | Specific folders or drives |

**Recommendation:** Use **Full System Scan** for weekly schedules.

### 5. Set Schedule Frequency

**Options:**

- **Daily** - Runs every day at the specified time
- **Weekly** - Runs on selected day(s) each week
- **Monthly** - Runs on a specified date each month

**Example Configuration:**

- **Frequency:** Weekly
- **Day:** Sunday
- **Time:** 2:00 AM

**Note:** The computer must be powered on for scheduled scans to run. If a scan is missed, it runs at the next startup.

### 6. Configure Scan Actions

Choose what happens when threats are detected:

- **Apply default actions** (Recommended)
    - Quarantines threats automatically
    - No user intervention required
- **Prompt for action**
    - Asks you what to do with each threat
    - Recommended for advanced users only

**Default actions:**

- **Malware:** Quarantine immediately
- **Potentially Unwanted Programs (PUP):** Move to quarantine
- **Suspicious files:** Notify only

### 7. Optional Settings

Power Management:

- Wake computer from sleep to run scan (if supported)
- Run missed scans at next startup

Performance:

- Reduce scan priority when computer is in use.
- Skip files larger than 100 MB (optional, faster scans)

### 8. Save Schedule

1. Review your configuration.
2. Click **"Save Schedule".**
3. A confirmation message appears: "Scan schedule created successfully".

**Screenshot:** [Confirmation message]

## Verifying Your Schedule

To verify the scan will run:

1. Go to **Protection** → **Antivirus** → **Manage Scans**
2. Your scheduled scan appears in the list
3. The status shows: **"Next run: [date and time]"**

---

## Managing Existing Schedules

### Edit a Schedule

1. Go to **Manage Scans.**
2. Click the **edit icon** (pencil) next to the schedule.
3. Make changes.
4. Click **"Save Changes".**

### Disable a Schedule (Temporarily)

1. Go to **Manage Scans.**
2. Toggle the schedule **OFF.**
3. The status changes to: "Disabled".

**Note:** The schedule is saved but will not run until it is re-enabled.

### Delete a Schedule

1. Go to **Manage Scans.**
2. Click the **delete icon** (trash can).
3. Confirm deletion.

**Warning:** This action cannot be undone.

## Troubleshooting

### Scan Doesn't Run on Schedule

**Possible causes:**

1. **Computer was off/asleep**
    - **Solution:** Enable "Wake computer from sleep" option.
    - **Alternative:** Enable "Run missed scans at next startup".
2. **Another scan already running**
    - **Solution:** Wait for the current scan to complete.
3. **Insufficient disk space**
    - **Solution:** Free up at least 2 GB of disk space.
4. **Schedule disabled**
    - **Solution:** Check **Manage Scans** and ensure the toggle is ON.

### Scan Uses Too Much Resources

If your computer slows down during scans:

1. Edit the schedule
2. Enable **"Reduce scan priority when computer is in use"**
3. Or change the schedule to off-peak hours

### Scan Takes Too Long

**Full System Scans on large drives (1 TB+) can take 3-4 hours.**

**To speed up:**

- Exclude large media folders (videos, photos) if they have already been scanned
- Close resource-intensive applications during the scan
- Enable "Skip files larger than 100 MB" (optional)

**Note:** The first scan is always slower. Subsequent scans use cached data and complete faster.

## Best Practices

**Do:**

- Schedule full scans weekly.
- Run scans during off-peak hours (night or early morning).
- Keep "Apply default actions" enabled for automatic threat removal.
- Keep BitDefender definitions updated (automatic).

**Don't:**

- Schedule scans during work hours (impacts performance).
- Disable scheduled scans for extended periods.
- Interrupt running scans (can miss threats).

---

## Related Topics

- [Understanding Scan Results](https://www.notion.so/Ruxandra-Croitoru-Technical-Writing-Portfolio-3423b212d4ec8047a1eaf51f4b557c46?pvs=21)
- [Quarantine Management](https://www.notion.so/Ruxandra-Croitoru-Technical-Writing-Portfolio-3423b212d4ec8047a1eaf51f4b557c46?pvs=21)
- [Restoring False Positives](https://www.notion.so/Ruxandra-Croitoru-Technical-Writing-Portfolio-3423b212d4ec8047a1eaf51f4b557c46?pvs=21)
- [Excluding Files and Folders from Scans](https://www.notion.so/Ruxandra-Croitoru-Technical-Writing-Portfolio-3423b212d4ec8047a1eaf51f4b557c46?pvs=21)
