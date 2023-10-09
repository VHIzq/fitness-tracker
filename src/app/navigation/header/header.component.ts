import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuth$!: Observable<boolean>;
  authSubscription!: Subscription;

  @Output() sideNavToggle = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.setupHeaderAuth();
  }

  public onToggleSidenav() {
    this.sideNavToggle.emit();
  }

  setupHeaderAuth() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onLogout() {
    this.authService.logout();
  }
}
