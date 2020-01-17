import './asyns.scss';
import { request } from './app';
import { renderPage } from './renderPage';

const page = new request(document.querySelector("body"), "http://localhost:3000/ads");
page.requstXhr();