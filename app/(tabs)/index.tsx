import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, YStack, Button, H2, Image } from "tamagui";
import Topbar from "@/components/home/topbar";
import { Link } from "expo-router";

interface Service {
  id: number;
  name: string;
  icon: string;
  price: number;
  image: string;
}

const ServiceCard = ({
  service,
  onPress,
}: {
  service: Service;
  onPress: () => void;
}) => (
  <Link href={`/service/${service.id}`} asChild>
    <YStack
      borderRadius="$10"
      animation="bouncy"
      borderWidth="$0.5"
      pressStyle={{
        scale: 0.95,
        borderColor: "$lightPrimary5",
        bg: "$lightPrimary4",
      }}
      bg="$color.lightPrimary1"
      borderColor="$color.lightPrimary4"
      justifyContent="center"
      alignItems="center"
      onPress={onPress}
      w="47.5%"
      h="$13"
      gap="$2"
    >
      <Text fontSize="$9">{service.icon}</Text>
      <Text>{service.name}</Text>
    </YStack>
  </Link>
);

const services: Service[] = [
  {
    id: 1,
    name: "Haircut",
    icon: "✂️",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    name: "Hairdo",
    icon: "💇",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    name: "Home Cleaning",
    icon: "🧹",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    name: "Dry Cleaning",
    icon: "👚",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    name: "Furniture Fix",
    icon: "🪑",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 6,
    name: "Generator Fix",
    icon: "🔧",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 7,
    name: "Painting",
    icon: "🎨",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 8,
    name: "Home Decoration",
    icon: "🏠",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 9,
    name: "Electrician",
    icon: "⚡",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 10,
    name: "Plumber",
    icon: "🚰",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1646054364493-d4b6e3c1f0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default function HomeScreen() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServicePress = (service: Service) => {
    setSelectedService(service);
  };

  const renderItem = ({ item }: { item: Service }) => (
    <ServiceCard
      key={item.id}
      service={item}
      onPress={() => handleServicePress(item)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View bg={"$gray1Light"} paddingInline={"$4"} paddingTop={"$2"}>
          <Topbar />
        </View>
        <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ padding: 16 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
      <View>
        <Image
          source={{ uri: selectedService?.image }}
          style={{ width: "100%", height: 200 }}
        />
      </View>
    </SafeAreaView>
  );
}
