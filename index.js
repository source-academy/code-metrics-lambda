const { measure_runtime } = require('./measureRuntime.js');
const { count_token } = require('./countToken.js');
const { get_memory_usage } = require('./getMemoryUsage.js');

exports.handler = async (event) => {
    var metric_type = event.metric_type;
    var response;
    var studentProgram = event.studentProgram;
    switch(metric_type) {
        case "code_length" :
            response = {
                responseType: "successful",
                response:
                    {
                        length: studentProgram.length,
                        numOfToken: count_token(studentProgram)
                    }
            };
            break;
        case "runtime" :
            response = {
                responseType: "successful",
                response:
                    {
                        runtime: measure_runtime(studentProgram)
                    }
            };
            break;
        case "memory_usage" :
            response = {
                responseType: "successful",
                response:
                    {
                        memoryUsage: get_memory_usage(studentProgram)
                    }
            };
            break;
        default :
            response = {
                responseType: "error",
                response:
                    {
                        message: "Invalid code metric type"
                    }
            };
    }
    
    return response;
};