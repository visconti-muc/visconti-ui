/* --------------------------------------------- angular related imports -------------------------------------------- */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

/* --------------------------------------------- project related imports -------------------------------------------- */

/* Models */
import { UserModel } from './shared/models/user';

/* Services */
import { UserService } from './shared/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /* ----------------------------------------- component related variables ---------------------------------------- */
    pageTitle: string;
    user: UserModel;

    /* --------------------------------- component related angular specific methods --------------------------------- */
    public constructor(
        private titleService: Title,
        private userService: UserService,
    ) { }

    public ngOnInit(): void {
        /* Setting HTML page title */
        this.pageTitle = 'Visconti';
        this.titleService.setTitle( this.pageTitle );

        /* Setting Application's Language to browser Language by default */
        this.userService.currentUser.subscribe((user) => { this.user = user; });
    }

    /* ------------------------------------------ component related methods ----------------------------------------- */
}
