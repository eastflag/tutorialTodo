import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-comment.dialog',
  templateUrl: './comment.dialog.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CommentDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<any>) { }

}
