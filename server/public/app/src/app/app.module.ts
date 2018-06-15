/*modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app.router';
/*services*/
import { HttpService } from './services/http.service';
/*components*/
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AboutComponent } from './components/about/about.component';
import {ArticleResolver} from './resolvers/article.resolver';
import { AddComponent } from './components/add/add.component';
import { ValidationComponent } from './shared/components/validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    EditComponent,
    AboutComponent,
    AddComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, HttpClientModule, ArticleResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
