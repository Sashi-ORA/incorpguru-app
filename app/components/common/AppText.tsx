import { Text, TextProps } from "react-native";
import { cn } from "../../utils/cn";

export default function AppText({ children, ...props }: TextProps) {
  return (
    <Text {...props} className={cn("font-public-sans-bold", props.className)}>
      {children}
    </Text>
  );
}
