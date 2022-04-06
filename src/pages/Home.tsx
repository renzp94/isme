import TypeIt from 'typeit-react'

const Home = () => {
  return (
    <div>
      <TypeIt
        getAfterInit={(instance) => {
          setTimeout(() => {
            instance.destroy()
          }, 8600)
          return instance
        }}
      >
        <h1 className="text-2xl font-bold">IsMe</h1>
        <br />
        <div>你好，我是renzp94，</div>
        <div>一个没有大梦想但心存小理想，</div>
        <div>喜欢研究新潮技术的终身学习小文艺IT男。</div>
        <div>溶于血液里的喜欢才叫做热爱，</div>
        <div>期待与你相会，相知。</div>
      </TypeIt>
    </div>
  )
}

export default Home
