import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";
import Logo from "../../assets/icons/logo.icon";
import GearIcon from "../../assets/icons/gear.icon";

export default function LogoComponent({ ...pressableProps }: PressableProps) {
  return (
    <View className="w-full flex flex-row items-center bg-white px-4 py-2">
      <View className="flex-1">
        <Logo width={100} height={50} />
      </View>
      <Pressable
        {...pressableProps}
        className="border-2 border-slate-300 rounded-lg p-1"
      >
        <GearIcon width={30} height={30} />
      </Pressable>
    </View>
  );
}
