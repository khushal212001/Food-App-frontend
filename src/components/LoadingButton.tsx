import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const LoadingButton = () => {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin text-amber-300" />
        <span className="text-amber-400">
          Loading
        </span>
    </Button>
  );
};

export default LoadingButton;
