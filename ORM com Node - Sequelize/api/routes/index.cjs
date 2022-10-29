const bodyParser = require('body-parser');
const pessoasRoutes = require('./pessoasRoutes.cjs');
const niveisRoutes = require('./niveisRoutes.cjs');
const turmasRoutes = require('./turmasRoutes.cjs');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoasRoutes,
        niveisRoutes,
        turmasRoutes
    );
}
