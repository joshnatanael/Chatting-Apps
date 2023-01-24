# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /chatRooms`
- `POST /chatRooms`
- `DELETE /chatRooms/:ChatRoomId`
- `PUT /chatRooms/:ChatRoomId`
- `GET /messages/:ChatRoomId`
- `POST /messages/:ChatRoomId`
- `PUT /messages/:messagesId`
- `DELETE /messages/:messagesId`
- `GET /contacts`
- `POST /contacts`
- `DELETE /contacts/:contactId`


&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "fullName": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "role": "string",
  "status": "string"
}
```

_Response (201 - Created)_

```json
{
  "fullName": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name cannot be empty"
}
OR
{
  "message": "Email cannot be empty"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Password cannot be empty"
}
OR
{
  "message": "Password must be 8 characters or longer"
}
OR
{
  "message": "Phone number cannot be empty"
}
OR
{
  "message": "Email must be unique"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email or password"
}
```

&nbsp;

## 3. GET /chatRooms

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": "integer",
    "UserId": "integer",
    "ChatRoomId": "integer",
    "createdAt": "date",
    "updatedAt": "date",
    "ChatRoom": {
        "id": "integer",
        "name": "string" || null,
        "type": "personal" || "group",
        "createdAt": "date",
        "updatedAt": "date",
        "Messages": [
          {
            "id": "integer",
            "SenderId": "integer",
            "message": "string",
            "ChatRoomId": "integer",
            "createdAt": "date",
            "updatedAt": "date"
          }
        ]
    }
  }
]
```

&nbsp;

## 4. POST /chatRooms

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "name": "string",
  "type": "personal" || "group",
  "members": ["integer", ...]
}
```

_Response (201 - Created)_

```json
{
  "message": "Successfully created new chat room."
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Type chat room cannot be empty"
}
OR
{
  "message": "Member cannot be empty"
}
```

&nbsp;

## 5. DELETE /chatRooms/:ChatRoomId

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Successfully delete chat room with id 2."
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Chat room not found"
}
```

&nbsp;

## 6. PUT /chatRooms/:ChatRoomId

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "name": "string",
  "type": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Successfully edit chat room with id 2."
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Type chat room cannot be empty"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Chat room not found"
}
```

&nbsp;

## 7. GET /messages/:ChatRoomId

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": "integer",
    "SenderId": "integer",
    "message": "string",
    "ChatRoomId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  },
  ...
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Chat room not found"
}
```

&nbsp;

## 8. POST /messages/:ChatRoomId

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "message": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Successfully sent message!"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Message cannot be empty"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Chat room not found"
}
```

&nbsp;

## 9. PUT /messages/:messagesId

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "message": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Message sucessfully edited"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Message cannot be empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You are not authorized!"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Message not found"
}
```

&nbsp;

## 10. DELETE /messages/:messagesId

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Message with id 1 successfully deleted"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You are not authorized!"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Message not found"
}
```

&nbsp;

## 11. GET /contacts

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": "integer",
    "UserId": "integer",
    "FriendId": "integer",
    "createdAt": "date",
    "updatedAt": "date",
    "User": {
      "fullName": "string",
      "phoneNumber": "string",
      "status": "string"
    }
  }
]
```

&nbsp;

## 12. POST /contacts

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "FriendId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "message": "Successfully add to contact list"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Already added as a contact"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "User not found"
}
```

&nbsp;

## 13. DELETE /contacts/:contactId

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Contact with id 2 successfully deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Contact not found"
}
```

&nbsp;


## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```