import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthHeader } from "../../components/Header/AuthHeader";
import { login } from "../../effector/user";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LoginPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({ email: "", password: "" });
  return (
    <Flex w="100vw" h="100vh" flexDirection="column" p="0 10px">
      <AuthHeader />
      <Center justifyContent="center" h="100%">
        <FormControl w="500px">
          <FormLabel marginBottom="50px">
            <Heading>{t("Авторизация")}</Heading>
          </FormLabel>
          <Input
            variant="flushed"
            type="email"
            placeholder="Email"
            marginBottom="20px"
            value={data.email}
            onChange={(event) =>
              setData((prev) => {
                const { password } = prev;
                return {
                  email: event.target.value,
                  password,
                };
              })
            }
          />
          <Input
            variant="flushed"
            type="password"
            placeholder={t("Пароль")}
            marginBottom="20px"
            value={data.password}
            onChange={(event) =>
              setData((prev) => {
                const { email } = prev;
                return {
                  email,
                  password: event.target.value,
                };
              })
            }
          />
          <Button
            w="100%"
            type="submit"
            marginBottom="20px"
            borderRadius="20px"
            onClick={() => login(data)}
          >
            {t("Войти")}
          </Button>
          <Button borderRadius="20px" as={Link} to={"/register"} w="100%">
            {t("Регистрация")}
          </Button>
        </FormControl>
      </Center>
    </Flex>
  );
};

export { LoginPage };
