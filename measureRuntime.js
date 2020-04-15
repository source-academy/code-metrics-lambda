const { eval_code } = require('./evalCode.js');

module.exports = {
    /**
     * Evaluates Source program string using js-slang interpreter and measures runtime in milliseconds
     * @param  {String} program  Program to evaluate
     * @param  {Number} chapter  Source chapter number to evaluate under
     * @return {Number} Program runtime in milliseconds
     */
    measure_runtime: function(program, chapter) {
        const { PerformanceObserver, performance } = require('perf_hooks');
        var t0 = performance.now();
        eval_code(program, chapter);
        var t1 = performance.now();
        return t1 - t0;
    }
};
