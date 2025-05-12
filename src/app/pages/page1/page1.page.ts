import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'
import { Man } from '../../classSetups'


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone : true,
  imports : [ IonicModule, ComponentsModule, FormsModule ]
})
export class Page1Page implements OnInit {

  man : Man = {fname : "", lname : "", nname : ""}
  constructor() { }

  ngOnInit() {
  }

}
