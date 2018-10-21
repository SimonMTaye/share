import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../item-model";
import { FileManagerService } from '../file-manager.service';

@Component({
  selector: "app-file-folder",
  templateUrl: "./file-folder/file-folder.component.html",
  styleUrls: ["./file-folder/file-folder.component.css"]
})
export class FileFolderComponent implements OnInit {
  @Input() item: Item;
  selected: boolean = false;

  GetFormatedSize (): string {
    switch(true) {
      case (this.item.fileSize > 1000): return `${this.item.fileSize / 1000} KB`;
      case (this.item.fileSize > 1000000): return `${this.item.fileSize / 1000000} MB`;
      case (this.item.fileSize > 1000000000): return `${this.item.fileSize / 1000000000} GB`;
      default: return `${this.item.fileSize} Bytes`
    }
  }

  onClick() {
    this.fileMan.ItemClicked(this.item)
    this.selected = !this.selected
  }

  GetClass(): string {
    if(!this.selected){
      return "row my-2 bg-main"
    } else {
      return "row my-2 bg-inverted"
    }
  }

  constructor(private fileMan : FileManagerService) {}

  ngOnInit() {   
  }
}
