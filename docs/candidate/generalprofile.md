# General Profile

## API Documentation

### Endpoint  
**URL**:  
`https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/profile/general_profile`

**HTTP Method**:  
`PUT`

---

## Request Format

### Headers  
- **Content-Type**: `application/json`

### Body  
The request body must be a JSON object containing the following fields:

| **Field**             | **Type**   | **Description**                                                                 |
|-----------------------|-----------|---------------------------------------------------------------------------------|
| `category`            | `string`  | The profile category, e.g., `"general-profile"`.                               |
| `timestamp`           | `string`  | Timestamp of the profile update (ISO format).                                  |
| `Professions`         | `array`   | List of professions for the user.                                              |
| `Specialtiess`        | `array`   | List of specialties for the user.                                              |
| `SpecificOptions`     | `array`   | Specific options relevant to the user.                                         |
| `addressLine1`        | `string`  | First line of the user's address.                                              |
| `addressLine2`        | `string`  | Second line of the user's address (optional).                                  |
| `chartingsystem`      | `string`  | User's preferred charting system.                                              |
| `city`                | `string`  | City of residence.                                                             |
| `country`             | `string`  | Country of residence.                                                          |
| `dateofbirth`         | `string`  | User's date of birth (YYYY-MM-DD).                                             |
| `email`               | `string`  | User's email address.                                                          |
| `emr`                 | `string`  | User's electronic medical record system.                                       |
| `firstName`           | `string`  | User's first name.                                                             |
| `lastName`            | `string`  | User's last name.                                                              |
| `middleName`          | `string`  | User's middle name (optional).                                                 |
| `phone`               | `string`  | User's contact phone number.                                                   |
| `shifts`              | `array`   | Preferred shifts for the user.                                                 |
| `ssn`                 | `string`  | User's Social Security Number (SSN).                                           |
| `state_general`       | `string`  | General state value (from a dropdown or input).                                |
| `state_gen`           | `string`  | Specific state-related data (custom).                                          |
| `timetocontact`       | `string`  | Preferred time to contact the user.                                            |
| `typeofemployment`    | `string`  | Type of employment (e.g., full-time, part-time).                               |
| `zipCode`             | `string`  | User's postal code.                                                            |

---

### Request
```json
{
    "category": "general-profile",
    "timestamp": "2024-12-10T00:00:00.000000",
    "Professions": "ProfessionExample",
    "Specialtiess": "SpecialtyExample",
    "SpecificOptions": "SpecificOptionExample",
    "addressLine1": "123 Main St",
    "addressLine2": "Apt 456",
    "chartingsystem": [
        "ExampleSystem"
    ],
    "city": "SampleCity",
    "country": "US",
    "dateofbirth": "01 Jan 1990",
    "email": "dummy@example.com",
    "emr": [
        "ExampleEMR"
    ],
    "firstName": "John",
    "lastName": "Doe",
    "middleName": "M",
    "phone": "+10000000000",
    "shifts": [
        "Days"
    ],
    "ssn": "1234",
    "state_general": "SampleState",
    "state_gen": "SampleState",
    "timetocontact": [
        "Morning"
    ],
    "typeofemployment": [
        "Temporary"
    ],
    "zipCode": "12345"
}


```

### Response

```json
{
  "statusCode": 200,
  "body": "Item updated successfully",
  "updateResponse": {
    "ResponseMetadata": {
      "RequestId": "ODMC6FKTVG0G85QD178AT7SP8NVV4KQNSO5AEMVJF66Q9ASUAAJG",
      "HTTPStatusCode": 200,
      "HTTPHeaders": {
        "server": "Server",
        "date": "Wed, 11 Dec 2024 06:02:24 GMT",
        "content-type": "application/x-amz-json-1.0",
        "content-length": "2",
        "connection": "keep-alive",
        "x-amzn-requestid": "ODMC6FKTVG0G85QD178AT7SP8NVV4KQNSO5AEMVJF66Q9ASUAAJG",
        "x-amz-crc32": "2745614147"
      },
      "RetryAttempts": 0
    }
  }
}
```


### API Call
```javascript
$.ajax({
    url: "https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/profile/general_profile",
    dataType: "json",
    type: "PUT",
    data: JSON.stringify(profile_data),
    cache: false,
    success: function (response) {
        // Handle the success response
        console.log("API call successful:", response);
    },
    error: function (err) {
        // Handle the error response
        console.error("API call failed:", err);
        alert("An error occurred while updating the profile.");
    }
});
```
