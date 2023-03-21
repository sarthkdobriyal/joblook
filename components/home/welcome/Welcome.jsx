import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState("Full-Time")

  const JobTypes = ['Full-Time', 'Part-Time', 'Internship']

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Sarthak</Text>
        <Text style={styles.welcomeMessage}>Let's Find a perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>

        <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
            ></TextInput>
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image 
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
      </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ gap: SIZES.large}}
          horizontal
        />

        
      </View>

    </View>
  )
}

export default Welcome