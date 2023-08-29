import { FC, Suspense } from "react";
import { Header } from "../Header/Header";
import { ProfileSidebar } from "../ProfileSidebar/ProfileSidebar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Flex, Show } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Path, paths } from "../../config/route/routes";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const withLayout =
    pathname !== Path.Login &&
    pathname !== Path.Register &&
    paths.includes(pathname as Path);
  return (
    <>
      {withLayout ? (
        <Suspense fallback="">
          <Flex width="100%">
            <Show breakpoint="(min-width: 1200px)">
              <Sidebar />
            </Show>
            <Flex
              padding="25px"
              w={{ base: "100%", xl: "calc(100% - 600px)" }}
              flexDirection="column"
              overflowY="auto"
              height="100vh"
            >
              <Header />
              {children}
            </Flex>
            <Show breakpoint="(min-width: 1200px)">
              <ProfileSidebar />
            </Show>
          </Flex>
        </Suspense>
      ) : (
        <Suspense fallback="">{children}</Suspense>
      )}
    </>
  );
};

export { DashboardLayout };
