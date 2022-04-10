import EnuCard from '@/components/EnuCard'
import UserCard from '@/components/UserCard'

const Home = () => {
  return (
    <div>
      <div className="lg:flex">
        <UserCard />
        <EnuCard className=" w-[w-full - mx-6] mt-6 mx-6 lg:(w-full mt-0 ml-8 mr-0)" title="GitHub">
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <a href="https://github.com/renzp94/citc" target="_blank">
              <EnuCard className="h-full" title="citc">
                <div className="text-xs">一款基于Webpack5的React脚手架</div>
              </EnuCard>
            </a>
            <a href="https://github.com/renzp94/build-info-webpack-plugin" target="_blank">
              <EnuCard title="build-info-webpack-plugin">
                <div className="text-xs">将打包信息注入客户端环境变量中的ebpack插件</div>
              </EnuCard>
            </a>
            <a href="https://github.com/renzp94/codebook" target="_blank">
              <EnuCard title="codebook">
                <div className="text-xs">基于SevlteKit开发的博客</div>
              </EnuCard>
            </a>
            <a href="https://github.com/renzp94/jsx-css-scoped-loader" target="_blank">
              <EnuCard title="jsx-css-scoped-loader">
                <div className="text-xs">在Jsx实现Css Scoped的webpack Loader</div>
              </EnuCard>
            </a>
          </div>
        </EnuCard>
      </div>
    </div>
  )
}

export default Home
