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
import { $user, register } from "@/features/user";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field } from "formik";
import { RegisterRequest } from "@/shared/api/types";
import { useEffect } from "react";
import { useStore } from "effector-react";

const registerForm = [
  {
    name: "firstName",
    placeholder: "Имя",
    required: true,
  },
  {
    name: "lastName",
    placeholder: "Фамилия",
    required: true,
  },
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
  {
    name: "telegram",
    placeholder: "Ник в телеграм",
  },
  {
    name: "github",
    placeholder: "Ник в Github",
  },
];

const RegisterPage = () => {
  const { t } = useTranslation();
  const initialValues: RegisterRequest = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
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
            register(values);
          }}
          initialValues={initialValues}
        >
          {() => (
            <Form>
              <FormControl w="500px">
                <FormLabel marginBottom="50px">
                  <Heading>{t("Регистрация")}</Heading>
                </FormLabel>
                {registerForm.map((item) => (
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
                  {t("Зарегистрироваться")}
                </Button>
                <Button borderRadius="20px" as={Link} to={"/login"} w="100%">
                  {t("Авторизация")}
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
      </Center>
    </Flex>
  );
};

export { RegisterPage };
