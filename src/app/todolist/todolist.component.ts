import { Component, OnInit,NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
   items: string[] = [];
   itemName = '';
   counter : number;
  constructor() { }

  ngOnInit() {
    this.counter=this.items.length;
  }

  addItem(){
   this.items.push(this.itemName);
   this.itemName = '';
   this.counter=this.items.length;
  }

  removeItem(i)
  {
    this.items.splice(i, 1);
    this.counter=this.items.length;
  }

}
