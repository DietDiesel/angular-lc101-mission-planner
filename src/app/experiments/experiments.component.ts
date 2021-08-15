import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  itemBeingEdited: string = null;

  experiments: string[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density"
  ];
    
  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    if (!this.experiments.includes(item)) {
      this.experiments.push(item)
    }
  }

  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(updatedItem: string, item: string) {
    item = updatedItem;
    this.itemBeingEdited = null;
  }
  
}
