import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone : true,
  imports : [ IonicModule, ComponentsModule ]
})
export class Page1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
