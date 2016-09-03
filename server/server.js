import app from './app.js';

const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${ host }:${ port }`);
});
