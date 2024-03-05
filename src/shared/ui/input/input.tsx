import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { memo } from 'react'

type InputProps = ChakraInputProps & {
  label: string
  helperText?: string
  error?: string
}
export const Input = memo((props: InputProps) => {
  const { label, helperText, error, ...otherProps } = props

  return (
    <FormControl variant="floating" id={props.name}>
      <ChakraInput
        fontSize={20}
        placeholder=" "
        variant={'primary'}
        {...otherProps}
      />
      <FormLabel>{label}</FormLabel>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
})
