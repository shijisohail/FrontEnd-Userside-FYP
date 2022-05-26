import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AdminLayoutComponent} from 'src/app/layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  FormError: string;
  isLoggedin: boolean;
  tempData: string;
  username: string;
  password: string;

  // tslint:disable-next-line:no-shadowed-variable
  private bcrypt: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public httpClient: HttpClient, private route: Router, private Adminlayoutcomponent: AdminLayoutComponent) {
  }

  ngOnInit(): void {
     this.checklogin();

  }

  private checklogin() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedin = true;
      this.route.navigate(['/dashboard']);

    } else {
      this.route.navigate(['/loginpage']);
      this.isLoggedin = false;
    }
  }

showText(Username: string, Password: string) {
  const userObject = ['', ''];
  const storageObject = ['', ''];
  // const pass = this.bcrypt.hashSync(Password);
  userObject[0] = Username;
  userObject[1] = Password;

  const pass = this.bcrypt.hashSync(Password);
  storageObject[0] = Username;
  storageObject[1] = pass;

  // tslint:disable-next-line:triple-equals
  if (Username === '') {
    this.FormError = 'Please Enter Username';
  } else if (Password === '') {
    this.FormError = 'Please Enter Password';
  } else {
    const isValid = this.httpClient.post('https://172.16.221.174:5000/userData', userObject).subscribe(data => {
      const tempData = data;
      // tslint:disable-next-line:no-debugger
      debugger;
      if (tempData === true) {
        this.route.navigate(['/dashboard']);
        this.Adminlayoutcomponent.isLoggedIn = true;
        const user = JSON.stringify(storageObject);
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        this.FormError = 'Username or Password is wrong';
      }

    });

  }

}

// logout() {
//   // remove user from local storage to log user out
//   localStorage.removeItem('currentUser');
// }
}
class Post {
  constructor(
    public pass: string
  ) { }
}
