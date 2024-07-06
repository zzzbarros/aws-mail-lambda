## Description

AWS Lambda Function.

## Installation

```bash
$ npm install
```

## Running the app

- zip code and deploy into AWS development console.

## Test your code
# Send JSON:

```bash
{
  "Records": [
    {
      "body": "{\"toEmail\":\"{myEmail}\",\"type\":\"create\",\"name\":\"{myName}\",\"token\":\"{randomToken}\"}"
    }
  ]
}
```