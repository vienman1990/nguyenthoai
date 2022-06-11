import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { store } from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);