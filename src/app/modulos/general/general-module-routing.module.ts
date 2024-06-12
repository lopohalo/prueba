import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasegeneralComponent } from "./pages/basegeneral/basegeneral.component";
import { LoginComponent } from "./pages/basegeneral/login/login.component";
import { AuthGuard } from "src/app/auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [],
  },
  {
    path: "tareas",
    component: BasegeneralComponent,
    canActivate: [AuthGuard], 
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralModuleRoutingModule {}
