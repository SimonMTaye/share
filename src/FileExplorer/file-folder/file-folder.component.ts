import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../../item-model";
import { FileManagerService } from "../../file-manager.service";

@Component({
  moduleId: module.id,
  selector: "file-file-folder",
  templateUrl: "./file-folder.component.html",
  styleUrls: ["./file-folder.component.css"]
})
export class FileFolderComponent implements OnInit {
  @Input()
  item: Item;
  preventSimpleClick: boolean;
  private timer: any;
  isSelected = false;

  @Output()
  clicked = new EventEmitter<{ isDir: boolean; path: string }>();

  GetFormatedSize(): string {
    if (this.item.isDirectory) {
      return `${this.item.fileSize} item(s)`
    } else {
      switch (true) {
        case this.item.fileSize > 1000:
          return `${this.item.fileSize / 1000} KB`;
        case this.item.fileSize > 1000000:
          return `${this.item.fileSize / 1000000} MB`;
        case this.item.fileSize > 1000000000:
          return `${this.item.fileSize / 1000000000} GB`;
        default:
          return `${this.item.fileSize} Bytes`;
      }
    }
  }

  onClick() {
    this.timer = 0;
    this.preventSimpleClick = false;
    let delay = 200;
    this.isSelected = !this.isSelected;

    this.timer = setTimeout(() => {
      if (!this.preventSimpleClick) {
        this.fileMan.ItemClicked(this.item);
      }
    }, delay);
  }
  onDoubleClick() {
    this.preventSimpleClick = true;
    clearTimeout(this.timer);
    if (this.fileMan.itemNumber === 0) {
      this.clicked.emit({ isDir: this.item.isDirectory, path: this.item.path });
    }
  }

  GetClass(): string {
    if (!this.isSelected) {
      return "row my-2 bg-main";
    } else {
      return "row my-2 bg-inverted";
    }
  }

  constructor(public fileMan: FileManagerService) {}

  ngOnInit() {}
}
