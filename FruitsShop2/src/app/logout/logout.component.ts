import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(

    private router: Router, private loginService: LoginService

  ) {

    loginService.logout();
    this.router.navigate(['Login']);
  }
  ngOnInit() {
  }

}
