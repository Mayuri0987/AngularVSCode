import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No server is created!";
  serverName='';


  constructor() { 
    setTimeout(()=>{
      return this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onServerCreation(){
    return this.serverCreationStatus="Server is created! and name is "+ this.serverName;
  }
  onUpdateServerName(event:Event){
   // console.log(event);
   this.serverName=(<HTMLInputElement>event.target).value;
    
  }
  
}
