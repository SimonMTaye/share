import { Injectable } from "@angular/core";
import { Item } from './item-model'
import { NetworkManagerService } from './network-manager.service';

@Injectable({
  providedIn: "root"
})
export class FileManagerService {
  private selectedItems: Array<Item> = [];
  get itemNumber(){
    return this.selectedItems.length
  }
  get itemPath() {
    let pathArray: Array<string> = []
    this.selectedItems.forEach((item) => {
      pathArray.push(item.path);
    })
    return pathArray;
  }

  ItemClicked(item: Item) {
    if(this.CheckIfItemSelected(item)) {
      this.UnselectItem(item)
      console.log(item + ' item removed');
    } else {
      this.SelectItem(item)
      console.log(item + ' item selected');
    }
    console.log(this.selectedItems.length)
  }

  private SelectItem(item: Item) {
    this.selectedItems.push(item);
  }

  private UnselectItem(item: Item){
    let itemIndex = this.selectedItems.findIndex(storedItem => {
      return storedItem === item;
    });
    this.selectedItems.splice(itemIndex, 1);
  }
  ClearItems() {
    this.selectedItems = [];
  }
  SendItems() {
    this.networkMan.SendFiles();
    this.ClearItems();
  }
  CheckIfItemSelected(item: Item) :boolean {
    let itemIndex = this.selectedItems.findIndex(storedItem => {
      return storedItem === item;
    });
    if (itemIndex !== -1) {
      return true
    } else {
      return false
    }
  }


constructor(private networkMan: NetworkManagerService) { }
}
