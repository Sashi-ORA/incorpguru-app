import { TextInput, TextInputProps, View } from "react-native";
import { cn } from "../../utils/cn";

export default function AppTextInput({ className, ...props }: TextInputProps) {
  return (
    <View
      className={cn(
        "w-full h-14 bg-slate-200 rounded-lg px-4 py-2 justify-center shadow-md",
        className
      )}
    >
      <TextInput className="text-base " {...props} />
    </View>
  );
}
