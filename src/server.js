const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => console.log(`✅ Server is has been initialized on success in port 3000`));