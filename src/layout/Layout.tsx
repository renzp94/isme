import Header from './Header'

const Layout = () => {
  return (
    <section>
      <Header />
      <main px="16" py="4">
        <Outlet />
      </main>
    </section>
  )
}

export default Layout
