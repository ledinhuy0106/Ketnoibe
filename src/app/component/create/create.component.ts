import { Component, OnInit } from '@angular/core';
import {TouristService} from "../../service/tourist.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form : FormGroup= this._fb.group({
    acreage : new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    gdp : new FormControl('',Validators.required),
  })
  constructor(private _touristService:TouristService,
              private _fb:FormBuilder) { }

  ngOnInit(): void {
  }
  create() {
    const tourist = this.form.value;
    this._touristService.create(tourist).subscribe(() => {
      console.log("Đã xóa")
    })
  }
}
