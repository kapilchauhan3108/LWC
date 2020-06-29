import { LightningElement , track } from 'lwc';

export default class ParentComponent extends LightningElement {

    meetingRoomInfo = [
        {roomNumber : 'A-04' , roomCapacity : 8},
        {roomNumber : 'A-02' , roomCapacity : 15},
        {roomNumber : 'A-03' , roomCapacity : 20},
    ];



    someBoolean = "true" ;

    hotelInfo = 'All kind of roomes are available';

    checkboxClickParent(){
        console.log('clicked in paremt ');

        const childComponent =  this.template.querySelector('c-child-component2');
        console.log('child comp' , childComponent);
        childComponent.publicMethod(); 
    }
}