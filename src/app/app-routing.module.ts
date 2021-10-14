import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDeContatosComponent } from './components/lista-de-contatos/lista-de-contatos.component';
import { LoginComponent } from './components/login/login.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children: [
      { path: '',
      component: ListaDeContatosComponent
      },
      {
        path:'sobre',
        component: SobreComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
