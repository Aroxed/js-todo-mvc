import ItemView from './ItemView.js';
export default class ItemListView {
    constructor(itemListModel) {
        this.itemListModel = itemListModel;
        this.controllerOnCheckbox = null;
        this.controllerOnAddItem = null;
        this.controllerOnDelItem = null;
        document.querySelector('#to-do').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
    }

    setControllerOnCheckbox(controllerOnCheckbox) {
        this.controllerOnCheckbox = controllerOnCheckbox;
    }

    setControllerOnAddItem(controllerOnAddItem) {
        this.controllerOnAddItem = controllerOnAddItem;
    }

    setControllerOnDelItem(controllerOnDelItem) {
        this.controllerOnDelItem = controllerOnDelItem;
    }

    onClick(e) {
        if (e.target.type === 'checkbox') {
            this.controllerOnCheckbox(e.target.dataset.id);
            return;
        } 
        if (e.target.className === 'del-button') {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        } 
    }

    onAddItem(e) {
        const title = prompt('Enter a new title:', '');
        this.controllerOnAddItem(title);
    }

    toHtml() {
        const itemsHtml = this.itemListModel.items.map( (item) => {
            const itemView = new ItemView(item);
            return itemView.toHtml();
        }).join("");
        return `<table border="1"><tr><th>Title</th><th>Done</th><th>Operation</th></tr>${itemsHtml}</table>`;
    }
}