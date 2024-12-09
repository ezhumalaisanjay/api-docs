# Create Recruiter 

## Create Recruiter API 


This API allows the creation of a new recruiter profile. The request must include details such as the recruiter's username, email, phone number, and category. The response confirms the creation or returns an error if any issue arises.

---

## **Endpoint**

`POST https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/Create_user_from_admin`

---

## **Headers**

| Key            | Value                  |
|----------------|------------------------|
| Authorization  | `Bearer <user_idtoken>` |

---

## **Request Payload**

The request body should be a JSON object containing the recruiter's details.

### **Request Example**

```json
{
  "aliasname": "john_doe",
  "nickname": "john_doe",
  "email": "john.doe@example.com",
  "original_email": "john.doe@example.com",
  "username": "johndoe123",
  "phone_number": "1234567890",
  "given_name": "Not Changed",
  "category": "recruiter-profile",
  "password": "RandomPassword123!",
  "msg": "admincreateuser",
  "UserId": "",
  "name": "johndoe123",
  "loginStatus": "Offline",
  "organization": "ExampleOrg",
  "organization_id": "ORG12345",
  "logo": "https://example.com/logo.png",
  "RoleName": "",
  "RoleID": "",
  "ParentRoleID": "",
  "admin_email": "admin@example.com",
  "description": ""
}
