import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  data: any

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.getParams()
    });
  }

  getParams() {
    const data = localStorage.getItem('data')
    if (data) {
      this.data = JSON.parse(data).reverse()
    } else {
      this.data = []
      localStorage.setItem('data', JSON.stringify([]))
    }
  }

  ngOnInit(): void {
    this.getParams()
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl(''),
  });

  onFileSelected() {
    // @ts-ignore
    let file = document.getElementById('file').files[0]
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => this.form.controls['file'].setValue(reader.result);
  }

  apply() {
    let data: any = localStorage.getItem('data')
    data = JSON.parse(data)
    data.push(this.form.value)
    localStorage.setItem('data', JSON.stringify(data))
    this.dialogRef.close()
  }
}
