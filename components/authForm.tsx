import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import auth from "../lib/mutation";
import { FC, useState } from "react";
import Image from "../node_modules/next/image";
import Link from "next/link";
const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  let modeReverse;
  if (mode === "signin") {
    modeReverse = "signup";
  } else {
    modeReverse = "signin";
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="gray 1px solid"
      >
        <Image src="/logo.svg" width={180} height={180} />
      </Flex>
      <Flex
        justify="center"
        align="center"
        height="calc(100vh - 100px)"
        minW="200px"
      >
        <Box bg="gray.900" padding="50px" borderRadius="6px" minW="500px">
          <form onSubmit={submitHandler}>
            <Box paddingY="10px" minW="500px">
              <Input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box paddingY="10px" minW="200px">
              <Input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Flex>
              <Box>
                <Button
                  type="submit"
                  bg="green.500"
                  isLoading={isLoading}
                  sx={{
                    hover: {
                      bg: "green.300",
                    },
                  }}
                >
                  {mode}
                </Button>
              </Box>
              <Box padding="6px" marginLeft="5px">
                <Link href={`/${modeReverse}`}>
                  <a>{modeReverse}</a>
                </Link>
              </Box>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
export default AuthForm;
