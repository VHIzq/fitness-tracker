import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  authSubscription!: Subscription;

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

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
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }
}