import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'
import { ComponentsModule } from '../../components/components.module'
import { PData } from '../../classSetups'
import { GetdataService } from '../../services/getdata.service'

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
  imports : [IonicModule, ComponentsModule]
})
export class Page3Page implements OnInit {

  constructor(private pgData : GetdataService) { }

  myData !: PData;

  loadMyData() : void  {
    this.myData = this.pgData.loadData();
  }


  ngOnInit() {
    this.loadMyData();
  }

}
