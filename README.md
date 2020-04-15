# code-metrics-lambdas
AWS Lambda Function For Evaluating Code Metrics

The code-metrics-lambdas is a aws lambda function, which calculates code metrics of a Source program such as number of tokens, runtime in milliseconds, memory consumption in kB.

The function receives a JSON format and returns a JSON containing the results of the code metrics.

## Input JSON format

The are currently 3 metric types supported by the function:

1. code_length,
2. runtime,
3. memory_usage

Example input:
```JSON
{
  "library": {
    "chapter": 1,
    "external": {
      "name": "NONE",
      "symbols": []
    },
    "globals": []
  },
  "prependProgram": "// This line will be ignored",
  "studentProgram": "const f = i => i === 0 ? 0 : i < 3 ? 1 : f(i-1) + f(i-2);",
  "postpendProgram": "// This line will also be ignored",
  "metric_type": "code_length"
}
```
The studentProgram string is concatenated with prependProgram and postpendProgram and evaluated using [js-slang](https://github.com/source-academy/js-slang) interpreter for the runtime and memory usage metrics.

## Output `Response` Format

### Example: Correct enquiry

The corresponding `Response` format will look like these:

Code Length:

```json
{
  "responseType": "successful",
  "response": {
    "length": 57,
    "numOfToken": 33
  }
}
```

Runtime

```json
{
  "responseType": "successful",
  "response": {
    "runtime": 1062.9705880000256
  }
}
```



Memory Usage:

```json
{
  "responseType": "successful",
  "response": {
    "memoryUsage": 12106.4921875
  }
}
```



### Example: Wrong enquiry

An invalid metric_type is provided

The corresponding `Response` format will look like this:
```JSON
{
  "responseType": "error",
  "response": {
    "message": "Invalid code metric type"
  }
}
```
