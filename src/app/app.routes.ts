import { Routes } from '@angular/router';
import { Login } from './6.0_modules/6.7_login/login';
import { Auth } from './6.0_modules/6.2_auth/auth';
import { Gastos } from './6.0_modules/6.4_gastos/gastos';
import { AhorroInteligente } from './6.0_modules/6.1_ahorro-inteligente/ahorro-inteligente';
import { GuiaFinanciera } from './6.0_modules/6.6_guia-financiera/guia-financiera';
import { EstadoFinanciero } from './6.0_modules/6.3_estado-financiero/estado-financiero';
import { Usuarios } from './6.0_modules/6.8_usuarios/usuarios';
import { GestionIngresos } from './6.0_modules/6.5_gestion-ingresos/gestion-ingresos';
import { Home } from './2.0_layouts/2.1_home/home';
import { UserInfo } from './5.0_shared/5.5_user-info/user-info';
import { Appview } from './2.0_layouts/2.2_appview/appview';
import { AboutUs } from './6.0_modules/6.9_about-us/about-us';
import { Inicio } from './6.0_modules/6.10_inicio/inicio';
import { Authcomponent } from './2.0_layouts/2.3_authcomponent/authcomponent';
import { FormEstado } from './6.0_modules/6.11_form-estado/form-estado';


export const routes: Routes = [
    {
        //Vista principal de la App: ""/...
        path: "", component: Appview,
        children: [
            //Esta va a ser lo PRIMERO en verse cuando se entre a la app
            { path: "", component: AboutUs}
        ],
    },
    {
        path: "", component: Authcomponent,
        children:[

            { path: "Registro", component: Auth },
            { path: "Inicio-sesion", component: Login},
        ]
    },
    {
        path: "", component: Home,
        children:[
            { path: "Inicio", component: Inicio},
            {path: "Cuentas-Registro", component: FormEstado},
            { path: "Cuentas", component: GestionIngresos},
            { path: "Guia-financiera", component: GuiaFinanciera},
            { path: "Herramientas-Ahorro", component: AhorroInteligente},
            { path: "Estado-Financiero", component: EstadoFinanciero},
            {path: "Metas", component: Gastos}
        ]
    }
];
