import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";
import BackIcon from "../../assets/icons/backBtn.icon";
import AppText from "./AppText";
import { cn } from "../../utils/cn";

export default function BackButton({
  className,
  ...pressableProps
}: PressableProps) {
  return (
    <View
      className={cn(
        "w-full px-2 py-4 mb-3 flex flex-row items-center",
        className
      )}
    >
      <Pressable {...pressableProps}>
        <BackIcon width={15} height={15} />
      </Pressable>
      <AppText className="flex-1 text-center font-semibold text-xl">
        {typeof pressableProps.children === "string" && pressableProps.children}
      </AppText>
    </View>
  );
}
