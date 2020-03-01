export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        const checked = (this.itemModel.done) ? "checked" : "";
        const color = (this.itemModel.done) ? "grey" : "black";
        return `
            <tr>
                <td style="color: ${color}">
                    ${this.itemModel.title}
                </td>
                <td>
                    <input type="checkbox" data-id="${this.itemModel.id}" ${checked} />                    
                </td>
                <td>
                    <button data-id="${this.itemModel.id}" class="del-button">Delete</button>
                </td>
            </tr>`;
    }
}