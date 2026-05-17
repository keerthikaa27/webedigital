import { cn } from "@/components/utils/cn";

export function Container({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-shell py-4 px-3 md:px-8", className)}>{children}</div>;
}
