import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { DetalleRepartidorComponent } from './components/detalle-repartidor/detalle-repartidor.component';
import { HeladosComponent } from './components/helados/helados.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', component: BienvenidaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'alta-repartidor', component: AltaRepartidorComponent, canActivate: [authGuard]},
    {path: 'detalle-repartidor', component: DetalleRepartidorComponent, canActivate: [authGuard]},
    {path: 'helados', component: HeladosComponent, canActivate: [authGuard]}
];
