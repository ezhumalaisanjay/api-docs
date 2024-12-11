# Candidates

## View Candidates

### API

This API retrieves candidate profiles based on specific filters like `Client_id`, `Vendor_id`, or `organization_id`. The request dynamically adjusts depending on the category or sub-category selected.

---

### **Endpoint**

`https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/get_all_category/Get_Category`


### **Method**

`PUT`


---

### **Headers**

| Key            | Value                  |
|----------------|------------------------|
| Authorization  | `ID Token` |

---

## **Request Payload**

The request body should be a JSON object containing filter attributes. The structure of the payload varies based on the sub-category.

### **Request Example**

```json
{
    "attribute_name": [
        "organization_id"
    ],
    "attribute_value": [
        "b47d9a8f-3c5b-44f4-45454-d12a728a0c85"
    ],
    "category": "candidate-profile"
}


```



### **Response Example**

```json
{
    "statusCode": 200,
    "body": {
        "Items": [
            {
                "Profile": {},
                "DocumentList": {},
                "workstatus": "Pending",
                "aliasname": "sampleAlias1",
                "given_name": "Sample Name 1",
                "email": "user1@example.com",
                "name": "SampleUser1",
                "ParentRoleID": "Role123",
                "RoleID": "Role456",
                "UserId": "12345abc-6789-defg-hijk-0987654321lm",
                "password": "Password123!",
                "loginStatus": "Online",
                "nickname": "Nick1",
                "SpecificOptions": "Option1",
                "Testing": "No",
                "admin_email": "admin@example.com",
                "custom_id": "custom-id-12345",
                "action": "createUser",
                "msg": "User created successfully",
                "organization_id": "org-12345",
                "DNR": "Yes",
                "timestamp": "2024-12-11T10:00:00.000Z",
                "Specialtiess": "Speciality1",
                "Professions": "Profession1",
                "logo": "https://example.com/logo1.png",
                "organization": "SampleOrg",
                "original_email": "user1@example.com",
                "category": "sample-category",
                "phone_number": "+1234567890",
                "SpecialityLabel": ["Speciality1", "Speciality2"],
                "RoleName": "RoleName1",
                "username": "SampleUser1",
                "description": "Description for user 1",
                "profession": ["Profession1"],
                "GroupName": "Group1"
            },
            {
                "Profile": {
                    "Resume": {
                        "resumefileurl": "https://example.com/resume1.pdf"
                    }
                },
                "DocumentList": {},
                "workstatus": "Approved",
                "aliasname": "sampleAlias2",
                "given_name": "Sample Name 2",
                "email": "user2@example.com",
                "name": "SampleUser2",
                "ParentRoleID": "Role789",
                "RoleID": "Role101",
                "UserId": "67890xyz-1234-qrst-uvwx-543210fedcba",
                "password": "SecurePassword456!",
                "loginStatus": "Offline",
                "nickname": "Nick2",
                "SpecificOptions": "Option2",
                "admin_email": "admin2@example.com",
                "custom_id": "custom-id-67890",
                "action": "updateUser",
                "msg": "User updated successfully",
                "organization_id": "org-67890",
                "DNR": "No",
                "timestamp": "2024-12-11T12:00:00.000Z",
                "Specialtiess": "Speciality2",
                "Professions": "Profession2",
                "logo": "https://example.com/logo2.png",
                "organization": "SampleOrg2",
                "original_email": "user2@example.com",
                "category": "sample-category",
                "phone_number": "+9876543210",
                "SpecialityLabel": ["Speciality3", "Speciality4"],
                "RoleName": "RoleName2",
                "username": "SampleUser2",
                "description": "Description for user 2",
                "profession": ["Profession2"],
                "GroupName": "Group2"
            }
        ],
        "Count": 2,
        "ScannedCount": 2,
        "ResponseMetadata": {
            "RequestId": "sample-request-id-12345",
            "HTTPStatusCode": 200,
            "HTTPHeaders": {
                "server": "SampleServer",
                "date": "Wed, 11 Dec 2024 11:24:35 GMT",
                "content-type": "application/json",
                "content-length": "1234",
                "connection": "keep-alive",
                "x-amzn-requestid": "sample-request-id-67890",
                "x-amz-crc32": "1234567890"
            },
            "RetryAttempts": 1
        }
    }
}
```

### **API Call Example**

```javascript
$.ajax({
    url: "https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/get_all_category/Get_Category",
    type: "PUT",
    headers: {
        Authorization: idtkn,
    },
    dataType: "json",
    data: formdata,
    contentType: "application/json; charset=utf-8",
    async: false,
    success: function (response) {
        console.log(response);               
    },
    error: function (e) {
        console.log(e);
    },
});
```