import {Component, OnInit} from '@angular/core';
import {TouristService} from "../../service/tourist.service";
import {Tourist} from "../../model/tourist";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-tourist',
  templateUrl: './list-tourist.component.html',
  styleUrls: ['./list-tourist.component.css']
})
export class ListTouristComponent implements OnInit {

  tourist!: Tourist[];

  constructor(private _touristService: TouristService,
              private _fb:FormBuilder
  ) {
  }

  ngOnInit(): void {
    this._touristService.getAll().subscribe(result => {
      this.tourist = result;
      console.log(result)
    })
  }
  delete(){
    //@ts-ignore
    this._touristService.delete(this.tourist.id).subscribe(()=>{
      console.log("Đã xóa")
    })
  }

}
