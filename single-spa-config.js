import { registerApplication, start } from 'single-spa';
const hashPrefix = prefix => location => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/');

registerApplication('seguridad', () => import('./src/main.env.ts'), hashPrefix('/'));

start();