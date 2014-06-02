consolog
==========
consolog is a simple function resembling console.log

installation
----------------
```bash
$ npm install consolog
```

usage
-------------
```js
console.log("%%"); // %
var consolog = require("consolog");
consolog("%%"); // %%

consolog("a", "b") // a b
```

stderr
```js
console.error("%%"); // %
var consolog = require("consolog");
consolog.e("%%"); // %%, to stderr

consolog.e("a", "b") // a b, to stderr
```
