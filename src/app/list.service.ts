import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  theList: any;

  constructor() {
    this.theList = [{
      name: "Casey",
      id: 1,
      email: "clblamires@lcsc.edu"
    },
    {
      name: "Jesse",
      id: 2,
      email: "jasnyder@lcsc.edu"
    },{
      name: "Nikki",
      id: 3,
      email: "njvandermeer@lcsc.edu"
    }];
  }

  getNames() {
    return this.theList;
  }

  getName( id ){
    for( let i = 0; i < this.theList.length; i++ ){
      if( this.theList[i].id == id ){
        return this.theList[i];
      }
    }
    return -1;
  }
}
