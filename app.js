require('./configs/db_configs.js');

const express = require('express');
const router = express.Router();
const app = express();

const PORT = process.config.PORT || 3350;
const API_VERSION = '/api/v1';

app.use(API_VERSION,router);


require('./routers/get_all_user_router.js')(router);


app.listen(PORT, () => {
    console.log('Server running on port',PORT);
});