import {Routes} from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import {ArticleResolver} from './resolvers/article.resolver';
import {AddComponent} from './components/add/add.component';

export const ROUTES: Routes = [
  { path: '', component: AboutComponent },
  { path: 'main', component: MainComponent, children: [
      { path: '',  redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ListComponent },
      { path: 'edit/:id', component: EditComponent, resolve: {article: ArticleResolver } },
      { path: 'add', component: AddComponent },
    ]},
  { path: '**', redirectTo: '/' }
];
