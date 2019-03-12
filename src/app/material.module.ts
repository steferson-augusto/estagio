import { NgModule } from '@angular/core'
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule,
    MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatGridListModule,
    MatMenuModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatSelectModule,
    MatNativeDateModule, MatDividerModule
} from '@angular/material'

@NgModule({
    imports: [
        MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule,
        MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatGridListModule,
        MatMenuModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatSelectModule,
        MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule,
        MatNativeDateModule, MatDividerModule
    ],
    exports: [
        MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule,
        MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatGridListModule,
        MatMenuModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatSelectModule,
        MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule,
        MatNativeDateModule, MatDividerModule
    ]
})

export class MaterialModule {}
