import { LightningElement, wire, track,api } from 'lwc';
import AccountController from '@salesforce/apex/AccountController.AccountController';

export default class MainComponent extends LightningElement {
    @track all;
    @track accounts;
    @track contatcs;
    @track leads;
    @api currentContent;
    @track RECORDS;
    @wire(AccountController)
    Records;

    connectedCallback() {
        const RECORDS =this.Records;
        console.log(RECORDS);
        alert(RECORDS);    
    }
    get all(){
        if(this.currentContent === "all") {
            this.all = true;
        }
        return this.all;
    }
    get accounts(){
        if(this.currentContent === "accounts") {
            this.accounts = true;
        }
        return this.accounts
    }
    get contacts(){
        if(this.currentContent === "contacts") {
            this.contacts = true;
           
        }
        return this.contacts;

    }
    get leads(){
        if(this.currentContent === "leads") {
            this.leads = true;
           
        }
        return this.leads;

    }


    
}