'use strict'


const store = (function() {
    const foo = 'bar';
    const items = [];
    let hideCheckedItems = false;
    const searchTerm = 'some string';
    
    return {
        items, 
        hideCheckedItems, 
        searchTerm
    }
  }());

