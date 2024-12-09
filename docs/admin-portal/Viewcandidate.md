# View candidate profiles

## Get Candidates API 

This API retrieves candidate profiles based on specific filters like `Client_id`, `Vendor_id`, or `organization_id`. The request dynamically adjusts depending on the category or sub-category selected.

---

## **Endpoint**

`PUT https://c56p384cll.execute-api.us-east-1.amazonaws.com/production/get_all_category/Get_Category`

---

## **Headers**

| Key            | Value                  |
|----------------|------------------------|
| Authorization  | `Bearer <idtkn>` |

---

## **Request Payload**

The request body should be a JSON object containing filter attributes. The structure of the payload varies based on the sub-category.

### **Sub-Category: Clients**

```json
{
  "attribute_name": ["Client_id", "organization_id"],
  "attribute_value": ["<Client_id>", "<organization_id>"],
  "category": "candidate-profile"
}

```



### **Sub-Category: Vendor**

```json
{
  "attribute_name": ["Vendor_id", "organization_id"],
  "attribute_value": ["<Vendor_id>", "<organization_id>"],
  "category": "candidate-profile"
}
