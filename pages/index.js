import { useCallback } from 'react'
import { useColorMode, Button, Box, Link } from 'theme-ui'

const Index = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggle = useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }, [colorMode])

  return <Box sx={{px: [4], py: [4]}}>
    <Box sx={{fontSize: [5]}}>blog</Box>
    <Link sx={{fontSize: [3]}} href='/demos'>demos</Link>
    <Button onClick={toggle}>Toggle theme</Button>
  </Box>
}

export default Index