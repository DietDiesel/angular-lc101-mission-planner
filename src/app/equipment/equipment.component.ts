import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: string = null;

  equipment: string[] = [
    "Habitat dome",
    "Drone",
    "Food containers",
    "Oxygen tanks"
  ];
    
  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    if (!this.equipment.includes(item)) {
      this.equipment.push(item)
    }
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(updatedItem: string, item: string) {
    item = updatedItem;
    this.itemBeingEdited = null;
  }
}
