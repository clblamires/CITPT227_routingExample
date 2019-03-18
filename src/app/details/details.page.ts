import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  name: any;

  constructor( public route: ActivatedRoute, public listService: ListService) { 
    let id = this.route.snapshot.paramMap.get("id");
    this.name = this.listService.getName(id);
  }

  ngOnInit() {
  }

}
