import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'emp-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup
  user: any
  userId: any = ''

  constructor(private fb: FormBuilder, private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.createFormGroup();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.userId = params['userId']
      this.getUserDetails();
    })
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
    this.user.id = this.userId;
    console.log('user----', this.user)
    this.http.post('http://localhost:6500/USER/UPDATE', this.user).subscribe( (data: any) => {
      if(data.success) {
        this.router.navigate(['/users'])
      }
    })
  }

  getUserDetails() {
    this.http.get(`http://localhost:6500/USER?userId=${this.userId}`).subscribe( (response: any) => {
      if(response.success) {
        this.userForm.controls['name'].setValue(response.resultObj.name);
        this.userForm.controls['email'].setValue(response.resultObj.email);
        this.userForm.controls['phone'].setValue(response.resultObj.phone);
        this.userForm.controls['age'].setValue(response.resultObj.age);
        this.userForm.controls['address'].setValue(response.resultObj.address);
        this.userForm.controls['role'].setValue(response.resultObj.role);
      }
    })
  }

}
