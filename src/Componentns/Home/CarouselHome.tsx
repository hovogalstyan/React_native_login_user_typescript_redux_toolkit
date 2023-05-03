import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { carouselDataType } from "../../Types/Types";

interface renderItemsTypes {
  item: carouselDataType,
  index: number
}

const data: carouselDataType[] = [
  {
    id: 1,
    name: "Eat Healthy",
    img: require("../../Images/HomeScreen/1.png"),
    description: "Maintaining good health should be the primary focus of everyone."
  },
  {
    id: 2,
    name: "Healthy Recipes",
    img: require("../../Images/HomeScreen/2.png"),
    description: "Browse thousands of healthy recipes from all over the world."
  },
  {
    id: 3,
    name: "Track Your Health",
    img: require("../../Images/HomeScreen/3.png"),
    description: "With amazing inbuilt tools you can track your progress."
  }
];
const SLIDER_WIDTH = Dimensions.get("window").width;
const renderItems = ({ item, index }: renderItemsTypes) => {
  return (
    <View key={index} style={styles.items}>
      <View style={styles.img_cont}>
        <Image source={item.img} style={styles.img} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.text_cont}>
        <Text style={styles.text}>{item.description}</Text>
      </View>
    </View>
  );
};
const CarouselHome = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <Carousel data={data}
                renderItem={renderItems}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={SLIDER_WIDTH}
                layoutCardOffset={20}
                useScrollView={true}
                onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)"
        }}
        inactiveDotOpacity={0.5}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CarouselHome;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  items: {
    width: SLIDER_WIDTH,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    marginRight: 15
  },
  img_cont: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "red"
  },
  img: {
    width: "100%",
    resizeMode: "cover"
  },
  name: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 45,
    color: "#000"
  },
  text_cont: {
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    textAlign: "center"
  }
});
