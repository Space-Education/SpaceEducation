const app = express();
app.use();
const db = require("./app/models");
db.sequelize.sync();