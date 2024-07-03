/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';

// Composables
import { createApp } from 'vue';
// Components
import App from './App.vue';
import '@/assets/header.css';


const app = createApp(App);
app.mount('#app');

registerPlugins(app);
