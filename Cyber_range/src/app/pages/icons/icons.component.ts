import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icons',
  templateUrl: 'icons.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class IconsComponent implements OnInit {
  

  constructor(config: NgbModalConfig, private modalService: NgbModal, private http:HttpClient) 
  {
    config.backdrop = 'static';
    config.keyboard = false;

  }
  variable:any;
  ngOnInit():void {
    this.variable=this.http.get("http://127.0.0.1:8000/attackinfo").subscribe(
      data=>this.variable=data
    );
  }

  changeBtn(id) {
    if (document.getElementById(id).innerText === 'Off') {
      document.getElementById(id).innerText = 'On';
      document.getElementById(id).classList.add('btn-success');
      document.getElementById(id).classList.remove('btn-danger');

    } else {
      document.getElementById(id).innerText = 'Off';
      document.getElementById(id).classList.add('btn-danger');
      document.getElementById(id).classList.remove('btn-success');
    }
  }

  open(content) {this.modalService.open(content);

  }
}
