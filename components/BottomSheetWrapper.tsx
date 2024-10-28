import React, { useCallback, useEffect, useRef } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { selectedCardType } from "@/app/(tabs)";

const BottomSheetWrapper = ({
  onClick,
  selectedCard,
}: {
  onClick: () => void;
  selectedCard: selectedCardType | null;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Ensure the BottomSheet is open on mount
  /*  useEffect(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []); */

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFillObject}>
      <BottomSheet
        // ref={bottomSheetRef}
        // index={0} // Set index to 0 to open on mount
        snapPoints={["90%"]}
        onChange={handleSheetChanges}
        onClose={onClick}
        enablePanDownToClose
        handleIndicatorStyle={{ display: "none" }}
        handleStyle={{ display: "none" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image source={{ uri: selectedCard?.image }} style={styles.image} />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // padding: 36,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 400,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default BottomSheetWrapper;
