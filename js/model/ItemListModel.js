export default class itemListModel {
    constructor() {
        this.items = [];
        this.onChangeCallback = null;
    }

    add(item) {
        item.onChangeCallback = this.onChangeCallback;
        this.items.push(item);
    }

    delete(itemId) {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        this.items.splice(itemIndex, 1);
    }

    toggleDone(itemIdList) {
        this.items.map( (item) => {
            if (itemIdList.indexOf(item.id) > -1) item.toggleDone();
         }); 
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }

}