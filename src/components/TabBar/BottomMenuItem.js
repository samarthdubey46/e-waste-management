import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {color} from '../../const'
import { Caption } from "../Typography";

export const BottomMenuItem = ({ iconName, isCurrent,Icon }) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <AntDesign
        name={iconName}
        size={32}
        style={{ color: isCurrent ? color.green : color.gray }}
      /> */}
      <Icon size={22} color={isCurrent ? color.green : color.gray}/>
      <Caption style={{fontSize:10,marginTop:5}}>{iconName}</Caption>
    </View>
  );
};
