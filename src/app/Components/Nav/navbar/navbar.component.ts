import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  id: string;
  islogin: boolean;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.id = localStorage.getItem('token');
    if (this.id !== null) {
      this.islogin = true;
    } else {
      this.islogin = false;
    }
  }
  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
    window.location.href = '/login';
  }
}
