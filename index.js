"use strict"

var
  http       = require("http"),
  path       = require("path"),
  express    = require("express"),
  logger     = require("morgan"),
  liquid     = require("shopify-liquid"),
  bodyParser = require("body-parser"),
  routes     = require('./routes');
;

var engine = liquid({
    root: __dirname,  // for layouts and partials
    extname: '.liquid'
});

var app = express();

var assetsPath = path.resolve(__dirname, "assets");

app.engine('liquid', engine.express()); 
app.set('views', ['./views', './views/partials', './views/layouts']); 
app.set('view engine', 'liquid');
app.use("/assets", express.static(assetsPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.use(logger("dev"));

http.createServer(app).listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
