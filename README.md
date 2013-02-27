jsset
=====

A basic set implemented in raw JavaScript

```javascript
// The default comparator handles numbers and strings
var set1 = new Set();

// Provide a custom comparator
var set2 = new Set(function(el1, el2) {
  // Comparator should return -1, 0, or 1
});

// Can chain methods
set1.add(1).add(2).add(3).remove(2).remove(1);

// All available methods
set1.add(4);
set1.contains(2); // return bool
set1.remove(2);
set1.size() //return int
set1.each(function(el) {
  console.log(el);
});

// Contains, remove, and add can take an optional second paramater defining a 
// an at runtime comparator (won't replace the comparator provided in the constructor)
set1.add(4, function(el1, el2) {
  return 0;
});
```
