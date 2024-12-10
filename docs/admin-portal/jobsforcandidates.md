# Jobs for Candidates

## Approve Applied Jobs for Candidates

## Function: `approvejob(results)`

This function updates the status of applied jobs for candidates based on user input and sends updates to the appropriate APIs.

---

### **API 1: Update Job Status**

**Endpoint:**  
`https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/jobs/update_job_status`

**Method:**  
`PUT`

**Headers:**  

- Content-Type: `application/json`

**Request Payload:**  

```json
{
  "timestamp": "<timestamp_value>",
  "category": "JobsApplied",
  "jobstatus": "<status>"
}
