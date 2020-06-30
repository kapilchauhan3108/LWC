import { LightningElement ,track , api} from 'lwc';

export default class ChildComponent2 extends LightningElement {

 //Creating a public component .. and define the default values ...
   @api meetingRoomInfo = {roomNumber : 'A-01' , roomCapacity : 10} ;

   @api someBoolean  = "false" ;


    @api publicMethod(){
        console.log('Checkbox is checked ');
        alert('checkbox is checked');
    }


    tileClicked(){       
        const tileCliked = new CustomEvent('tileclick' , {detail : this.meetingRoomInfo , bubbles :true}); //  'tileClick' is the name of the event
        this.dispatchEvent(tileCliked); // dispatchEvent is a JavaScript method to fire event ....
    }
}