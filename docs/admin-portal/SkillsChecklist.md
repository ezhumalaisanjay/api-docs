# Skills Checklist

## View Skills Checklist for Candidates

## 1. **Function: `request_document(doc)`**

### Description

This function is used to request a specific document from a candidate, sending an email request to the candidate using an API.

### Parameters

- `doc` (string): The name or identifier of the document to be requested.

### Request Payload

The function sends a `PUT` request to the following endpoint:

**Endpoint:**  
`https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/Send_document_request`

#### Payload Structure

```json
{
    "username": "Candidate Alias",
    "recipient": "Candidate Email",
    "request_document": "Document Name"
}
```
