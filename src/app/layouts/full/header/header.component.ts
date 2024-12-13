import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterModule } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {MatAnchor, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatBadge, MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgScrollbarModule, TablerIconsModule, MatIconModule, MatIconButton, MatToolbarModule, MatMenuModule, MatBadgeModule, MatAnchor],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();


}

