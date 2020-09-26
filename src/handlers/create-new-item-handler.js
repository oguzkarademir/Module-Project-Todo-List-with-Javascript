
import { logger } from '../../lib/logger.js';
import { List } from '../list-class.js';

export const createNewItemHandler = (event) => {
  
  event.preventDefault();

  const newInput = event.target[0].value;
  if(newInput === '') {
    alert('please enter some words');
    return;
  }
  const newList = new List(event.target.value);

  newList.state = {
    text: newInput
  };
  const renderedNewItem = newList.renderItem(newList.state);
  
  event.target.parentElement.nextSibling
    .appendChild(renderedNewItem);

  logger.push({
    action: 'create new list',
    event,
    newList,
    renderedNewItem
  });

};
