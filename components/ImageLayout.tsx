import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import { selectedCardType } from "@/app/(tabs)";

const imagesData = [
  {
    id: 1,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/CKbLhi8jQQ2kBxX7k7yl_g",
    title: "Image 1",
  },
  {
    id: 2,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/wAyQRHIEQNip_KZdp6N7Mw",
    title: "Image 2",
  },
  {
    id: 3,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/2rql490MQR6fgs1x-v113w",
    title: "Image 3",
  },
  {
    id: 4,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/nXAmY8pjSm2GgMwR97pHVA",
    title: "Image 4",
  },
  {
    id: 5,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/Xo_LtXcMSq-qozpUdQzPQw",
    title: "Image 5",
  },
  {
    id: 6,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/Xo_LtXcMSq-qozpUdQzPQw",
    title: "Image 6",
  },
  {
    id: 7,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/muDsS2g7ReSDnQZCfOptyA",
    title: "Image 7",
  },
  {
    id: 8,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/jtLsO037QZW3eRBweGJHCg",
    title: "Image 8",
  },
  {
    id: 9,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/Et4PrINoS7SrHnDAZmpC7A",
    title: "Image 9",
  },
  {
    id: 10,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/5grIsJuKS8Gk-btwh9aq-A",
    title: "Image 10",
  },
  {
    id: 11,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/MKGwZgHZQRWU28FVYkw9MQ",
    title: "Image 11",
  },
  {
    id: 12,
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/GEhjhYj9Tc6WSZzC8sm-QQ",
    title: "Image 12",
  },
];

export const MyMasonryList = ({
  onClick,
  setSelectedCard,
}: {
  onClick: () => void;
  setSelectedCard: (selectedCard: selectedCardType) => void;
}) => {
  const handleOnPress = (item: selectedCardType) => {
    setSelectedCard(item);
    onClick();
  };

  return (
    <MasonryFlashList
      data={imagesData}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleOnPress(item)}
        >
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      estimatedItemSize={200}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
