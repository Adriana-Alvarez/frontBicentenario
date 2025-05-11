import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ParaTiComponent } from './components/para-ti/para-ti.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SiguiendoComponent } from './components/siguiendo/siguiendo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { SubirEpisodioComponent } from './components/subir-episodio/subir-episodio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'menu-principal', component: MenuPrincipalComponent},
  { path: 'para-ti', component: ParaTiComponent},
  { path: 'buscar', component: BuscarComponent},
  { path: 'siguiendo', component: SiguiendoComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'subir-episodio', component: SubirEpisodioComponent},
];
