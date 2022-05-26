import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {not} from 'rxjs/internal-compatibility';
import * as url from 'url';




@Component({
  selector: 'app-tables',
  templateUrl: 'tables.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class TablesComponent implements OnInit {
  addcon = false;
  shop: any;
  currentRate = 8;
  socket: any;   // Mutilidae//
  data: any;
  avail: any;     // DVWA //
  // tslint:disable-next-line:variable-name
  Juice_shop: any;  // juice_shop //
  badstoree: any;  // badstore //
  bwwapp: any;
  gruyere: any; //   gruyere //
  hackney: any; // HACKZXONE APP //
  mut: any;
  postid: any;

  constructor(config: NgbModalConfig, private httpClient: HttpClient, private modalService: NgbModal, private http:HttpClient) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  variable:any;
  ngOnInit():void {
    this.variable=this.http.get("http://127.0.0.1:8000/machinesinfo").subscribe(
      data=>this.variable=data
    );
  }

// ***************************************** API FOR MUtilidae ************************//
//   Mutila(id) {
//     console.log('here');
//     // tslint:disable-next-line:no-debugger
//     debugger;
//
//     this.httpClient.get('http://172.16.221.101:5000/Mutil').subscribe(response => {
//
//       // tslint:disable-next-line:prefer-const
//       let data = response as JSON;
//       console.log(response);
//       this.socket = '';
//       this.socket = response;
//
//     });
//
//   }

// ***************************************** API FOR DVWA ************************//
  run_machines(machine_name) {
    console.log('here');
    if (machine_name === 'DVWA') {

      this.httpClient.get('http://172.16.221.101:5000/DVWA').subscribe(response => {
        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.avail = '';
        this.avail = response;
      });
    } else if (machine_name === 'BWAPP') {
      this.httpClient.get('http://172.16.221.101:5000/BWAPP').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.bwwapp = '';
        this.bwwapp = response;
      });
    } else if (machine_name === 'JUICE_SHOP') {
      this.httpClient.get('http://172.16.221.101:5000/JUICE_SHOP').subscribe(responce => {
        // tslint:disable-next-line:prefer-const
        let data = responce as JSON;
        console.log(responce);
        this.Juice_shop = '';
        this.Juice_shop = responce;

      });
    } else if (machine_name === 'badstore') {
      this.httpClient.get('http://172.16.221.101:5000/badstore').subscribe(responce => {

        // tslint:disable-next-line:prefer-const
        let data = responce as JSON;
        console.log(responce);
        this.badstoree = '';
        this.badstoree = responce;
      });
    } else if (machine_name === 'gruyere') {
      this.httpClient.get('http://172.16.221.101:5000/gruyere').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.gruyere = '';
        this.gruyere = response;
    });
    } else if (machine_name === 'hackazone') {
      this.httpClient.get('http://172.16.221.101:5000/hackazone').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.hackney = '';
        this.hackney = response;

      });
    } else if (machine_name === 'Mutil') {
      this.httpClient.get('http://172.16.221.101:5000/Mutil').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.mut = '';
        this.mut = response;
      });
    }
  }

    changeBtn(id, machine_name) {
    //debugger;
    if (document.getElementById(id).innerText === 'Off') {
      document.getElementById(id).innerText = 'On';
      document.getElementById(id).classList.add('btn-success');
      document.getElementById(id).classList.remove('btn-danger');
      this.run_machines(machine_name);
    } else {
      this.socket = null;
      document.getElementById(id).innerText = 'Off';
      document.getElementById(id).classList.add('btn-danger');
      document.getElementById(id).classList.remove('btn-success');
      // to off machine call function here
      this.stopMachine(machine_name);
    }
  }

  stopMachine(machine_name) {
    // debugger;
    if (machine_name === 'DVWA') {

      if (this.avail !== '' || this.avail !== null || this.avail !== undefined) {
        var abcd = [];
        abcd[0] = this.avail.toString().split(':')[1];
        var cc = 123;
        var isValid = this.httpClient.post('http://172.16.221.101:5000/stopMachine', abcd).subscribe(data => {
          var aa = data;
         // this.avail = '';
        });
        this.avail = ''; }
    } else if (machine_name === 'BWAPP') {

        if (this.bwwapp !== '' || this.bwwapp !== null || this.bwwapp !== undefined) {
          var abd = [];
          abd[0] = this.bwwapp.toString().split(':')[1];
          var cd = 123;
          var isValid = this.httpClient.post('http://172.16.221.101:5000/stopMachine', abd).subscribe(data => {
            var ab = data;
            this.bwwapp = '';
          });
          this.bwwapp = '';
        }
    } else if (machine_name === 'JUICE_SHOP') {

          if (this.Juice_shop !== '' || this.Juice_shop !== null || this.Juice_shop !== undefined) {
            var abde = [];
            abde[0] = this.Juice_shop.toString().split(':')[1];
            var cde = 123;
            var isValid = this.httpClient.post('http://172.16.221.101:5000/stopMachine', abde).subscribe(data => {
              var ac = data;
            });
            this.Juice_shop = '';
          }
    } else if (machine_name === 'badstore') {
            if (this.badstoree !== '' || this.badstoree !== null || this.badstoree !== undefined) {
              var abdf = [];
              abdf[0] = this.badstoree.toString().split(':')[1];
              var cdf = 123;
              var isValid = this.httpClient.post('http://172.16.221.101:5000/stopMachine', abdf).subscribe(data => {
                var ad = data;
              });
              this.badstoree = '';
            }
    } else if (machine_name === 'gruyere') {
              if (this.gruyere !== '' || this.gruyere !== null || this.gruyere !== undefined) {
                var abdg = [];
                abdg[0] = this.gruyere.toString().split(':')[1];
                var cdg = 123;
                var isValid = this.httpClient.post('http://172.16.221.101:5000/stopMachine', abdg).subscribe(data => {
                  var a = data;
                });
                this.gruyere = '';
              }
    } else if (machine_name === 'hackazone') {
      if (this.hackney !== '' || this.hackney !== null || this.hackney !== undefined) {
        var aab = [];
        aab[0] = this.mut.toString().split(':')[1];
        var cc = 123;
        var isValid = this.httpClient.post('http://172.16.221.101:5000/stopMachine', aab).subscribe(data => {
          var dat = data;
        });
        this.hackney = '';
      }
    } else if (machine_name === 'Mutil') {
      if (this.mut !== '' || this.mut !== null || this.mut !== undefined) {
        var ab = [];
        ab[0] = this.mut.toString().split(':')[1];
        var cc = 123;
        var isValid = this.httpClient.post('http://172.16.221.101:5000/stopMachine', ab).subscribe(data => {
          var dat = data;
        });
        this.mut = '';
      }
      //  else {
      // }
    }}
  open(content) {this.modalService.open(content);

  }
}
// ------------------------- example code for --------------------- //

// this.httpClient.post('http//:172.16.221.101:5000/stop', {port: 'avail'}).subscribe(data => {
//    //this.postid = data.avail;
//   console.log(data);
// });
