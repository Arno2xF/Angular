import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('test', Validators.required),
    price: new FormControl(7.56, Validators.required),
    qty: new FormControl(8, Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
