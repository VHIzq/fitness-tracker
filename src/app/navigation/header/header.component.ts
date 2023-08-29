import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  authSubscription!: Subscription;

  @Output() sideNavToggle = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;

    });
  }

  /**
   * onToggleSidenav
   */
  public onToggleSidenav() {
    this.sideNavToggle.emit();
  }
}
