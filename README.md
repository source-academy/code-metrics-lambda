# code-metrics-lambdas
AWS Lambda Functions For Evaluating Code Metrics

The code-metrics-lambdas is a aws lambda function, 
which can be used to calculate the code metrics 
such as number of tokens, 
runtime in milliseconds,
memory consumption in kB

Receives a JSON format,

Returns a JSON containing the results of metric asked.

## Input JSON format

The input format consists of metric_type and studentProgram

Example input:
```JSON
{
  "metric_type": "code_length",
  "studentProgram": "const f = i => i === 0 ? 0 : i < 3 ? 1 : f(i-1) + f(i-2);"
}
```
The studentProgram are written in [the source language](https://github.com/source-academy/js-slang). 

## Output `Response` Format

### Example: Correct enquiry

The inquire metric type is correct.

The corresponding `Response` format will look like this:
```JSON
{
  "responseType": "successful",
  "response": {
    "length": 57,
    "numOfToken": 33
  }
}
```

### Example: Wrong enquiry

The inquire metric type is correct.

The corresponding `Response` format will look like this:
```JSON
{
  "responseType": "error",
  "response": {
    "message": "Invalid code metric type"
  }
}
```
