import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material-module';

import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { AccountModalComponent } from './account/account-modal/account-modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { AccountCreationComponent } from './account/account-creation/account-creation.component';
import { AccountRecoveryComponent } from './account/account-recovery/account-recovery.component';
import { AccountLoginComponent } from './account/account-login/account-login.component';


@NgModule({
    declarations: [
        AboutComponent,
        AccountComponent,
        AccountModalComponent,
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        AccountCreationComponent,
        AccountRecoveryComponent,
        AccountLoginComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [ AppComponent ],
    entryComponents: [ AccountModalComponent ],
})
export class AppModule {
}
