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
import { mockUser } from "../../effector/mocks/user";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <Flex w="100vw" h="100vh" flexDirection="column" p="0 10px">
      <AuthHeader />
      <Center justifyContent="center" h="100%">
        <FormControl w="500px">
          <FormLabel marginBottom="50px">
            <Heading>{t('Регистрация')}</Heading>
          </FormLabel>
          <Input
            variant="flushed"
            placeholder={t("Имя")}
            marginBottom="20px"
            required={true}
          />
          <Input
            variant="flushed"
            type="email"
            placeholder="Email"
            marginBottom="20px"
            required={true}
          />
          <Input
            variant="flushed"
            type="password"
            placeholder={t("Пароль")}
            marginBottom="20px"
            required={true}
          />
          <Input
            variant="flushed"
            placeholder={t("Ник в телеграм")}
            marginBottom="20px"
          />
          <Input
            variant="flushed"
            placeholder={t("Ник в Github")}
            marginBottom="20px"
          />
          <Button
            w="100%"
            type="submit"
            marginBottom="20px"
            borderRadius="20px"
            onClick={() => login(mockUser)}
          >
            {t('Зарегистрироваться')}
          </Button>
          <Button borderRadius="20px" as={Link} to={"/login"} w="100%">
          {t('Авторизация')}
          </Button>
        </FormControl>
      </Center>
    </Flex>
  );
};

export { RegisterPage };
