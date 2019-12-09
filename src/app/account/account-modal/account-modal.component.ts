import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalsService } from '../../shared/services/globals.service';
import { UserService } from '../../shared/services/user.service';
import {UserModel} from "../../shared/models/user";

@Component({
    selector: 'app-account-modal',
    templateUrl: './account-modal.component.html',
    styleUrls: ['./account-modal.component.css']
})
export class AccountModalComponent implements OnInit {

    currentUser: UserModel;
    tables: object[];

    constructor(
        private globalsService: GlobalsService,
        private router: Router,
        private userService: UserService,
    ) {
    }

    ngOnInit() {
        this.userService.currentUser.subscribe(
            (data) => {
                this.currentUser = data;
                this.tables = this.globalsService.accountModalTables[this.currentUser.usersLanguage];
            }
        );
    }

    public navigationLinkHandler(event: Event, index: number): void {
        event.stopPropagation();
        this.router.navigate([this.tables[index][`linkRoute`]]).then();  // TODO Log where client went
    }

}
