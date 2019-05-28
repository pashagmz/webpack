import React from 'react'
import {render} from 'react-dom'
import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.component'
import './css/index.css'
import './css/header.css'
import './less/index.less'
import './scss/index.scss'
import App from './App'

console.log('Config key:', config.key);

const service = new AppService('Hello world!');
service.log();

render(<App></App>, document.getElementById("app"));
