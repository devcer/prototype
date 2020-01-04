import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.scss']
})
export class DebuggerComponent implements OnInit {
  dummyObj = {
    name: 'Santosh',
    talk: 'Devtools'
  };
  values = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: null }, { value: '' }, { value: undefined }];
  constructor() { }

  ngOnInit() {
    debugger;
    this.sayHello();
    this.dummyObj.name ="fosscon";
    console.log(`Synchronous`);
    const filteredValues = this.values.map(item => item.value).filter(item => item !== '' || item !== null || item !== undefined);
    console.log(filteredValues);
    console.log(localStorage.getItem('name'));
    // setInterval(() => {
    //   console.log('Hello world');
    // }, 1000);
  }
  sayHello() {
    this.youSayHello();
  }
  youSayHello() {
    this.iCantHelloYou();
  }
  iCantHelloYou() {
    console.log('Fine, Here you go. Hellooooo!!!');
  }

}
