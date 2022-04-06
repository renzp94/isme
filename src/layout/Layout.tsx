import Header from './Header'

const Layout = () => {
  return (
    <section>
      <Header />
      <main className=" px-6 lg:px-20 lg:(w-2/4 mx-auto)">
        <Outlet />
      </main>
      <div className="fireworks" style={{ left: '10%', top: '10%' }} />
      <div className="fireworks" style={{ left: '35%', top: '35%', animationDelay: '-0.4s' }} />
      <div className="fireworks" style={{ left: '60%', top: '23%', animationDelay: '-1.7s' }} />
      <div className="fireworks" style={{ left: '70%', top: '8%', animationDelay: '-3.1s' }} />
    </section>
  )
}

export default Layout
