import { useEffect } from "react";
import { useRouter } from "next/router";

const ridirect = () => {
  const router = useRouter();
  useEffect(() => {
    // Always do navigations after the first render
    router.push("/", undefined, { shallow: true });
  }, []);
};
export default ridirect;
