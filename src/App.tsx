import { Suspense } from 'react'
import Loading from './components/Loading'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
}

export default App
