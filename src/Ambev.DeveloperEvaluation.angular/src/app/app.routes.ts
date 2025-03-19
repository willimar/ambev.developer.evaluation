import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authoCheckGuard } from './autho-check.guard';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './pages/login/login-form.component';
import { DeleteUserFormComponent, SearchUserFormComponent, UserFormComponent } from './pages/users';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [authoCheckGuard],
        children: [
            { path: 'add-user', component: UserFormComponent },
            { path: 'delete-user', component: DeleteUserFormComponent },
            { path: 'get-user', component: SearchUserFormComponent },
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