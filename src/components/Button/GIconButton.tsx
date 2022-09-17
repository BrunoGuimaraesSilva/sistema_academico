import {  IconButton, IconButtonProps } from '@chakra-ui/react'
export const GIconButton: React.FC<IconButtonProps> = ({ children, ...rest }) => {
  return <IconButton {...rest}>{children}</IconButton>
}
