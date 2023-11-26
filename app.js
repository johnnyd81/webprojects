const express = require("express");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
//the line below is middleware that helps me process the  req.body
app.use(express.json());
//body-parser middleware setup helps me extract entire body portion of the incoming request stream exposed on req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//middleware that shows the path and the method of each request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/", routes);
app.use(helmet());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
