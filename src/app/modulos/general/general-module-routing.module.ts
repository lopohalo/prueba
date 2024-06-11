import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasegeneralComponent } from "./basegeneral/basegeneral.component";

const routes: Routes = [
  {
    path: "",
    component: BasegeneralComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralModuleRoutingModule {}
