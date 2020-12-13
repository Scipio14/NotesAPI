const { Router } = require("express");
const router = Router();

router.route("/").get((req, res) => res.send("<h1>Users Routes</h1>"));
//.post();

// router.route("/:id")
//   .get()
//   .put()
//   .delete();

module.exports = router;
