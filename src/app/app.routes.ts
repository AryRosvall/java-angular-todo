import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { isRouteGuard } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [isRouteGuard] },
  { path: 'todos', component: ListTodosComponent, canActivate: [isRouteGuard] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [isRouteGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [isRouteGuard] },
  { path: '**', component: ErrorComponent },
];
