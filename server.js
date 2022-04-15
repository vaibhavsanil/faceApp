const express = require('express');
const bodyParser = require('body-parser'); // latest version of exressJS now comes with Body-Parser!
const bcrypt = require('bcrypt-nodejs');
const logger = require('morgan');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');

const db = knex({
  // connect to your own database here:
  client: 'pg',
  // connection: {
  //   host: '127.0.0.1',
  //   user: 'vaibhav',
  //   password: 'kalavathi',
  //   database: 'smart-brain',
  // },
  connection: process.env.POSTGRES_URI,
});

const app = express();
app.use(logger('combined'));
app.use(cors());
app.use(express.json()); // latest version of exressJS now comes with Body-Parser!

app.get('/', (req, res) => {
  res.send(db.users);
});
app.post('/signin', signin.signinAuthentication(db, bcrypt));
app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
app.get('/profile/:id', auth.requireAuth, (req, res) => {
  profile.handleProfileGet(req, res, db);
});
app.post('/profile/:id', auth.requireAuth, (req, res) => {
  profile.handleProfileUpdate(req, res, db);
});
app.put('/image', auth.requireAuth, (req, res) => {
  image.handleImage(req, res, db);
});
app.post('/imageurl', auth.requireAuth, (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(6000, () => {
  console.log('app is running on port 6000');
});
