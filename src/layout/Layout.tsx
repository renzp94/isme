import Header from './Header'

const Layout = () => {
  return (
    <section className="lg:(w-3/4 mx-auto)">
      <Header />
      <main className="p-6 lg:(my-6 h-[calc(100%-96px)] rounded-lg) h-[calc(100%-48px)] bg-neutral-50 dark:bg-zinc-900">
        <Outlet />
      </main>
    </section>
  )
}

export default Layout
