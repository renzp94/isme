import Loading from './components/Loading'
import routes from './routes'

function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
}

export default App
