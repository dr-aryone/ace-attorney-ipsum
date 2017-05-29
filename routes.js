"use strict"

let
  express   = require("express"),
  router    = express.Router(),
  generator = require('./_javascript/ipsum')
;

router.get("/", function(request, response) {

  response.render("index", {
    title: "Ace Attorney Ipsum",
    ipsum: generator.ipsum(3)
  });
});

router.post("/", function(request, response) {

  let paragraphs = request.body.paragraphs

  response.render("feed", {
    title: "Take That!",
    ipsum: generator.ipsum(paragraphs)
  });
});

router.use(function(request, response) {
  response.status(404).render("404", {
    title: "Page Not Found!"
  });
});

module.exports = router;
