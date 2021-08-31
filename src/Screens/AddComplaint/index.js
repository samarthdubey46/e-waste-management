import React, {useEffect, useState} from 'react'
import {Platform, ScrollView, StyleSheet, View} from 'react-native'
import {color} from "../../const";
import * as ImagePicker from 'expo-image-picker';
import TextInput from "../../components/TextInput";
import RoundButton from "../../components/Button/round";
import ImagePickerComponent from "./imagePicker";
import {ADdComplaint} from "../../API/complaints";
import {useDispatch, useSelector} from "react-redux";
import {Caption} from "../../components/Typography";
import {setReload} from "../../redux/actions/auth";

let errs = [false, false, false, false, false, false]
const AddComplaint = ({navigation, route}) => {
    let token = useSelector(state => state.auth.TOKEN)
    let logged = useSelector(state => state.auth.ISLOGGED)
    const [images, setImages] = useState([null, null, null, null])
    const [title, setTitle] = useState('Found nothing on the side of road')
    const [desc, setDesc] = useState('this is a test description')
    const [contact, setContact] = useState('8839980930')
    const [category, setCategory] = useState('Garbage');
    const [errors, setErrors] = useState([false, false, false, false, false, false])
    const [address, setAddress] = useState({
        lat: null,
        long: null,
        address: ''
    })
    const [msg, setMsg] = useState('')
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setErrors(errs)
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);


    const SubmitData = async () => {
        try {
            if (loading) return
            setLoading(true)
            setErrors(errs)
            if (images[0] === null) errs[0] = ' '
            if (title.length === 0) errs[1] = 'Title is required'
            if (contact.length !== 10) errs[2] = 'Enter valid phone'
            if (category.length === 0) errs[3] = 'Type is required'
            if (address.lat === null) errs[4] = 'Select a location'
            if (desc.length === 0) errs[5] = 'Description is required'
            if (!errs.every(item => item === false)) {
                setErrors(errs)
                return
            }
            let data = {
                title,
                description: desc,
                address: address.address,
                long: address.long,
                lat: address.lat,
                category,
            }
            for (let i = 1; i < 5; i++) {
                if (images[i - 1] !== null) {
                    let image_ = images[i - 1]
                    data[`image_${i}`] = image_
                }
            }
            let res = await ADdComplaint(token, data)
            if (res.status === 'Created') {
                setMsg('Complaint Created Successfully')
                let newObj = {
                    id: res.data.id,
                    title: title,
                    image: res.data.image_1,
                    category: category,
                    status: res.data.status,
                    priority: res.data.priority,
                    created_at: res.data.created_at
                }
                dispatch(setReload('complaints'))
                setLoading(false)
                navigation.pop()
            } else {
                setMsg('Some error occurred please try again')
            }
            setLoading(false)


        } catch (e) {
            setLoading(false)
        }
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor: color.white}}>
            <View style={styles.container}>
                <ImagePickerComponent error={errors[0]} images={images} setImages={setImages}/>
                <View style={{}}>
                    <TextInput error={errors[1]} value={title} setValue={setTitle} placeHolder='Title'/>
                    <TextInput error={errors[2]} value={contact} setValue={setContact}
                               props={{keyboardType: "phone-pad"}}
                               placeHolder='Contact'/>
                    <TextInput error={errors[3]} value={category} setValue={setCategory} placeHolder='Category'/>
                    <TextInput error={errors[4]} shouldUseOnPress
                               onPress={() => navigation.navigate('Map', {setData: setAddress})}
                               value={address.address} setValue={setAddress} placeHolder='Location'/>
                    <TextInput error={errors[5]} value={desc} setValue={setDesc} props={{multiline: true}}
                               placeHolder='Detailed Description' inputStyle={{height: 120}}/>
                </View>
                <View style={{alignItems: 'flex-start', minHeight: 60, justifyContent: 'center'}}>
                    <Caption style={{color: msg.includes('Some') ? color.red : color.green, marginVertical: 5}}>{msg}</Caption>
                    <RoundButton buttonStyle={{left: -15,}} loading={loading} onPress={async () => await SubmitData()}
                                 text='Submit'/>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {backgroundColor: color.white, paddingVertical: 30, paddingHorizontal: 15, flex: 1},
    text: {textAlign: 'left', letterSpacing: 1.3, lineHeight: 30}
})
export default AddComplaint