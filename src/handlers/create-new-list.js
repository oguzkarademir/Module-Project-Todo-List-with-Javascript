'use strict';

import { logger } from '../../lib/logger.js';
import { List } from '../list-class.js';

export const createNewListHandler = (event) => {
  
  event.preventDefault();

  const newInput = document.getElementById('list-input').value;
  const newList = new List(event.target.value);

  newList.state = {
    name: newInput
  };
  const renderedNewList = newList.renderList(newList.state);
  

  document.getElementById('row')
    .appendChild(renderedNewList);

  logger.push({
    action: 'create new list',
    event,
    newList,
    renderedNewList
  });

};

