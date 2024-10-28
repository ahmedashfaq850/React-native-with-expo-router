import { Button, StyleSheet, Text, Image, View } from "react-native";
import React, { useState } from "react";
import BottomSheetWrapper from "@/components/BottomSheetWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyMasonryList } from "@/components/ImageLayout";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export type selectedCardType = {
  id: number;
  image: string;
  title: string;
};

const Explore = () => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [selectedCard, setSelectedCard] = useState<selectedCardType | null>(
    null
  );

  const onClickClose = () => {
    setOpenBottomSheet(false);
  };

  const onClickOpen = () => {
    setOpenBottomSheet(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/5YROaJhYQHeHSIqYri_urA",
            }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        }
        headerBackgroundColor={{ dark: "#000", light: "#fff" }}
      >
        <MyMasonryList
          onClick={onClickOpen}
          setSelectedCard={setSelectedCard}
        />
      </ParallaxScrollView>

      {openBottomSheet && (
        <BottomSheetWrapper
          onClick={onClickClose}
          selectedCard={selectedCard}
        />
      )}
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
