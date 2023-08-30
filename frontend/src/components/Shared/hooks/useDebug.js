import { useEffect } from "react";

const useDebug = (message) => {
  const debug = useEffect(() => {
    console.log(message);
  }, [message]);

  return debug;
};

export default useDebug;
