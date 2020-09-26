'use strict';

import { createNewListHandler } from './handlers/create-new-list'
import { createNewItemHandler } from './handlers/create-new-item-handler'
import { isCompleted } from './handlers/completed'
import { removeList } from './handlers/remove-list.js'
import { removeItem } from './handlers/remove-item.js'


debugger;
document.getElementById('form-form')
  .addEventListener("submit", createNewListHandler);
document.getElementById('newlist')
  .addEventListener('click', createNewListHandler);

document.getElementById('row')
 .addEventListener('submit', createNewItemHandler);

 document.getElementById('row')
 .addEventListener('click', isCompleted);

 document.getElementById('row')
 .addEventListener('click', removeList);

 document.getElementById('row')
 .addEventListener('click', removeItem);