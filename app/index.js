import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useEffect, useState} from 'react';
import { Stack, useRouter} from 'expo-router';
import { COLORS  , icons , images, SIZES} from '../constants';
import { Nearbyjobs, Popularjobs, Welcome, ScreenHeaderBtn} from "../components"

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const [getJobs, setGetJobs] = useState(false);

    //API was allowing 
    useEffect(() => {
        setGetJobs(false);

        setTimeout(() => {
            setGetJobs(true);
        }, 2000)
    }, [])


  return (
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
                style={{
                    flex:1,
                    padding: SIZES.medium
                }}
            >
                <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                      if (searchTerm) {
                        router.push(`/search/${searchTerm}`)
                      }
                    }}
                />
                {getJobs && <Popularjobs />}
                <Nearbyjobs />
            </View>

        </ScrollView>

    </SafeAreaView>
  )
}

export default Home