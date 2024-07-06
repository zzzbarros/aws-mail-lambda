# Email Service

## Description
Using AWS Lambda Function and SES.

## Installation
```bash
$ npm install
```

## Access AWS Console
- Create IAM user with policies to call AWS Lambda Function and send Email with SES.
- Configure SES and verify your email or domain.
- Create new Lambda Function

#### Set environment variable
```bash
{
  "FROM_MAIL"=""
  "FRONTEND_URL"=""
  "REGION"=""
}
```

## Running the 
#### zip code and deploy into AWS development console.

## Test your code
#### Replace the body variables and send the JSON:
```bash
{
  "Records": [
    {
      "body": "{\"toEmail\":\"{myEmail}\",\"type\":\"create\",\"name\":\"{myName}\",\"token\":\"{randomToken}\"}"
    }
  ]
}
```