module.exports = {
    measure_runtime: function(program) {
        const { PerformanceObserver, performance } = require('perf_hooks');
        var t0 = performance.now();
        eval_program_string(program);
        var t1 = performance.now();
        return t1 - t0; // milliseconds
    }
};

function eval_program_string(obj) {
    return Function('"use strict";' + obj)();
}
