import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxGridModule, IgxBottomNavModule, IgxAvatarModule, IgxIconModule, IgxRippleModule,
  IgxListModule, IgxInputGroupModule, IgxFilterModule
} from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ArweaveServiceService } from './Services/arweave-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    ContactsComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxBottomNavModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxRippleModule,
    CommonModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxFilterModule,
    FormsModule
  ],
  providers: [ArweaveServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
