import { LightningElement, wire, track } from 'lwc';
import AccountController from '@salesforce/apex/AccountController.AccountController';

export default class MainComponent extends LightningElement {
    @track RECORDS;
    @wire(AccountController)
    Records;

    connectedCallback() {
        const RECORDS =this.Records;
        console.log(RECORDS);
        alert(RECORDS);
    }
    
}