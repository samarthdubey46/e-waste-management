import React from 'react'
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native'
import BlogNavigationButton from '../../components/Button/blogNavigation'
import { Title } from '../../components/Typography'
import { color } from '../../const'
import data from './data'

const SingleBlog = ({ navigation, route }) => {
    const { params } = route
    const { blog } = params
    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={styles.container}>
                <View style={{ marginBottom: 20 }}>
                    <Title style={styles.text}>{blog.title}</Title>
                </View>
                <Text style={[styles.text, { marginBottom: 20, }]}>{data}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <BlogNavigationButton onPress={() => navigation.push('SingleBlog',{blog,title : ''})} text="Prev" />
                    <BlogNavigationButton text="Next" />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: { backgroundColor: color.white, paddingVertical: 30, paddingHorizontal: 15 },
    text: { textAlign: 'left', letterSpacing: 1.3, lineHeight: 30 }
})
export default SingleBlog