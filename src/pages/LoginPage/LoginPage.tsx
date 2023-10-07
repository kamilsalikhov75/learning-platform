import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthHeader } from "@/widgets/Header";
import { $user, login } from "@/features/user";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { Field, Form, Formik } from "formik";

const loginForm = [
  {
    name: "email",
    placeholder: "Email",
    required: true,
  },
  {
    name: "password",
    placeholder: "Пароль",
    required: true,
    type: "password",
  },
];

const LoginPage = () => {
  const initialValues = { email: "", password: "" };
  const { t } = useTranslation();
  const { isAuth } = useStore($user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <Flex w="100vw" h="100vh" flexDirection="column" p="0 10px">
      <AuthHeader />
      <Center justifyContent="center" h="100%">
        <Formik
          onSubmit={(values) => {
            login(values);
          }}
          initialValues={initialValues}
        >
          {() => (
            <Form>
              <FormControl w="500px">
                <FormLabel marginBottom="50px">
                  <Heading>{t("Авторизация")}</Heading>
                </FormLabel>
                {loginForm.map((item) => (
                  <Field key={item.name} name={item.name}>
                    {({ field }: { field: object }) => (
                      <FormControl>
                        <Input
                          {...field}
                          variant="flushed"
                          placeholder={t(item.placeholder)}
                          marginBottom="20px"
                          required={item.required}
                          type={item.type}
                        />
                      </FormControl>
                    )}
                  </Field>
                ))}
                <Button
                  w="100%"
                  type="submit"
                  marginBottom="20px"
                  borderRadius="20px"
                >
                  {t("Войти")}
                </Button>
                <Button borderRadius="20px" as={Link} to={"/register"} w="100%">
                  {t("Регистрация")}
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
      </Center>
    </Flex>
  );
};

export { LoginPage };
