# Mail Service

## Description

Using AWS Lambda Function.

## Installation

```bash
$ npm install
```

## Create Lambda function in AWS Console

## Set environment variable
```bash
{
  "FROM_MAIL"=""
  "FRONTEND_URL"=""
  "REGION"=""
}
```

## Running the app

- zip code and deploy into AWS development console.

## Test your code
### Send JSON:

```bash
{
  "Records": [
    {
      "body": "{\"toEmail\":\"{myEmail}\",\"type\":\"create\",\"name\":\"{myName}\",\"token\":\"{randomToken}\"}"
    }
  ]
}
```