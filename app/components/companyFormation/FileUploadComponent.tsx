import { View, Text, Pressable } from "react-native";
import React from "react";
import AppText from "../common/AppText";

interface FileUploadProps {
  title: string;
}

export default function FileUploadComponent({ title }: FileUploadProps) {
  return (
    <View className="flex flex-row items-center">
      <AppText className="text-lg flex-1">{title}</AppText>
      <Pressable onPress={() => alert("upload pressed.")}>
        <AppText className="text-center text-lg bg-slate-200 px-4 py-2 rounded-lg">
          Upload
        </AppText>
      </Pressable>
    </View>
  );
}
