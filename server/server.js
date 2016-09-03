import app from './app.js';

const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  //console.log(`Listening at http://${ host }:${ port }`);
  console.log(`Listening at http://localhost:3000`);
});
