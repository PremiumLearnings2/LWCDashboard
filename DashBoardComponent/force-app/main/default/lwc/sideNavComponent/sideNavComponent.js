import { LightningElement, track } from 'lwc';

export default class SideNavComponent extends LightningElement {
    @track selectedItem = 'all';
    @track currentContent = 'all';

    handleSelect(event) {
        const selected = event.detail.name;
        this.currentContent = selected;
    }
}