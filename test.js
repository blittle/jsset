var Set = require('./set.js');

function expect(val, exp) {
    var fail = false;

    if(val instanceof Array) {
        for(var i = 0; i < val.length; i++) {
            if(val[i] !== exp[i]) {
                fail = true;
                break;
            }
        }
    } else {
        fail = (val !== exp);
    }

    fail ? console.log("!", val, exp) : console.log(val, exp);
}

var set = new Set();

expect(set.size(), 0);

set.add(1);
expect(set.size(), 1);

set.add(2);
expect(set.size(), 2);
expect(set._objs, [1, 2])

set.add(0);
expect(set._objs, [0,1,2]);

set.add(10).add(20).add(15);
expect(set._objs, [0,1,2,10,15,20]);

expect(set.contains(20), true);
expect(set.contains(233), false);

set.remove(10).remove(2);
expect(set._objs, [0,1,15,20]);

set.each(function(obj) {
    console.log(obj);
});
