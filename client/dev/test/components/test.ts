import {Component} from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: 'test/templates/test.html',
  styleUrls: ['test/styles/test.css']
})
export class Test {
  name: string = `yo, I'm your component :D`;
}
