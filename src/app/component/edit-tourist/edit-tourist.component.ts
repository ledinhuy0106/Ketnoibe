import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tourist} from "../../model/tourist";
import {TouristService} from "../../service/tourist.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-edit-tourist',
  templateUrl: './edit-tourist.component.html',
  styleUrls: ['./edit-tourist.component.css']
})
export class EditTouristComponent implements OnInit {
  tourist!: Tourist

  constructor(private _touristService: TouristService,
              private _activatetedRouter: ActivatedRoute,
              private _fb:FormBuilder
  ) {
  }

  ngOnInit(): void {
    this._activatetedRouter.paramMap.subscribe(paramap => {
      const id = paramap.get("id")
      console.log(id);
      // @ts-ignore
      this._touristService.getById(id).subscribe(result => {
     console.log(result)
      })
    })
  }
}
