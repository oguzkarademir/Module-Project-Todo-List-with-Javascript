'use strict';

import { createNewListHandler } from './handlers/create-new-list.js'


debugger;
document.getElementById('form-form')
  .addEventListener("submit", createNewListHandler);
document.getElementById('newlist')
  .addEventListener('click', createNewListHandler);
