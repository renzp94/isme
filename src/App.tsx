import Loading from './components/Loading'
import routes from './routes'
import { toggleDark } from './utils/tools'

function App() {
  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true'
    toggleDark(isDark)
  }, [])
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
}

export default App
