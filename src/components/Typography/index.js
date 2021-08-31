import React from 'react';
import {Text, TouchableOpacity} from 'react-native'

export const Title = ({children, style, textProps = {}}) => (
    <Text {...textProps} style={[{fontSize: 22, fontWeight: 'bold'}, style]}>
        {children}
    </Text>
)
export const Caption = ({children, style, onPress,viewStyle = {}}) => {
    if (onPress) {
        return (
            <TouchableOpacity style={viewStyle} onPress={() => onPress()}>
                <Text style={[{fontSize: 14, opacity: .7}, style]}>
                    {children}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <Text style={[{fontSize: 14, opacity: .7}, style]}>
            {children}
        </Text>
    )
}
