import calculator from './calculator';
import logger from './logger';

import path from './redux.png';

const { arr, plus } = calculator(1, 2, 3, 4, 5, 6);
const { log } = logger();

log(plus(arr));

const img = document.createElement('img');
img.src = path;
document.body.appendChild(img);
