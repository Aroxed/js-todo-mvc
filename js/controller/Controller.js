import Item from "../model/Item.js";

export default class Controller {
    constructor(itemListModel, itemListView) {
        this.itemListModel = itemListModel;
        this.itemListView = itemListView;
        this.itemListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.itemListView.setControllerOnAddItem(this.addItem);
        this.itemListView.setControllerOnDelItem(this.delItem);
        this.initOnModelChange();
        this.itemListView.setControllerOnCheckbox(this.itemToggleDone);        
        document.querySelector('#add-item').addEventListener('click', (e)=>itemListView.onAddItem(e));
    }

    onChangeCallback() {
        /* updates UI when a model has changed (title, done attributes) */
        document.querySelector('#to-do').innerHTML = this.itemListView.toHtml();
    }

    itemToggleDone(id) { 
        this.itemListModel.toggleDone([id]);
    }

    addItem(title) {
        const item = new Item(title);
        this.itemListModel.add(item);
    }

    delItem(id) { 
        this.itemListModel.delete(id);
    }

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#to-do').innerHTML = this.itemListView.toHtml();
                return true;
            }
        }
        this.itemListModel.items = new Proxy(this.itemListModel.items, handler);
    }
}