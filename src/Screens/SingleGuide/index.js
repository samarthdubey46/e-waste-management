import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {color, layout} from "../../const";
import Carousel, {Pagination} from 'react-native-snap-carousel'
import {Title} from "../../components/Typography";


const RenderItem = ({item, index}) => {
    return (
        <ScrollView style={{
            flex: 1,
            padding: 12,
            backgroundColor: color.white,
            borderWidth: .7,
            borderColor: color.border
        }}>
            <View style={{marginBottom: 40}}>
                {/*<Image style={{width: layout.width / 1.5, height: 150, alignSelf: 'center'}}*/}
                {/*       source={{uri: item.image}}/>*/}
                <Title textProps={{numberOfLines: 2}}
                       style={{marginVertical: 10, letterSpacing: 1.2, lineHeight: 32}}>{item.title}</Title>
                {
                    item.type === 'list' ? (
                        <View>
                            <Text style={[styles.text, {marginBottom: 19}]}>{item.contentBefore}</Text>
                            {item.content.map((item, index) => (
                                <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:5}}>
                                    <Text style={[{fontWeight: 'bold',lineHeight:30,letterSpacing:1}]}>{index + 1}. </Text>
                                    <Text key={index.toString()}
                                          style={[{lineHeight:20,letterSpacing:1.1}]}>{item}</Text>

                                </View>
                            ))}
                        </View>
                    ) : (<Text style={styles.text}>{item.content}</Text>)
                }
            </View>
        </ScrollView>
    )
}


const SingleGuide = ({navigation, route}) => {
    const [data, setData] = useState(route.params.data)
    const [index, setIndex] = useState(0)
    return (
        <View style={styles.container}>
            <Carousel
                nestedScrollEnabled
                data={data.steps}
                renderItem={({item, index}) => <RenderItem item={item} index={index}/>}
                sliderWidth={layout.width - 30}
                itemWidth={layout.width - 30}
                onSnapToItem={(index) => setIndex(index)}
            />
            <Pagination
                dotsLength={data.steps.length}
                activeDotIndex={index}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {backgroundColor: color.white, paddingVertical: 40, paddingHorizontal: 15, flex: 1},
    text: {textAlign: 'left', letterSpacing: 1.1, lineHeight: 26}
})
export default SingleGuide;
