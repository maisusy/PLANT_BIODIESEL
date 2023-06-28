import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'familia', loadChildren: () => import('./familia/familia.module').then(m => m.FamiliaModule)},
   { path:'',redirectTo:'familia',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
