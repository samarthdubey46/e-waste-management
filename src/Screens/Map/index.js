import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import MapView, {Marker} from "react-native-maps";
import {ActivityIndicator, TouchableOpacity, View} from "react-native";
import {Title} from "../../components/Typography";
import {layout, themeColor} from "../../const";

const Map = ({navigation, route}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setButtonLoading(false)
            setLoading(true)
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
            setLoading(false)
        })();
    }, []);
    if (loading) {
        return (
            <ActivityIndicator color="black" size='large'/>
        )
    }
    if (errorMsg !== null) {
        return (
            <Title>Error Occurred</Title>
        )
    }
    return (
        <View style={{flex: 1}}>
            <MapView
                initialRegion={{
                    latitudeDelta: .0001,
                    longitudeDelta: .0001,
                    ...location
                }}
                style={{width: layout.width, height: layout.height}}
            >
                <Marker onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)} coordinate={location}
                        draggable={!buttonLoading}/>
            </MapView>
            <TouchableOpacity
                onPress={async () => {
                    setButtonLoading(true)
                    if (buttonLoading) return
                    let address = await Location.reverseGeocodeAsync(location)
                    if (address.length === 0) {
                        address = [{name: 'Location Recorded'}]
                    } else if (address[0].name === null || address[0].name === undefined || address[0].name === "") {
                        address = [{name: 'Location Recorded'}]
                    }
                    route.params.setData({
                        lat: location.latitude,
                        long: location.longitude,
                        address: address[0].name
                    })
                    setButtonLoading(false)
                    navigation.pop()
                }}
                style={{
                    position: 'absolute',
                    minWidth: 100,
                    minHeight: 40,
                    backgroundColor: themeColor,
                    top: layout.height - 120,
                    left: layout.width - 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10
                }}>
                {buttonLoading ? (<ActivityIndicator size="large" color="white"/>) :
                    <Title style={{color: 'white'}}>Save</Title>}
            </TouchableOpacity>
        </View>

    );
};

export default Map;
