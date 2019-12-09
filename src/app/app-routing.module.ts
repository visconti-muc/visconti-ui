import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';


const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'account', component: AccountComponent,
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'create', component: AccountComponent },
            { path: 'login', component: AccountComponent },
            { path: 'recover', component: AccountComponent }
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule { }
