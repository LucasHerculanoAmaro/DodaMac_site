import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PaginaComponent } from './pagina/pagina.component';
import { RodapeComponent } from './rodape/rodape.component';

export const routes: Routes = [
    {path:'', redirectTo:'pagina', pathMatch:'full'},
    {path:'menu', component: MenuComponent},
    {path:'pagina', component: PaginaComponent},
    {path:'rodape', component: RodapeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }