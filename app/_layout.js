import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        DMBold :require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium :require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular :require('../assets/fonts/DMSans-Regular.ttf'),
    })

    //This works as a useeffect loads the screen only when the above fonts have been loaded
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;
    else


  return <Stack onLayout={onLayoutRootView} />;
}