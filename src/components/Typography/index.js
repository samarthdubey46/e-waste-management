import React, {useState, useContext} from 'react';
import {Text} from 'react-native'

export const Title = ({children, style, textProps = {}}) => (
    <Text {...textProps}  style={[{fontSize: 22, fontWeight: 'bold'}, style]}>
        {children}
    </Text>
)
export const Caption = ({children, style}) => (
    <Text style={[{fontSize: 14, opacity: .7}, style]}>
        {children}
    </Text>
)
