const { eval_code } = require('./evalCode.js');

module.exports = {
    /**
     * Evaluates Source program string using js-slang interpreter and measures memory usage
     * Currently global.gc() does not seem to reset memory properly but works if code is evaluated using eval()
     * @param  {String} program  Program to evaluate
     * @param  {Number} chapter  Source chapter number to evaluate under
     * @return {Number} Program memory consumption in kB
     */
    get_memory_usage: function(program, chapter) {
        global.gc();
        eval_code(program, chapter);
        return process.memoryUsage().heapUsed / 1024;
    }
};
