export const toggleDark = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const getCurrentDark = () => {
  const dark = localStorage.getItem('isDark')
  return dark ? dark === 'true' : window.matchMedia('(prefers-color-scheme:dark)').matches
}
