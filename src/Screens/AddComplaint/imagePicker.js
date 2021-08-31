import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import layout from "../../const/layout";
import {color, themeColor} from "../../const";
import {Ionicons} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = ({
                         image = null,
                         style = {},
                         width = '100%',
                         height = 180,
                         textStyle = {},
                         onPress,
                         text = 'Upload Image',
                         size = 90,
                         error
                     }) => {
    return (
        <TouchableOpacity onPress={async () => await onPress()} style={[{
            minHeight: height,
            borderWidth: image === null ? error ? 1 : .8 : .2,
            borderRadius: 5,
            borderStyle: 'dashed',
            borderColor: error ? 'red' : themeColor,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color.white,
            width: width,
        }, style]}>
            {image === null ?
                (
                    <>
                        <Ionicons name="cloud-upload-outline" size={size}
                                  color={color.pacificBlue}/>
                        <Text style={textStyle}>{text}</Text>
                    </>
                ) : (
                    <Image height={height} source={{uri: image.uri}} style={{flex: 1, height: height, width: width}}
                           resizeMode="stretch"/>
                )}
        </TouchableOpacity>
    )
}


const ImagePickerComponent = ({images, setImages, error = false}) => {
    const pickImage = async (number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);
        if (!result.cancelled) {
            let localUri = result.uri;
            let filename = localUri.split('/').pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            setImages(prev => prev.map((item, index) => index === number ? {
                uri: localUri,
                name: filename,
                type
            } : item));
        }
    };
    return (
        <View style={{height: 300, marginBottom: 20}}>
            <ImageUpload style={{marginBottom: 5}} error={error} onPress={() => pickImage(0)} image={images[0]}/>
            <ScrollView horizontal style={{flexDirection: 'row'}}>
                {[1, 2, 3].map(item => (
                    <ImageUpload key={String(item)} id={String(item)} style={{marginRight: 5}}
                                 onPress={() => pickImage(item)}
                                 height={90}
                                 width={layout.width / 2.219} size={40} image={images[item]}/>
                ))}
            </ScrollView>
        </View>
    );
};

export default ImagePickerComponent;
