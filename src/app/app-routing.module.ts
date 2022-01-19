import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTouristComponent} from "./component/list-tourist/list-tourist.component";
import {EditTouristComponent} from "./component/edit-tourist/edit-tourist.component";
import {CreateComponent} from "./component/create/create.component";

const routes: Routes = [
  {
    path: "",
    component: ListTouristComponent
  },
  {
    path: "edit/:id",
    component: EditTouristComponent
  },
  {
    path: "create",
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
