import TypeIt from 'typeit'
import EnuCard from './EnuCard'

const UserCard = () => {
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
    <EnuCard className="h-230px w-[calc(w-full - mx-6)]  mx-6 lg:(h-315px w-70 mx-0)" title="Renzp">
      <div className="self-introduction leading-7"></div>
    </EnuCard>
  )
}

export default UserCard
