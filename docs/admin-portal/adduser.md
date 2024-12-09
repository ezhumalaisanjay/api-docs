# Create Candidate

## **Create Candidate API**


## **URL**  

`https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/Create_user_from_admin`

## **Method**  

`POST`

## **Headers**  

- `Authorization`: *ID token required*

## **DATA**  

Send a JSON payload with the following fields:

| Field Name        | Type     | Description                                    |
|--------------------|----------|------------------------------------------------|
| `email`           | String   | Candidate's email address                     |
| `username`        | String   | Candidate's unique username (no spaces)       |
| `phone_number`    | String   | Candidate's phone number (digits only)        |
| `category`        | String   | Fixed value: `candidate-profile`              |
| `password`        | String   | Auto-generated or provided password           |
| `msg`             | String   | Fixed value: `admincreateuser`                |
| `organization`    | String   | Organization name                             |
| `organization_id` | String   | Organization ID                               |
| `admin_email`     | String   | Admin's email address                         |
| *Optional Fields* | -        | Context-specific fields (e.g., `Vendor_Name`, `Client_Name`, etc.) |

### **Sample Request**  

```json
{
  "email": "candidate@example.com",
  "username": "candidatealias",
  "phone_number": "1234567890",
  "category": "candidate-profile",
  "password": "generatedPass123",
  "msg": "admincreateuser",
  "organization": "Example Organization",
  "organization_id": "12345",
  "admin_email": "admin@example.com"
}
