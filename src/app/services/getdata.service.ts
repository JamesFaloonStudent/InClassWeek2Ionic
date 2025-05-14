import { Injectable } from '@angular/core';
import { PData } from '../classSetups';
import { PAGEDATA } from '../dataFiles';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {


  loadData() : PData {
    return PAGEDATA;
  }
  constructor() { }
}
