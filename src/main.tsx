import { createRoot } from 'react-dom/client'
import 'virtual:windi.css'
import './index.css'
import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
