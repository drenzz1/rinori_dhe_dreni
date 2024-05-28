import {Component, OnInit} from '@angular/core';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ThemeService} from "../../services/theme.service";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatIcon,
    MatNavList,
    MatListItem,
    MatSlideToggle,
    MatDrawer,
    NgStyle
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  selected = 'Dashboard';
  colors: any;

  dataItems = [
    { title: 'Manage Team', icon: 'people' },
    { title: 'Contacts Information', icon: 'contacts' },
    { title: 'Invoices Balances', icon: 'receipt' }
  ];

  pageItems = [
    { title: 'Profile Form', icon: 'person' },
    { title: 'Calendar', icon: 'calendar_today' },
    { title: 'FAQ Page', icon: 'help_outline' }
  ];

  chartItems = [
    { title: 'Bar Chart', icon: 'bar_chart' },
    { title: 'Pie Chart', icon: 'pie_chart' },
    { title: 'Line Chart', icon: 'timeline' },
    { title: 'Geography Chart', icon: 'map' }
  ];

  clubItems = [
    { title: 'Create Club', icon: 'sports_soccer' },
    { title: 'Manage Clubs', icon: 'sports_soccer' },
    { title: 'Create League', icon: 'sports_soccer' },
    { title: 'Manage Leagues', icon: 'sports_soccer' }
  ];
  title: any;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.colors = this.themeService.getTokens();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  selectItem(title: string) {
    this.selected = title;
  }


}
