import 'dotenv/config';

const app = require('./server/server');
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT);
  console.log(`Server is live at localhost:${PORT}`);
}

module.exports = app;
