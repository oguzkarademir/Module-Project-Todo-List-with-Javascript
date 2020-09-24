'use strict';

import { createNewListHandler } from './handlers/create-new-list.js'
import { createNewItemHandler } from './handlers/create-new-item-handler.js'
import { isCompleted } from './handlers/completed.js'

debugger;
document.getElementById('form-form')
  .addEventListener("submit", createNewListHandler);
document.getElementById('newlist')
  .addEventListener('click', createNewListHandler);

document.getElementById('row')
 .addEventListener('submit', createNewItemHandler);

 document.getElementById('row')
 .addEventListener('click', isCompleted);