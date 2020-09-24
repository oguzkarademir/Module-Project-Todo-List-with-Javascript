'use strict';

import { logger } from '../../lib/logger.js';
import { List } from '../list-class.js';

export const removeItem = (event) => {
  
  const newInput = event.target;
  const newList = new List(event.target.value);

  if (newInput.id !== 'remove-item') {
      return;
  }

  newList.remove(newInput);

  logger.push({
    action: 'create new list',
    event,
    newList,
    renderedNewItem
  });

};
