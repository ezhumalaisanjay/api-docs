
# Scheduled Interviews

# API Documentation: View Scheduled Interviews


## Endpoint

**URL**: `https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/get_spcfic_value`

**Method**: `PUT`

**Content-Type**: `application/json`

---

## Request

The request sends a `PUT` request with a JSON payload, which includes the following fields:

### Request Payload

```json
{
  "category": "Interviews",
  "attribute": "Candidate_Name",
  "attribute_value": "can_uss"
}
