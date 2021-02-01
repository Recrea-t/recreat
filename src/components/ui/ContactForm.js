import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { motion } from "framer-motion";

import {
  VStack,
  Link,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

const MotionButton = motion.custom(Button);

const ContactForm = () => {
  const toast = useToast();

  const placeholderStyles = {
    color: "white",
    fontWeight: "hairline",
    textTransform: "uppercase",
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        conditions: false,
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contacte-web",
            ...values,
          }),
        })
          .then(() => {
            actions.resetForm();
            toast({
              title: "Missatge enviat.",
              description: "Aviat et respondrem.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          })
          .catch((error) => alert(error))
          .finally(() => actions.setSubmitting(false));
      }}
      validate={(values) => {
        const errors = {};
        if (!values.conditions) {
          errors.conditions = "Has d'acceptar la política de privacitat.";
        }
        return errors;
      }}
    >
      {(props) => (
        <Form
          name="contacte-web"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />

          <VStack spacing={4}>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    variant="flushed"
                    focusBorderColor="dimGray.500"
                    placeholder="nom"
                    _placeholder={placeholderStyles}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    variant="flushed"
                    focusBorderColor="dimGray.500"
                    placeholder="correu electrònic"
                    _placeholder={placeholderStyles}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="message">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Textarea
                    {...field}
                    id="message"
                    variant="flushed"
                    h={40}
                    focusBorderColor="dimGray.500"
                    placeholder="missatge"
                    _placeholder={placeholderStyles}
                    resize="none"
                  />
                </FormControl>
              )}
            </Field>

            <Field name="conditions">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.conditions && form.touched.conditions}
                >
                  <Checkbox
                    {...field}
                    id="conditions"
                    size="sm"
                    colorScheme="dimGray"
                  >
                    He llegit i accepto la{" "}
                    <Link
                      fontWeight="semibold"
                      to="politica-de-proteccio-de-dades"
                      title="Política de protecció de dades personals"
                      as={GatsbyLink}
                    >
                      política de protecció de dades
                    </Link>{" "}
                    i accepto el tractament de les meves dades personals per a
                    l'enviament d'informació que respongui a la consulta que he
                    plantejat.
                  </Checkbox>
                  <FormErrorMessage>{form.errors.conditions}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <MotionButton
              variant="custom-link"
              colorScheme="white"
              alignSelf="flex-end"
              type="submit"
              isLoading={props.isSubmitting}
              loadingText="Enviant"
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </MotionButton>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
