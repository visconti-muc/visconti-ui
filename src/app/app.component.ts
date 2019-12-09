import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AccountModalComponent } from './account/account-modal/account-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'client';
    accountDialogDisplayed: boolean;

    constructor(
        private el: ElementRef,
        private dialog: MatDialog,
        private router: Router
    ) {
        this.accountDialogDisplayed = false;
    }

    public expandMoreHandler(event: Event): void {
        event.stopPropagation();
        this.accountDialogDisplayed = !this.accountDialogDisplayed;
        const style = window.getComputedStyle(this.el.nativeElement.querySelector('.toolbar'), null);
        let right = +style.getPropertyValue('padding-right').replace('px', '');
        right += +style.getPropertyValue('margin-right').replace('px', '');
        this.openAccountDialog(style.getPropertyValue('height'), (right + 'px'));
    }

    public loginButtonHandler(event: Event): void {
        event.stopPropagation();
        this.router.navigate(['/account/login']).then(); // TODO: Logged page navigate out
    }

    public openAccountDialog(marginUp, marginRight): void {
        const dialogRef = this.dialog.open(AccountModalComponent, {
            height: 'auto',
            position: {
                top: marginUp,
                right: marginRight,
            },
            width: '25%', // '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(() => {
            this.accountDialogDisplayed = !this.accountDialogDisplayed;
        });
    }

}
