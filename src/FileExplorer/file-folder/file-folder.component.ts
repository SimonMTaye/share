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

  @Output()
  clicked = new EventEmitter<{ isDir: boolean; path: string }>();
  selected: boolean = false;

  GetFormatedSize(): string {
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

  onClick() {
    this.timer = 0;
    this.preventSimpleClick = false;
    let delay = 200;

    this.timer = setTimeout(() => {
      if (!this.preventSimpleClick) {
        this.fileMan.ItemClicked(this.item);
        this.selected = !this.selected;
      }
    }, delay);
  }
  onDoubleClick() {
    this.preventSimpleClick = true;
    clearTimeout(this.timer);
    this.clicked.emit({ isDir: this.item.isDirectory, path: this.item.path });
  }

  GetClass(): string {
    if (!this.selected) {
      return "row my-2 bg-main";
    } else {
      return "row my-2 bg-inverted";
    }
  }

  constructor(private fileMan: FileManagerService) {}

  ngOnInit() {}
}
