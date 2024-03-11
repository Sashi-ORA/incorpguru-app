import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "../common/AppText";

interface PendingCardProps {
  value: string;
  onPress?: () => void;
}

export default function PendingCard({ value, onPress }: PendingCardProps) {
  return (
    <Pressable
      className="w-full mx-2 h-20 rounded-2xl flex flex-1 flex-row border-2 border-slate-200 "
      onPress={onPress}
    >
      <View className="ml-2 mt-2 flex-1">
        <AppText className="text-dark text-lg font-semibold">LLP</AppText>
        <AppText className="text-dark text-xs">Pending</AppText>
      </View>
      <AppText className="text-dark text-6xl font-extrabold mr-2 mt-4 ">
        {value}
      </AppText>
    </Pressable>
  );
}
