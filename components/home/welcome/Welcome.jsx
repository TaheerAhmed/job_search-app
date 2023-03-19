import React from 'react'
import {
  View,
  TextInput, TouchableOpacity, Image, FlatList,
  Text
} from 'react-native'
import { useState } from 'react'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'





const jobTypes = ["Full-Time", "Part-Time", "Contractor"]

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('Full=Time')

  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Burak</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>

      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=""
            onChange={() => {

            }}
            placeholder="What are you looking For "
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {

        }}>
          <Image source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
              
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome