import TypeIt from 'typeit'

const Home = () => {
  useEffect(() => {
    const typeit = new (TypeIt as any)('.self-introduction', {
      strings: [
        '你好，我是renzp94,',
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
      <h1 className="text-2xl font-bold mb-8">Renzp94</h1>
      <div className="self-introduction leading-8"></div>
    </div>
  )
}

export default Home
