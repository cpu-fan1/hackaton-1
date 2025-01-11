import './styles.css'
import { ContextMenu } from './menu'
import { AnalyticsClicksModule } from './modules/analytics-clicks.module'
import { VladilenModule } from './modules/vladilen.module'

  
const contextMenu = new ContextMenu('.menu');
const clickAnalitycs = new AnalyticsClicksModule ('clicks-analytics', 'Аналитика кликов (5 секунд)');
const vladilen = new VladilenModule ('vladilen', 'Полюбоваться Владиленом');

document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      contextMenu.open(event)
});

contextMenu.add(clickAnalitycs);
contextMenu.add(vladilen);


