import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className }: Props) => {
  return <div className={cn("md:p-6 p-4 bg-white rounded-md", className)}>{children}</div>;
};

export default Card;
