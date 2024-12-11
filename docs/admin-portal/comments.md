# Exchange Comments

## **Exchange Comments Between Candidates and Recruiters**

## **Description**

This functionality allows users (candidates and recruiters) to exchange comments in a threaded format. Messages include metadata such as sender name, user ID, organization ID, and a timestamp.

---

## **API Endpoint**

**URL:**  
`https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/Postsdata`

**Method:**  
`POST`

**Content Type:**  
`application/json`

---

## **Request Payload**

```json
{
  "name": "user_nm",           // Name of the user sending the message (string)
  "image": "",                 // Optional: URL for the user's profile image (string)
  "category": "comment",       // Type of message (always "comment")
  "UserId": "userid",          // Unique identifier for the user (string)
  "organization_id": "org_id", // Organization ID the user belongs to (string)
  "message": "messageText",    // The content of the message (string)
  "timestamp": "timestamp",    // ISO 8601 formatted timestamp of the message creation (string)
  "replies": []                // Array to hold replies to this message (array)
}

```

# API Documentation: Fetch Messages

## Endpoint

**URL:**  
`https://<your-api-url>`  

**Method:**  
`PUT`

**Content-Type:**  
`application/json`

---

## Request Parameters

### Request Body

The request body should be in JSON format with the following structure:

| Parameter         | Type     | Description                                | Example                      |
|--------------------|----------|--------------------------------------------|------------------------------|
| `category`         | `string` | Specifies the category of the request.     | `"comment"`                 |
| `attribute_name`   | `array`  | List of attribute names to filter by.      | `["organization_id", "Client_id", "Vendor_id"]` |
| `attribute_value`  | `array`  | Corresponding values for the attributes.   | `[organization_id, "", ""]` |

### Example Request

```json
{
    "category": "comment",
    "attribute_name": ["organization_id", "Client_id", "Vendor_id"],
    "attribute_value": [organization_id, "", ""]
}
```
