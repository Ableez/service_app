import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View, XStack } from "tamagui";

export default function ServiceScreen() {
  const { serviceId } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <XStack
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        paddingInline={"$2"}
        bg="$lightPrimary2"
        borderBottomWidth="$0.5"
        borderColor="$lightPrimary4"
        p="$2"
      >
        <Button
          onPress={() => router.back()}
          borderRadius="$10"
          pressStyle={{
            scale: 0.95,
          }}
          style={{ aspectRatio: "1/1" }}
          p={0}
          icon={<Ionicons name="arrow-back" size={24} color="black" />}
        />
        <Button
          onPress={() => router.back()}
          borderRadius="$10"
          bg={"$lightPrimary3"}
          style={{ aspectRatio: "1/1" }}
          p={0}
          pressStyle={{
            scale: 0.95,
          }}
          color="$lightPrimary7"
          icon={<Ionicons name="person" size={24} />}
        />
      </XStack>

      <View p={"$4"}>
        <Text>hello world</Text>
        <Text>{serviceId}</Text>
      </View>
    </SafeAreaView>
  );
}
