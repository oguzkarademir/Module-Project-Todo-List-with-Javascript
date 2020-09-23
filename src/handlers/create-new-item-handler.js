'use strict';

import { logger } from '../../lib/logger.js';
import { List } from '../list-class.js';

export const createNewItemHandler = (event) => {
  
  event.preventDefault();

  const newInput = document.getElementById('input-add-todos').value;
  const newList = new List(event.target.value);

  newList.state = {
    text: newInput
  };
  const renderedNewItem = newList.renderItem(newList.state);
  
  const todo = event.target.parentElement.parentElement.children[2]
    .appendChild(renderedNewItem);

  logger.push({
    action: 'create new list',
    event,
    newList,
    renderedNewItem
  });

};
