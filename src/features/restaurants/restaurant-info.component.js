import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({restaurant = {}}) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://ww/foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burger-home-made-600x899.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return <Text>{name}</Text>
};