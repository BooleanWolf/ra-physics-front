import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Ra Physics`;
  }, [title]);
};

export default useTitle;
