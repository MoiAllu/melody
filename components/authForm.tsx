import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import auth from "../lib/mutation";
import { FC, useState } from "react";
import Image from "../node_modules/next/image";
const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
        <Image src="/logo.svg" width={200} height={90} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box bg="gray.900" padding="50px" borderRadius="6px">
          <form onSubmit={submitHandler}>
            <Input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
export default AuthForm;
