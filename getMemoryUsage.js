module.exports = {
    get_memory_usage: function(program) {
        // returns memory consumption in kB
        memory_usage = eval_program_string(program);
        return memory_usage;
    }
};

function eval_program_string(obj) {
    global.gc(); // garbage collect
    return Function('"use strict";' + obj + 'return process.memoryUsage().heapUsed / 1024;')();
}
