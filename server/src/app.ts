import { drive_v3, sheets_v4, calendar_v3 } from "googleapis";
import { createClient } from "redis";

// google drive scopes: read drive, edit sheets, edit calendar
const driveScopes = ["https://www.googleapis.com/auth/drive.readonly"];
const sheetsScopes = ["https://www.googleapis.com/auth/spreadsheets"];
const calendarScopes = ["https://www.googleapis.com/auth/calendar"];
