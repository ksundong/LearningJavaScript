$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    var c;
    for(var x=0; x<8; x++) {
        for(var y=0; y<8; y++) {
            c = Shape.Circle(25+50*x,25+50*y, 20);
            c.fillColor = 'green';
        }
    }

    paper.view.draw();
});