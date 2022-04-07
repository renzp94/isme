import TypeIt from 'typeit'

const Home = () => {
  useEffect(() => {
    const typeit = new (TypeIt as any)('.self-introduction', {
      strings: [
        '你好，我是renzp,',
        '一个没有大梦想但心存小理想，',
        '喜欢研究新潮技术的终身学习小文艺IT男。',
        '溶于血液里的喜欢才叫做热爱，',
        '期待与你相会，相知。',
      ],
    })
    typeit.go()
    setTimeout(() => typeit.destroy(), 12000)
    return () => typeit.destroy()
  }, [])
  return (
    <div>
      <div className="lg:flex">
        <div className="p-6 h-245px w-[calc(w-full - mx-6)]  mx-6 neu-card-mini lg:(h-328px w-70 mx-0) ">
          <h1 className="text-2xl font-bold mb-6 text-center">Renzp</h1>
          <div className="self-introduction leading-7"></div>
        </div>
        <div className="p-6 neu-card-mini w-[w-full - mx-6] mt-6 mx-6 lg:(w-full mt-0 ml-8 mr-0)">
          <h1 className="text-2xl font-bold mb-6 text-center">GitHub</h1>
          <div className="self-introduction leading-8"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
