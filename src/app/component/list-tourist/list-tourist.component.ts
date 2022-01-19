import {Component, OnInit} from '@angular/core';
import {TouristService} from "../../service/tourist.service";
import {Tourist} from "../../model/tourist";

@Component({
  selector: 'app-list-tourist',
  templateUrl: './list-tourist.component.html',
  styleUrls: ['./list-tourist.component.css']
})
export class ListTouristComponent implements OnInit {
  tourist!: Tourist[];

  constructor(private _touristService: TouristService) {
  }

  ngOnInit(): void {
    this._touristService.getAll().subscribe(result => {
      this.tourist = result;
      console.log(result)
    })
  }
}
