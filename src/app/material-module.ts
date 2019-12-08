import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
    ]
})
export class MaterialModule {}
