import Header from './Header'

const Layout = () => {
  return (
    <section className="lg:(w-3/4 mx-auto)">
      <Header />
      <main className="my-6 h-[calc(100%-96px)]">
        <Outlet />
      </main>
    </section>
  )
}

export default Layout
