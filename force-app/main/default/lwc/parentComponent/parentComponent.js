import { LightningElement , track } from 'lwc';

export default class ParentComponent extends LightningElement {

    meetingRoomInfo = [
        {roomNumber : 'A-01' , roomCapacity : 25},
        {roomNumber : 'A-02' , roomCapacity : 15},
        {roomNumber : 'A-03' , roomCapacity : 20},
        {roomNumber : 'A-04' , roomCapacity : 8},
    ];
    someBoolean = "true" ;

    hotelInfo = 'All kind of roomes are available';

   @track meetingRoomSelected;

    checkboxClickParent(){
        console.log('clicked in paremt ');
        const childComponent =  this.template.querySelector('c-child-component2');
        console.log('child comp' , childComponent);
        childComponent.publicMethod(); 
 
    }

    handleTileClick(event){
        const meetingRoom = event.detail;
        this.meetingRoomSelected  = meetingRoom.roomNumber;
    }

    constructor(){
        super();
        this.template.addEventListener('tileclick' , this.handleTileClick.bind(this));
    }
    
}