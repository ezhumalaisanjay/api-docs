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
| Authorization  | `ID Token` |

---

## **Request Payload**

The request body should be a JSON object containing the recruiter's details.

### **Request Example**

```json
{
  "email": "sample@example.com",
  "phone_number": "+1234567890",
  "GroupName": "Recruiter",
  "aliasname": "samplealias",
  "nickname": "samplenick",
  "original_email": "sample@example.com",
  "username": "sampleuser",
  "given_name": "Not Changed",
  "category": "recruiter-profile",
  "password": "SampleP@ssw0rd!",
  "msg": "admincreateuser",
  "UserId": "sample-user-id",
  "name": "Sample User",
  "loginStatus": "Offline",
  "organization": "SampleOrg",
  "organization_id": "sample-org-id-12345",
  "logo": "https://example.com/sample-logo.png",
  "RoleName": "SampleRole",
  "RoleID": "sample-role-id",
  "ParentRoleID": "sample-parent-role-id",
  "admin_email": "admin@example.com",
  "description": "Sample description"
}

```

### **Response Example**

```json
{
  "statusCode": 200,
  "body": "{\"message\": \"User signup and confirmation successful, email verified for the new user, SES email verification request sent, user added to group, record created in DynamoDB.\", \"response\": \"5488b438-5091-7089-dcf7-b4322d6b1951\"}"
}
```

### **API Call Example**

```json
$.ajax({
    url: "https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/Create_user_from_admin",
    dataType: "json",
    type: "POST",
    headers: {
        Authorization: user_idtoken,
    },
    data: formdata,
    cache: false,
    success: function(response) {
        // Success message
        console.log(response);

        if (response.errorType == "UsernameExistsException") {
            swal({
                title: `${response.errorType}`,
                text: `An account with the email already exists`,
                icon: "warning",
                button: {
                    text: "Close",
                },
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    $("#btn-id").prop("disabled", false);
                }
            });
        } else if (response.errorType == "InvalidParameterException") {
            swal({
                title: `${response.errorType}`,
                text: `Value at 'username' failed to satisfy constraint: 'username' does not allow space.`,
                icon: "warning",
                button: {
                    text: "Close",
                },
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    $("#btn-id").prop("disabled", false);
                }
            });
        } else {
            console.log("Create Success");
            swal({
                title: `${data["username"]}`,
                text: `Created`,
                icon: "success",
                button: {
                    text: "Close",
                },
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    $("#resetbutton").trigger("click");
                    $("#myform").trigger("reset");
                }
            });
        }
    },
    error: function(err) {
        // Fail message
        $("#resetbutton").trigger("click");
        $("#myform").trigger("reset");
    },
});

```

