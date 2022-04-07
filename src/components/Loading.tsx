import TypeIt from 'typeit'

const Loading = () => {
  useEffect(() => {
    const typeit = new (TypeIt as any)('.loading', {
      strings: ['Loading'],
      loop: true,
    })
    typeit.go()
  }, [])
  return (
    <div className="flex items-center justify-center h-full">
      <div className="loading"></div>
    </div>
  )
}

export default Loading
