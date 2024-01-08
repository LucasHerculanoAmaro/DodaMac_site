import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

export const routes: Routes = [
    {path:'', redirectTo:'conteudo', pathMatch:'full'},
    {path:'conteudo', component: ConteudoComponent},
    {path:'menu', component: MenuComponent},
    {path:'rodape', component: RodapeComponent}
];
