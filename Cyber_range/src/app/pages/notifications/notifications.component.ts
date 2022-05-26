import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class NotificationsComponent implements OnInit {
    





  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;

  constructor(private toastr: ToastrService, private http:HttpClient) {}
  
  currentRate = 6;
  showNotification(from, align) {

      const color = Math.floor((Math.random() * 5) + 1);

      switch (color) {
        case 1:
          // tslint:disable-next-line:max-line-length
        this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           closeButton: true,
           enableHtml: true,
           toastClass: 'alert alert-info alert-with-icon',
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 2:
          // tslint:disable-next-line:max-line-length
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           closeButton: true,
           enableHtml: true,
           toastClass: 'alert alert-success alert-with-icon',
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 3:
          // tslint:disable-next-line:max-line-length
        this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           closeButton: true,
           enableHtml: true,
           toastClass: 'alert alert-warning alert-with-icon',
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 4:
          // tslint:disable-next-line:max-line-length
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           enableHtml: true,
           closeButton: true,
           toastClass: 'alert alert-danger alert-with-icon',
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
         case 5:
           // tslint:disable-next-line:max-line-length
         this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
            disableTimeOut: true,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-primary alert-with-icon',
            positionClass: 'toast-' + from + '-' +  align
          });
         break;
        default:
        break;
      }
  }
  variable:any;
  ngOnInit() {
   
    this.variable=this.http.get("http://127.0.0.1:8000/challengesinfo").subscribe(
    data=>this.variable=data
  );
  }
  
  changeBtn(id) {
    if (document.getElementById(id).innerText === 'STOP') {
      document.getElementById(id).innerText = 'START';
      document.getElementById(id).classList.add('btn-success');
      document.getElementById(id).classList.remove('btn-danger');

    } else {
      document.getElementById(id).innerText = 'STOP';
      document.getElementById(id).classList.add('btn-danger');
      document.getElementById(id).classList.remove('btn-success');
    }
  }
  
  onTabClose($event: any) {

  }

  onTabOpen($event: any) {

  }
}
