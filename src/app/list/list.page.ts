import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: any;

  constructor(
    public listService: ListService
  ) { 
    this.list=  this.listService.getNames();
  }

  ngOnInit() {
  }

}
