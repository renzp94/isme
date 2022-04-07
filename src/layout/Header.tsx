import { toggleDark } from '@/utils/tools'

const Header = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true')

  const onToggleDark = () => {
    toggleDark(!isDark)
    localStorage.setItem('isDark', JSON.stringify(!isDark))
    setIsDark(!isDark)
  }

  return (
    <header className="flex items-center justify-between w-full px-6 sticky top-0 bg-zinc-50 text-xs lg:rounded-lg dark:bg-zinc-900">
      <Link
        to="/"
        className="h-12 flex items-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold"
      >
        IsMe
      </Link>
      <div className="flex items-center text-sm">
        <a
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white no-underline"
          href="https://codebook.vercel.app"
          target="_blank"
        >
          博客
        </a>
        <a
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white no-underline ml-4"
          href="https://github.com/renzp94"
          target="_blank"
        >
          GitHub
        </a>
        {isDark ? (
          <svg
            className="inline-block text-base text-gray-400 hover:text-gray-900 dark:hover:text-white ml-4 cursor-pointer"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={onToggleDark}
          >
            <path
              fill="currentColor"
              d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407l-1.79 1.79l-1.407-1.408zm-1.8 15.115l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41l1.79-1.8l-1.41-1.41z"
            ></path>
          </svg>
        ) : (
          <svg
            className="inline-block text-base text-gray-400 hover:text-gray-900 dark:hover:text-white ml-4 cursor-pointer"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            onClick={onToggleDark}
          >
            <path
              fill="currentColor"
              d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
            ></path>
          </svg>
        )}
      </div>
    </header>
  )
}

export default Header
