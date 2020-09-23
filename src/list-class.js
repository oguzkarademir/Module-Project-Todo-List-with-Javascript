'use strict';

import { logger } from '../lib/logger.js';

// This list class is here for example.
//  delete it!  your project does not need to be a list

export class List {

  state = {
    name: ''
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

  render() {
    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = this.state.name;
    buttonEl.addEventListener('click', this.printState.bind(this));
    return buttonEl;
  };
};
