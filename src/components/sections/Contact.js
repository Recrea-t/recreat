import React from "react"
import {Link as GatsbyLink} from 'gatsby'

import {Flex, Box, Text, Link, Heading, VStack} from '@chakra-ui/react'
import {FormControl, Input, Textarea, Checkbox, Button} from '@chakra-ui/react'

const ContactForm = () => {
	return (
		<form>
			<FormControl>
				<Input type="text" variant="flushed" placeholder="nom" />
				<Input type="email" variant="flushed" placeholder="correu electrònic" />
				<Textarea variant="flushed" placeholder="missatge" />
				<Checkbox size="sm">
					He llegit i accepto la
					<Link to="politica-de-privacitat" title="Política de privacitat" as={GatsbyLink} >política de privacitat</Link> i accepto
					el tractament de les meves dades personals per a l'enviament
					d'informació que respongui a la consulta que he plantejat.
				</Checkbox>
			</FormControl>
			<Button variant="link" type="submit">Enviar</Button>
		</form>
	)
}

const Contact = (props) => {
	return (
		<Box
			id="contacte"
			w="full"
			pt={8}
			bg="mangoTango.500"
			color="white">
			<Heading
				mb={8}
				textAlign="center"
				fontSize="4xl"
				fontWeight="normal"
				textTransform="uppercase">Contacte</Heading>
			<Flex
				align={["center", "center", "center", "center"]}
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				maxW="1200px"
				mx="auto">
				<Box>
					<Text>
						Tens una idea, una necessitat, un dubte, una proposta? Escriu-nos o visita'ns a l'espai de coworking d'Esterri d'Àneu
					</Text>
					<ContactForm />
				</Box>
				<VStack spacing={4}>
				</VStack>
			</Flex>
		</Box>
	)
}

export default Contact
