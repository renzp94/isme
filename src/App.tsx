import Loading from './components/Loading'
import routes from './routes'
import { getCurrentDark, toggleDark } from './utils/tools'

function App() {
  useEffect(() => {
    const isDark = getCurrentDark()
    toggleDark(isDark)
  }, [])
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
}

export default App
