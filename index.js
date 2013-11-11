"use strict";

function siblingPosition(node) {
    var i = 1;
    while(node = node.previousSibling) {
        if (node.nodeType == 1) i+= 1;
    }

    return i;
}

function getQuerySelector(node) {
    if(node.id) return "#" + node.id;
    if(node.nodeName == "BODY") return "body";

    var position = siblingPosition(node);

    return getQuerySelector(node.parentNode) + ">:nth-child("+ position +")";
}

module.exports = getQuerySelector;
