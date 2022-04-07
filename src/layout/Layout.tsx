import Header from './Header'

const Layout = () => {
  return (
    <section>
      <Header />
      <main className=" px-6 lg:px-20 lg:(w-2/4 mx-auto) h-[calc(100%-48px)]">
        <Outlet />
      </main>
    </section>
  )
}

export default Layout
