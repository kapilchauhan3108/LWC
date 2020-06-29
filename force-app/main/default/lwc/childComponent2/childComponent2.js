import { LightningElement ,track , api} from 'lwc';

export default class ChildComponent2 extends LightningElement {


    @api publicMethod(){
        console.log('Checkbox is checked ');
        alert('checkbox is checked');
    }
}