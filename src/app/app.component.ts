import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InventoryItem } from 'src/models/inventoryItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-list';
  shopList:InventoryItem[];
  constructor(private modalService: NgbModal) {

  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(){
    this.shopList = [];
    this.sampleList();
  }

  shoppedItem(item:InventoryItem){
    item.isDone=true;
  }

   //TODO dummy test list
   sampleList() {
    const testItem:InventoryItem = {
      catalogObjectId: "QS4IRGUSV42RKYDZR3ABZNGJ",
      itemId: "I5U5LXC6M7FDFWATSEAV33IY",
      itemName: "DEDE Conditioner - 250ml",
      itemSku: "D/DC2",
      quantity: 2,
      alertQuantity: 3,
      isDone: false
    };
    this.shopList.push(testItem);
  }
}
