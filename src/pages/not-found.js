import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  return (
    <div className="bg-black-background">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center mt-80 text-3xl ">Page not found</p>
      </div>
    </div>
  );
}
