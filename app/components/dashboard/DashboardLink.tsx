import { View, Text, Pressable } from "react-native";
import React from "react";
import BuildingIcon from "../../assets/icons/building.icon";
import AppText from "../common/AppText";
import RightArrowIcon from "../../assets/icons/rightArrow.icon";

interface DashboardLinkProps {
  icon: JSX.Element;
  title: string;
  subText: string;
  onPress: () => void;
}

export default function DashboardLink({
  icon,
  title,
  subText,
  onPress,
}: DashboardLinkProps) {
  return (
    <View className="flex flex-row items-center">
      <Pressable onPress={onPress} className="flex flex-row items-center">
        <View className="w-10 h-16 bg-white rounded-full items-center justify-center ">
          {icon}
        </View>
        <View className="ml-3 flex-1">
          <AppText className="text-2xl font-semibold ">{title}</AppText>
          <AppText className="text-sm text-primaryLight my-[2px] ">
            {subText}
          </AppText>
        </View>
        <RightArrowIcon width={25} height={25} />
      </Pressable>
    </View>
  );
}
