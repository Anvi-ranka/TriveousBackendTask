const express = require('express');
const morgan = require('morgan')
const bodyParser = require ('body-parser');
const cors = require('cors');
const BookmarkRoutes = require('./database/routes/bookmark.routes');
const TagsRoutes = require('./database/routes/tags.routes');

const app = express();
app.use(cors())

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json());

const db = require("./database/models");
db.mongoose.connect(db.url, {
  useNewUrlParser :true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("connected to database");
})
.catch( err => {
  console.log(" cannot connect to database" , err);
  process.exit();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.use('/api',BookmarkRoutes);
app.use('/api',TagsRoutes);


const port = process.env.port || 3000;

app.listen(port, ()=> {
  console.log (`listening to port ${port}!`);
});
