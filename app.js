import '@babel/polyfill';
import 'dotenv/config';
const app = require('./server/server');
const PORT = process.env.PORT || 3001;

// while testing, app.listen() within the test suite
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT);
  console.log(`Server is live at Port:${PORT}`);
}

module.exports = app;
