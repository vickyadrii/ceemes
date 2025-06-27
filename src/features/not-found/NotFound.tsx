import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h3>Oops, Page Not Found!</h3>
          <p className="text-gray-500">Please check the URL or return to the dashboard page.</p>
        </div>
        <Button asChild variant="link">
          <Link to="/" className="text-purple-500">
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
