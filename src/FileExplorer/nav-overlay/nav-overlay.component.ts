import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileManagerService } from '../../file-manager.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'file-nav-overlay',
  templateUrl: './nav-overlay.component.html',
})
export class NavOverlayComponent implements OnInit {

  @Output() navclick = new EventEmitter<string>();

  constructor(public fileManager: FileManagerService, private router: Router) { }

  onNavClick(button: string){
    this.navclick.emit(button)
  }

  onSend() {
    this.router.navigate(['host'])
    this.fileManager.SendItems();
    console.log('Items being sent')
  }

  ngOnInit() {
  }

}
