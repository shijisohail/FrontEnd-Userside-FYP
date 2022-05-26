import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-typography',
  templateUrl: 'typography.component.html'
})
export class TypographyComponent implements OnInit {
  data: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Web ',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [100, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40]
        },
        {
          label: 'Cryptography ',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Binary ',
          backgroundColor: 'pink',
          borderColor: 'pink',
          data: [28, 20, 10, 16, 50, 31, 6]
        },
        {
          label: 'Stignography',
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          data: [28, 20, 10, 16, 50, 31, 6]
        },
        {
          label: 'Stignography ',
          backgroundColor: 'orange',
          borderColor: 'orange',
          data: [28, 20, 10, 16, 50, 31, 6]
        }
      ]
    };
  }

  ngOnInit(): void {
  }
}
