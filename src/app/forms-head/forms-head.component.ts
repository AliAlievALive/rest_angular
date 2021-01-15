import {Component, OnInit} from '@angular/core';
import {FormsHead} from '../models/FormsHead';

@Component({
  selector: 'app-forms-head',
  templateUrl: './forms-head.component.html',
  styleUrls: ['./forms-head.component.css']
})
export class FormsHeadComponent implements OnInit {
  head: FormsHead = {};

  constructor() {
  }

  ngOnInit(): void {
    this.head.title = 'Журнал выхода транспорта';
    this.head.buttons = [
      {label: 'Создать', command: 'create'},
      {label: 'Редактировать', command: 'edit'},
      {label: 'Удалить', command: 'delete'},
      {label: 'Копировать', command: 'copy'}
    ];
  }

  commandRoute(command: string): void {
    switch (command) {
      case 'create':
        this.create();
        break;
      case 'edit':
        this.edit();
        break;
      case 'delete':
        this.delete();
        break;
      case 'copy':
        this.copy();
        break;
    }
  }

  create(): void {
    console.log('in create func');
  }

  edit(): void {
    console.log('in edit func');
  }

  delete(): void {
    console.log('in delete func');
  }

  copy(): void {
    console.log('in copy func');
  }
}
