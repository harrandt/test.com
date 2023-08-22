import { RouterProvider } from 'react-router-dom';
import './App.css';
import { appRouter } from './app-router';
 
import '../i18n';
 

function App() {
    return (
        
                <div id="app">
                    <RouterProvider router={appRouter} />
                </div>
          
    );
}

export default App;
