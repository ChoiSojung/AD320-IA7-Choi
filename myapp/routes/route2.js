var express = require('express');
var router = express.Router();
var object = require('../colors.json');

/* GET route2 page. */
router.get('/all', function(req, res, next){
    res.send(object);
});


router.get('/:color', function(req, res, next){
    var color = findColor(req.params.color);
    if (color==null) {
        res.status(404).send("Color not found");
    } else {
        
    
        res.send(color);    
    }
});

function findColor (color){
    for (var idx = 0; idx<object.colors.length; idx++){
        if (object.colors[idx].color == color) {
            return object.colors[idx];
        
        }
    }
}

module.exports = router;
