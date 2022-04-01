import { lazy } from 'react'
import LazyLoadSpin from '@/components/LazyLoadSpin'
const Home = lazy(() => import('@/pages/Home'))

export default [
  {
    path: '/',
    element: (
      <LazyLoadSpin>
        <Home />
      </LazyLoadSpin>
    ),
  },
]
