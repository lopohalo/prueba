import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Error404Component } from "./pages/error404/error404.component";

const routes: Routes = [
  // Rutas de los modulos
  {
    path: "",
    loadChildren: () =>
      import("./modulos/general/general-module.module").then(
        (m) => m.GeneralModuleModule
      ),
  },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}