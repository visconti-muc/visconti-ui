/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';

/* Services */
import { GlobalsService } from './shared/services/globals.service';
import { UserService } from './shared/services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        // LoginComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
    ],
    providers: [
        GlobalsService,
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
