/*global module, process */
module.exports = {
    launch: {
        headless: process.env.HEADLESS === 'true',
        args: [
            '--start-maximized'
        ]
    }
};