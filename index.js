const { measure_runtime } = require('./measureRuntime.js');
const { count_token } = require('./countToken.js');
const { get_memory_usage } = require('./getMemoryUsage.js');

exports.handler = async (event) => {
    const metric_type = event.metric_type;
    const studentProgram = event.studentProgram;
    const program = event.prependProgram + studentProgram + event.postpendProgram;
    const chapter = event.library.chapter;
    var response;

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
                        runtime: measure_runtime(program, chapter)
                    }
            };
            break;

        case "memory_usage" :
            response = {
                responseType: "successful",
                response:
                    {
                        memoryUsage: get_memory_usage(program, chapter)
                    }
            };
            break;

        case "all" :
            response = {
                responseType: "successful",
                response:
                    {
                        length: studentProgram.length,
                        numOfToken: count_token(studentProgram),
                        runtime: measure_runtime(program, chapter),
                        memoryUsage: get_memory_usage(program, chapter)
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