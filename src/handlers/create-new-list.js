'use strict';

import { logger } from '../../lib/logger.js';
import { List } from '../list-class.js';

export const createNewListHandler = (event) => {

  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode !== 13) {
    return;
  }

  const newList = new List(event.target.value);

  const renderedNewList = newList.render();


  document.getElementById('lists')
    .appendChild(renderedNewList);

  logger.push({
    action: 'create new list',
    event,
    newList,
    renderedNewList
  });

};
