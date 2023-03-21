import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import {useRouter} from 'expo-router'
import { SIZES } from '../../../constants'

import styles from './nearbyjobs.style'
import useFetch from '../../../hooks/useFetch'
import { ActivityIndicator } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const Nearbyjobs = () => {
  const router = useRouter();

  const {data, isLoading, error} = useFetch({ endpoint:'search', args: {
    num_pages:'1',
    query: "React Developer",
  }})


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Nearbyjobs</Text>
      <TouchableOpacity >
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>

    <View styles={styles.cardsContainer}>
      {
      (isLoading) ? (
        <ActivityIndicator />
      ) : (error) ? (
        <Text>Something went wrong...</Text>
      ) : (
        data?.map((job) => (
          <NearbyJobCard
            job={job}
            key={`nearby-job-${job.job_id}`}
            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          />
      ))
      )
      
    }
    </View>

    </View>
  )
}

export default Nearbyjobs