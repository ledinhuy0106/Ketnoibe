import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTouristComponent} from "./component/list-tourist/list-tourist.component";
import {EditTouristComponent} from "./component/edit-tourist/edit-tourist.component";

const routes: Routes = [
  {
    path: "",
    component: ListTouristComponent
  },
  {
    path:"edit/:id" ,
    component :EditTouristComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
