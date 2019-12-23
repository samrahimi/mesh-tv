import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor() { }
  roomId: any = null || getWalletIdFromStorage()
  myWalletId: any = null || getWalletIdFromStorage()
  ngOnInit() {
  }

}