import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'emp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userslist: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getUserList()
  }

  onDelete(userId: any) {
    this.http.post('http://localhost:6500/USER/DELETE', {userId}).subscribe((data: any) => {
      if (data.success) {
        this.getUserList()
      }
    })
  }

  getUserList() {
    this.http.get('http://localhost:6500/USER/ALL').subscribe((data: any) => {
      if (data.success) {
        this.userslist = data.resultObj
      }
    })
  }

}
