import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'
import { SIZES } from '../../../constants'

import useFetch from '../../../hooks/useFetch'

const Popularjobs = () => {
  const router = useRouter();

  const {data, isLoading, error } = useFetch({ endpoint:'search', args: {
    query: "React Developer",
    num_pages:'1',
     page: '1'
  }})

  // console.log( data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>

    <View style={styles.cardsContainer}>
      {(isLoading) ? (
        <ActivityIndicator />
      ) : (error) ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{gap: SIZES.medium}}
            horizontal
          />
      )}
    </View>


    </View>
  )
}

export default Popularjobs