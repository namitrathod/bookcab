# User Registration Endpoint

## POST /users/register

### Description
This endpoint registers a new user. It ensures the required data is provided and valid, then saves it to the system.

### Required Data
- `fullname.firstname` (at least 3 characters)
- `fullname.lastname` (at least 3 characters)
- `email` (valid email)
- `password` (at least 6 characters)

### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "secret123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Error
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "first letter at least 3 character long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```

## POST /users/login

### Description
Authenticates a user by verifying their email and password.

### Required Data
- `email` (valid email)
- `password` (at least 6 characters)

### Example Request
```json
{
  "email": "jane.doe@example.com",
  "password": "secret123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Error
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## GET /users/profile

### Description
Retrieves the authenticated user's profile data.

### Required
- A valid JWT token (from cookie or Authorization header)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "socketId": null
  }
  ```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## GET /users/logout

### Description
Logs out the current user by clearing the cookie and blacklisting the token.

### Required
- A valid JWT token (from cookie or Authorization header)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```