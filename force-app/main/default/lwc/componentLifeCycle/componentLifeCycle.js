import { LightningElement } from 'lwc';

export default class ComponentLifeCycle extends LightningElement {

    constructor(){
        super(); // this is mandatory step ..
        console.log('constructor Called , YOu can not do any DOM manupulation because DOm is not rendered ');
    }

    connectedCallback(){
     console.log('Connected Call Back Called , DOM is rendered after this ');
    }

    renderedCallback(){
        console.log('rendered Call Back Called');
    }

    disconnectedCallback(){
        console.log('disconnected call back called , IT will be called when you go to some diferent page ..');
    }
}