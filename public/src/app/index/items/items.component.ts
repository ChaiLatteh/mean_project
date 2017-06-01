import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter();
  constructor(
  ) { }

  ngOnInit() {
  }

  emit(){
    console.log("emitting from items comp")
    this.newItemEvent.emit()
  }

}
