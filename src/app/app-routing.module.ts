import {RouterModule, Routes} from "@angular/router";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'two',
    component: SecondComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
