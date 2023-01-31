import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('nav') nav !: ElementRef<HTMLElement>;
  readonly breakpoint = 769;
  @HostListener('window:resize')
  onResize(){
    if(this.menuIsCollapsed){
      this.collapseMenu();
    } else {
      this.expandMenu();
    }
  }

  @ViewChild('navlist') navList!: ElementRef<HTMLUListElement>;
  ngAfterViewInit(){
    this.expandMenu();
  }


  menuIsCollapsed:boolean = false;

  menuIsHorizontal = ():boolean => {
    return window.innerWidth >= this.breakpoint;
  }

  getExpandedMenuWidth = ():number => {
    return this.navList.nativeElement.scrollWidth;
  }
  setMenuWidth = (width:number):void => {
    this.navList.nativeElement.style.width = width + 'px';
  }

  getExpandedMenuHeight = ():number => {
    return this.navList.nativeElement.scrollHeight;
  }
  setMenuHeight = (height:number):void => {
    this.navList.nativeElement.style.height = height + 'px';
  }

  expandMenu= ():void => {
    if(this.menuIsHorizontal()){
      const contentWidth = this.getExpandedMenuWidth();
      this.setMenuWidth(contentWidth);
      this.setMenuHeight(0);
    } else {
      const contentHeight = this.getExpandedMenuHeight();
      this.setMenuHeight(contentHeight);
      this.setMenuWidth(0);
    }
    this.menuIsCollapsed = false;
  }
  collapseMenu = () => {
    if(this.menuIsHorizontal()){
      this.setMenuWidth(0);
    } else {
      this.setMenuHeight(0);
    }
    this.menuIsCollapsed = true;
  }
  onMenuClick = () => {
    if(this.menuIsCollapsed){
      this.expandMenu();
    } else {
      this.collapseMenu();
    }
  }
}
