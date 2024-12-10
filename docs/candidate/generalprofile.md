# General Profile

## General Profile Update API Documentation

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

### Example Request Body
```json
{
    "category": "general-profile",
    "timestamp": "2024-12-10T14:30:00Z",
    "Professions": ["Doctor", "Nurse"],
    "Specialtiess": ["Pediatrics", "Cardiology"],
    "SpecificOptions": ["Option1", "Option2"],
    "addressLine1": "123 Main Street",
    "addressLine2": "Apt 4B",
    "chartingsystem": "SystemX",
    "city": "New York",
    "country": "USA",
    "dateofbirth": "1990-01-01",
    "email": "example@example.com",
    "emr": "EMRSystem",
    "firstName": "John",
    "lastName": "Doe",
    "middleName": "A",
    "phone": "1234567890",
    "shifts": ["Morning", "Evening"],
    "ssn": "123-45-6789",
    "state_general": "NY",
    "state_gen": "New York State",
    "timetocontact": "9AM - 5PM",
    "typeofemployment": "Full-time",
    "zipCode": "10001"
}
