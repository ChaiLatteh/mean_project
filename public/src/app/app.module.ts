import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LogregComponent } from './logreg/logreg.component';
import { LogregService } from './logreg/logreg.service';
import { RegisterComponent } from './logreg/register/register.component';
import { LoginComponent } from './logreg/login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexService } from './index/index.service';
import { ItemsComponent } from './index/items/items.component';
import { ItemService } from './index/items/item.service';
import { ItemsBbComponent } from './index/items/items-bb/items-bb.component';
import { ItemsStoreComponent } from './index/items/items-store/items-store.component'

@NgModule({
  declarations: [
    AppComponent,
    LogregComponent,
    RegisterComponent,
    LoginComponent,
    IndexComponent,
    ItemsComponent,
    ItemsBbComponent,
    ItemsStoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [LogregService, IndexService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
