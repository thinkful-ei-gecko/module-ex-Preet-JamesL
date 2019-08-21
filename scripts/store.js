'use strict'

const store = (function() {
    const foo = 'bar';
    const items = [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ];
    let hideCheckedItems = false;
    const searchTerm = '';
    
    const findById = function(id){
        return store.items.find(item => item.id === id);
    };
    
    const addItem = function(name){
        try {
            Item.validateName(name);
            this.items.push(Item.create(name));
        }
        catch(error) {
            console.error('Cannot validate name: {error.message}')
        }
    }

    const findAndToggleChecked = function(id){
        const itemChecked = this.findById(id);
        itemChecked.checked = !itemChecked.checked;
    }

    const findAndUpdateName = function(id,newName){
        try {
            Item.validateName(newName);
            this.findById(id).name = newName;
        }

        catch(error){
            console.error('Cannot update name: {error.message}');
        }
    }

    const findAndDelete = function(id){
        this.items = this.items.filter(item => item.id !== id)
        //let target = this.items.findIndex(item => item.id !== id);
        //this.items.splice(target, 1);
        shoppingList.render();
    }

    return {
        items, 
        hideCheckedItems, 
        searchTerm,
        addItem,
        findById,
        findAndToggleChecked,
        findAndDelete,
        findAndUpdateName
    }
  })();
