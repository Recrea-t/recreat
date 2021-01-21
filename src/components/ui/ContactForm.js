import React from "react"
import { Link as GatsbyLink } from 'gatsby'

import { VStack, Link, FormControl, Input, Textarea, Checkbox, Button } from '@chakra-ui/react'

const ContactForm = () => {
    const inputStyles = {
        color: "white",
        fontWeight: "hairline",
        textTransform: "uppercase"
    }

    return (
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <VStack spacing={4} >

                <FormControl>
                    <Input type="text" variant="flushed" placeholder="nom" _placeholder={inputStyles} />
                    <Input type="email" variant="flushed" placeholder="correu electrònic" _placeholder={inputStyles} />
                    <Textarea variant="flushed" h={40} placeholder="missatge" _placeholder={inputStyles} />
                    <Checkbox size="sm">
                        He llegit i accepto la <Link to="politica-de-privacitat" title="Política de privacitat" as={GatsbyLink} >política de privacitat</Link> i accepto el tractament de les meves dades personals per a l'enviament d'informació que respongui a la consulta que he plantejat.
				</Checkbox>
                </FormControl>

                <Button
                    variant="link"
                    type="submit"
                    color="white"
                    alignSelf="flex-end"
                    variant="btn"
                >Enviar</Button>
            </VStack>
        </form >
    )
}

export default ContactForm
