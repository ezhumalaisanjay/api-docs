# onboarding documents

## Approve Onboarding Documents API 

This function is designed to approve onboarding documents by updating their status and other related metadata.

---

## **Functionality**

The function performs the following tasks:

1. Extracts and parses the `id` of the button clicked to determine the specific document being approved.
2. Prepares a `FormData` object containing the document details.
3. Sends a `PUT` request to the API endpoint to update the document's status and related information.
4. Provides visual feedback on the status of the operation to the user.

---

## **Endpoint**

`PUT https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/create_document/update_document`

---

## **Headers**

| Key            | Value                |
|----------------|----------------------|
| Content-Type   | `application/json`  |

---

## **Request Payload**

The request payload should include the following fields:

| Field Name   | Type   | Description                                 |
|--------------|--------|---------------------------------------------|
| `fileurl`    | String | URL of the document file.                   |
| `timestamp`  | String | Timestamp of the document.                  |
| `category`   | String | Fixed value: `"DocumentList"`.              |
| `filestatus` | String | Status of the file (e.g., Approved, Pending).|
| `reason`     | String | Reason for the status update.               |
| `notify`     | String | Notification status, default is `"unread"`. |
| `UserId`     | String | ID of the user associated with the document.|

### **Example Payload**

```json
{
  "fileurl": "https://example.com/document.pdf",
  "timestamp": "2024-12-07T10:00:00Z",
  "category": "DocumentList",
  "filestatus": "Approved",
  "reason": "Verified successfully",
  "notify": "unread",
  "UserId": "12345"
}
