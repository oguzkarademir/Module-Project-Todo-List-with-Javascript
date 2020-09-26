import { logger } from '../../lib/logger';
import { List } from '../list-class';

export const isCompleted = (event) => {


    const userTarget =event.target;
    const newList = new List(event.target.value);
    
    if(userTarget.type !== 'checkbox') {
        return;
    }

    newList.completing(userTarget);

    logger.push({
        action: 'toggle checkbox',
        event: event,
        state: newList.state
    });
    console.log(logger.logs);
}