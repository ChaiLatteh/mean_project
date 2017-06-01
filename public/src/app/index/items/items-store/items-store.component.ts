import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from './../item.service';
import { IndexService } from'./../../index.service'

@Component({
  selector: 'app-items-store',
  templateUrl: './items-store.component.html',
  styleUrls: ['./items-store.component.css']
})
export class ItemsStoreComponent implements OnInit {

  error: "";
  increaseCost: Number;
  user: any;
  @Output() newItemEvent = new EventEmitter()

  constructor(
    private _itemService: ItemService,
    private _indexService: IndexService,
  ) { }

  ngOnInit() {
    this.getCost()
  }

  increaseClick(){
    this._itemService.increaseClick()
    .then(()=> {
      this.getCost();
      this.newItemEvent.emit()
    })
    .catch((err)=> this.error = err._body)
  }

  getCost(){
    this._itemService.getCost()
    .then((cost)=> {
      this.increaseCost = cost
    })
    .catch((err)=> console.log(err))
  }
}
