import { Component, OnInit} from '@angular/core';
import { ArweaveServiceService} from '../services/arweave-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  {

  constructor(private ass: ArweaveServiceService) {
  }

  ngOnInit() {
  }
}
