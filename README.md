consolog
==========
consolog is a simple function resembling console.log
Uses samtools If exists, otherwise uses a native parser.

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
