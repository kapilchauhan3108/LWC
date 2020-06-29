import { LightningElement ,api , track } from 'lwc';

export default class ChildComponent extends LightningElement {

    //Creating a public component .. and define the default values ...
  @api meetingRoomInfo = {roomNumber : 'A-01' , roomCapacity : 10} ;

  @api someBoolean  = "false" ;


  @api publicMethod(){
      console.log('Checkbox is checked ');
      alert('checkbox is checked');
  }

}