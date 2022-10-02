import { Field } from 'formik'
import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react'


const FormItem = ( { fieldName, placeholder, validateFunction=()=>{}, type} : { fieldName: string, placeholder: string, validateFunction?: Function, type: string}) => {
    return (
        <Field name={fieldName} validate={validateFunction}>
            {({ field, form }: any) => (
                <FormControl isInvalid={form.errors[fieldName] && form.touched[fieldName]}>
                    <Input type={type} {...field} placeholder={placeholder} _placeholder={{ color: '#1C5D65' }} focusBorderColor='#1C5D65' colorScheme={'teal'} variant='flushed'/>
                    <FormErrorMessage>{form.errors[fieldName]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
}

export default FormItem