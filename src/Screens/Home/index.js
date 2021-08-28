import React from 'react'
import { View, Button, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import { Caption, Title } from '../../components/Typography'
import { color, layout } from '../../const/index'
import data from './data'

const Home = ({ navigation, route }) => {
    const navigateToSingleBlog = (item) => {
        navigation.navigate('SingleBlog', { blog: item, title: '' })
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: color.white, paddingVertical: 20, paddingHorizontal: 15 }}>
                <View style={{ marginBottom: 25, }}>
                    <Caption style={styles.greeting}>Good morning</Caption>
                </View>
                <View style={{ flex: 1 }}>
                    {/* <Title style={{ fontSize: 14 }}>Blogs</Title> */}
                    <FlatList
                        data={data}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item, index }) => (
                            <View style={{
                                flexDirection: 'row', marginVertical: 10,
                                minHeight: 120,
                            }}>
                                <View style={{ flex: .35, flexDirection: 'row', marginRight: 10 }}>
                                    <TouchableOpacity style={{ flex: 1, height: 110 }} onPress={() => navigateToSingleBlog(item)}>
                                        <ImageBackground resizeMode="stretch" style={{ flex: 1, height: 110 }} source={{ uri: item.image }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: .64, }}>
                                    <TouchableOpacity onPress={() => navigateToSingleBlog(item)} style={{ flex: .6, }}>
                                        <Text numberOfLines={3} style={{ fontSize: 16, fontWeight: '900' }}>{item.title}</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: .3, justifyContent: 'center', }}>
                                        {/* <Text style={{ fontSize: 14, fontWeight: '900' }}>
                                        {item.writtenBy}</Text> */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Caption style={{ fontSize: 12 }}>{item.writtenOn}</Caption>
                                            <Caption style={{ fontSize: 12 }}>◉ {item.readTime} mins read</Caption>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    greeting: { fontSize: 16, marginBottom: 10 }
})
export default Home