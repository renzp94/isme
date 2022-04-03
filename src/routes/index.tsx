import LazyLoadSpin from '@/components/LazyLoadSpin'
const Layout = lazy(() => import('@/layout/Layout'))
const Home = lazy(() => import('@/pages/Home'))

export default [
  {
    path: '/',
    element: (
      <LazyLoadSpin>
        <Layout />
      </LazyLoadSpin>
    ),
    children: [
      {
        index: true,
        element: (
          <LazyLoadSpin>
            <Home />
          </LazyLoadSpin>
        ),
      },
    ],
  },
]
