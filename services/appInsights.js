let appInsights = require('applicationinsights');
appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY).start();

process.on('uncaughtException', ex => {
    common.services.log.error('uncaught exception: ' + ex);
    common.services.appInsights.trackException(ex);

    setTimeout(process.exit, 1000);
});

module.exports = appInsights.getClient();