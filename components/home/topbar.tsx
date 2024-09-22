import React from "react";
import { Input, View, XStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const Topbar = () => {
  return (
    <XStack alignItems="center">
      <XStack
        flex={1}
        paddingInline={"$4"}
        bg={"$gray1Light"}
        w={"$full"}
        borderRadius={"$10"}
        alignItems={"center"}
        justifyContent={"center"}
        display="flex"
        borderWidth={2}
        borderColor={"$gray4Light"}
      >
        <Ionicons name="search" size={20} color="black" />
        <Input
          placeholder="Need a service?"
          size={"$3"}
          height={"$5"}
          placeholderTextColor={"$black"}
          flex={1}
          borderWidth={0}
        />
        <View>
          <Ionicons name="options-outline" size={24} color="black" />
        </View>
      </XStack>
    </XStack>
  );
};

export default Topbar;
