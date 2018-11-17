import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileManagerService } from '../../file-manager.service';
import { Router } from '@angular/router';
import { NetworkManagerService } from '../../network-manager.service';

@Component({
  moduleId: module.id,
  selector: 'file-nav-overlay',
  templateUrl: './nav-overlay.component.html',
})
export class NavOverlayComponent implements OnInit {

  @Output() navclick = new EventEmitter<string>();

  constructor(public fileManager: FileManagerService, private router: Router, private networkMan: NetworkManagerService) { }

  onNavClick(button: string){
    this.navclick.emit(button)
  }

  onSend() {
    this.router.navigate(['host'])
    this.networkMan.SendFiles()
    console.log('Items being sent')
  }

  ngOnInit() {
  }

}
