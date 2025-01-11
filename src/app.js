import './styles.css'
import { ContextMenu } from './menu'

document.addEventListener('DOMContentLoaded', function () {    
    const contextMenu = new ContextMenu('.menu');
    // console.log(contextMenu);

    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      contextMenu.open(event)
  });
  contextMenu.add('1');
  contextMenu.add('2');
  contextMenu.add('3');

  });

