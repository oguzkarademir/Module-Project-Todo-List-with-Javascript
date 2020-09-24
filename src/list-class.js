'use strict';

import { logger } from '../lib/logger.js';

// This list class is here for example.
//  delete it!  your project does not need to be a list

export class List {

  state = {
    name: '',
    text: ''
  };

  constructor(name) {
    this.state.name = name;
  };

  printState() {
    console.log(this.state.name);

    logger.push({
      action: `click button`,
      name: this.state.name
    });
  };

  renderList(obj) {
    const divEl = document.createElement('div');
    divEl.id = 'div-list';

    const divEl2 = document.createElement('div');
    divEl2.id = 'list-header';
    const h2El = document.createElement('h2');
    h2El.id = 'nameoflist';
    h2El.innerText = obj.name;
    const buttonEl = document.createElement('button');
    buttonEl.id = 'delete-list';
    buttonEl.innerText = 'X';
    buttonEl.addEventListener("click", this.printState.bind(this));
    divEl2.appendChild(h2El);
    divEl2.appendChild(buttonEl);

    const divEl3 = document.createElement('div');
    divEl3.id = 'div-add-todos';
    const formEl = document.createElement('form');
    formEl.id = 'form-add-todos';
    formEl.addEventListener("submit", this.printState.bind(this));
    const inputEl = document.createElement('input');
    inputEl.placeholder = 'Enter your todo';
    inputEl.id = 'input-add-todos';
    const buttonEl2 = document.createElement('button');
    buttonEl2.id = 'newtodo';
    buttonEl2.innerText = 'Add Todo';
    formEl.appendChild(inputEl);
    formEl.appendChild(buttonEl2);
    divEl3.appendChild(formEl);

    const divEl4 = document.createElement('div');
    divEl4.id = 'todo';

    divEl.appendChild(divEl2);
    divEl.appendChild(divEl3);
    divEl.appendChild(divEl4);
    return divEl;
  };

  renderItem(obj){

    const ulEl = document.createElement('ul');
    ulEl.className = "ul-item";

    const checkBoxEl = document.createElement('input');
    checkBoxEl.type = 'checkbox';
    checkBoxEl.id = 'checkbox';

    const liEl = document.createElement('li');
    liEl.style.listStyle = 'none';
    liEl.className = 'item-text';
    liEl.innerHTML = obj.text;

    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = '❌';
    buttonEl.id = 'remove-item';

    ulEl.appendChild(checkBoxEl);
    ulEl.appendChild(liEl);
    ulEl.appendChild(buttonEl);
    return ulEl;
  }

  completing(event) {

    const list = event.nextSibling;
    if (event.checked) {
      list.style.textDecorationLine = 'line-through';
    } else {
      list.style.textDecorationLine = 'none';
    }
    
  }
  remove(target) {
    if(target.id === 'delete-list') {
      target.parentElement.parentElement.remove();
    } else if (target.id === 'remove-item') {
      target.parentElement.remove();
    }
  }
};
