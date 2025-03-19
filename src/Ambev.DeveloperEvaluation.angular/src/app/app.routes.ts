import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authoCheckGuard } from './autho-check.guard';
import { AboutComponent } from './pages/about/about.component';
import { UserFormComponent } from './pages/users/insert/user-form.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login/login-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [authoCheckGuard],
        children: [
            { path: 'add-user', component: UserFormComponent },
        ],
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [],
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'login', component: LoginFormComponent },
            { path: 'add-account', component: UserFormComponent },
        ],
    },
    { path: '**', redirectTo: '' }, // Redireciona rotas inválidas para a página inicial
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}