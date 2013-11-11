#getQuerySelector

returns the query selector for a given dom node. The result can be directly fed to `document.querySelector`. It uses `body`, `#ids` and `:nth-child(i)` to compose the selector.

##Usage

```javascript
var getQuerySelector = require("get-query-selector");

var aNodes = document.getElementByTagName("A");
var aNode = aNodes[aNodes.length - 1];

var selector = getQuerySelector(aNode);
```
