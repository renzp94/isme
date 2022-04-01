import TypeIt from 'typeit-react'

const Home = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <TypeIt
        options={{
          strings: ['A: 你是谁?', 'Me: Is me. I am renzp94.'],
        }}
      />
    </div>
  )
}

export default Home
