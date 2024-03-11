import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "../common/AppText";

interface ApprovedCardProps {
  value: string;
  onPress?: () => void;
}

export default function ApprovedCard({ value, onPress }: ApprovedCardProps) {
  return (
    <Pressable className="mx-2 flex-1" onPress={onPress}>
      <LinearGradient
        className="w-full h-20 rounded-2xl flex flex-row "
        colors={["#281D58", "#BE8EB2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View className="ml-3 mt-2 flex-1">
          <AppText className="text-white text-lg font-semibold">
            Sdn bhd
          </AppText>
          <AppText className="text-white text-xs">Approved</AppText>
        </View>
        <AppText className="text-white text-6xl font-extrabold mr-3  mt-4 ">
          {value}
        </AppText>
      </LinearGradient>
    </Pressable>
  );
}
