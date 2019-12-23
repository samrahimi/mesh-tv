import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor() { }
  
  roomId: any = null || localStorage.getItem("roomId")
  myWalletId: any = null || localStorage.getItem("walletId")

  ngOnInit() {
  }

}