import TypeIt from 'typeit-react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <TypeIt
        options={{
          loop: true,
          strings: ['Loading...'],
        }}
      />
    </div>
  )
}

export default Loading
