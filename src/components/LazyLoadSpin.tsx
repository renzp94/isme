import type { ReactElement } from 'react'
import { Suspense } from 'react'
import Loading from './Loading'

const LazyLoadSpin = ({ children }: { children: ReactElement }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default LazyLoadSpin
