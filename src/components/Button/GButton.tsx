import { Button, ButtonProps } from '@chakra-ui/react'
export const GButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}
