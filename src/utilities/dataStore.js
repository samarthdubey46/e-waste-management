import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}

export const getAll = async () => {
    try {
        return await AsyncStorage.getAllKeys()
    } catch (e) {
        console.log(e)
    }
}

export const storeData = async (value, key) => {
    try {
        if (value !== undefined && value !== null && key !== undefined && key !== null) {
            await AsyncStorage.setItem(key, String(value))
        }else{
            console.log(`Undefined value Passed ${key}`)
        }
    } catch (e) {
        console.log(e)
    }
}
export const getData = async (key) => {
    try {
        const res = await AsyncStorage.getItem(key)
        if (res)
            return res
        return null
    } catch (e) {
        console.log(e)
    }
}