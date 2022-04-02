const Header = () => {
  return (
    <header
      h="16"
      w="full"
      leading="16"
      px="16"
      font="bold"
      text="2xl"
      shadow="sm"
      absolute="~"
      top="0"
    >
      <div relative="~">
        <span text="transparent" bg="clip-text gradient-to-r" from="cyan-500" to="blue-500">
          IsMe
        </span>
        <span absolute="~" text="xs " top="4">
          renzp94
        </span>
      </div>
    </header>
  )
}

export default Header
