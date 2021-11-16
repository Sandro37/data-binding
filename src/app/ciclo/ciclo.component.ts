import { 
  Component,
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() valorInicial: number = 10;

  constructor() { 
    this.log("constructor");
  }

  ngOnInit(): void {
    this.log("onInit");
  }
  ngOnDestroy() {
    this.log("OnDestroy");
  }
  ngOnChanges() {
    this.log("onChange");
  }

  ngDoCheck() {
    this.log("doCheck");
  }
  ngAfterContentChecked(){
    this.log("ngAfterContentChecked");
  }
  ngAfterContentInit(){
    this.log("ngAfterContentInit");
  }
  ngAfterViewInit(){
    this.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    this.log("ngAfterViewChecked");
  }

  private log(hook: string){
    console.log(hook);
  }
}
