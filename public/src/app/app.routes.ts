import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { RegisterComponent } from './logreg/register/register.component';
import { LoginComponent } from './logreg/login/login.component';
import { IndexComponent } from './index/index.component';
import { ItemsComponent } from './index/items/items.component'
import { ItemsStoreComponent } from './index/items/items-store/items-store.component'

const APP_ROUTES: Routes = [
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', component: LogregComponent},
  {path: 'index', component: IndexComponent,
    children : [
      {path: 'item', component: ItemsComponent}
    ]}
]
export const routing = RouterModule.forRoot(APP_ROUTES);
