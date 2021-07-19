const app = require('./app');

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at ${host}:${port}`);
});
