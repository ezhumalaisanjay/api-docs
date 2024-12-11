# Create Candidate

## **API**


### **URL**  

`https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/Create_user_from_admin`

### **Method**  

`POST`

---

### **Headers**

| Key            | Value                  |
|----------------|------------------------|
| Authorization  | `ID Token` |

---

### **Body**  

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

## **Request Payload**

The request body should be a JSON object containing the recruiter's details.

### **Request Example**  

```json
{
  "FileurlHospital": "https://example.com/hospital-file.pdf",
  "email": "sampleuser@example.com",
  "Professions": "Nursing",
  "Specialtiess": "Pediatric Care",
  "SpecificOptions": "Pediatric Nurse Practitioner",
  "phone_number": "+1234567890",
  "GroupName": "Candidate",
  "original_email": "originaluser@example.com",
  "aliasname": "samplealias",
  "nickname": "sampleuser",
  "username": "sampleuser123",
  "category": "candidate-profile",
  "DocumentList": {},
  "Profile": {},
  "password": "Sample@1234",
  "msg": "admincreateuser",
  "UserId": "1234567890",
  "name": "Sample User",
  "loginStatus": "Offline",
  "given_name": "Not Changed",
  "workstatus": "Yet to be apply",
  "organization": "Sample Organization",
  "organization_id": "123e4567-e89b-12d3-a456-426614174000",
  "logo": "https://example.com/logo.png",
  "RoleName": "User",
  "RoleID": "ROLE123",
  "ParentRoleID": "PARENTROLE123",
  "admin_email": "admin@example.com",
  "description": "This is a sample description.",
  "Payroll": "No",
  "CreatedBy": "adminuser",
  "CreatedId": "adminid",
  "CreatedRole": "Admin"
}

```

### **Response Example**  

```json
{
  "statusCode": 200,
  "body": {
    "message": "User signup and confirmation successful, email verified for the new user, SES email verification request sent, user added to group, record created in DynamoDB.",
    "response": "14c8a4e8-20b1-70c3-a813-6e05136ee774"
  }
}
```

### **API Call Example**  

```javascript
$.ajax({
    url: "https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/Create_user_from_admin",
    dataType: "json",
    type: "POST",
    headers: {
        Authorization: user_idtoken,
    },
    data: formdata,
    cache: false,
    success: function (response) {
        // Success message
        console.log(response);
        console.log(response.statusCode);
        if (response.statusCode == 200) {
            console.log(JSON.parse(response.body));
            var res_body = JSON.parse(response.body);
            console.log(res_body["response"]);
            var uid = res_body["response"];

            console.log("Create Success");

            creat_ge_profile(
                data["username"],
                data["Professions"],
                data["Specialtiess"],
                data["SpecificOptions"],
                uid
            );
        } else if (response.statusCode == 400) {
            console.log(response);
            console.log(JSON.parse(response.body));
            var error_message = JSON.parse(response.body);

            swal({
                title: `Failed to create a candidate`,
                text: `${error_message}`,
                icon: "warning",
                button: {
                    text: "Close",
                },
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    btn.classList.remove("btn--loading");
                    $("#btn-id").prop("disabled", false);
                }
            });
        }
    },
    error: function (err) {
        // Fail message
        $("#resetbutton").trigger("click");
        $("#myform").trigger("reset");

        // console.log("error");
    },
});

```
