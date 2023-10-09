import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  isAuth$!: Observable<boolean>;

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.setupNavbarAuth();
  }

  onClose() {
    this.closeSidenav.emit();
  }

  public onLogout() {
    this.onClose();
    this.authService.logout();
  }

  setupNavbarAuth() {
    this.store.select(fromRoot.getIsAuth);
  }
}
