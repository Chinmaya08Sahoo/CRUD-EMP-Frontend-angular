import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'emp-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup
  user: any

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.createFormGroup();
  }

  ngOnInit(): void {

  }

  createFormGroup() {
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"), Validators.required]),
      role: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
      age: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })
  }


  onSubmit() {
    this.user = this.userForm.value;
    this.http.post<any>('http://localhost:6500/USER/ADD', this.user).subscribe(data => {
        if(data.success) {
          this.router.navigate(['/users'])
        }
    })
  }

}
