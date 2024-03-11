import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";
import { cn } from "../../utils/cn";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "./AppText";

export default function AppButton({
  className,
  ...pressableProps
}: PressableProps) {
  return (
    <LinearGradient
      className={cn("w-full py-2 rounded-xl", className)}
      colors={["#281D58", "#5D448E", "#BE8EB2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Pressable {...pressableProps}>
        <AppText className="text-white text-center text-lg">
          {typeof pressableProps.children === "string" &&
            pressableProps.children}
        </AppText>
      </Pressable>
    </LinearGradient>
  );
}
