const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.status(200).json({
        message: "GET - SUCCESS",
        meadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});;

//localhost:3000/example/23
router.get("/:id", (req, res)=> {
    const id = req.params.id;
    res.status(200).json({
        message: 'GET - SUCCESS',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;