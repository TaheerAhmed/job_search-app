import { useState } from 'react'
import {View,Text,ScrollView,SafeAreaView,StyleSheet} from 'react-native'
import { Stack,useRouter } from 'expo-router'
import {COLORS,icons,images,SIZES}from '../constants'
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome}from '../components'
const Home=()=>{
    const router=useRouter();


    return(
        <SafeAreaView style={styles.SafeArea}>
<Stack.Screen options={{headerStyle:{
    backgroundColor:COLORS.lightWhite
},headerShadowVisible:false,
headerLeft:()=>(
    <ScreenHeaderBtn iconsUrl={icons.menu} dimensions="60%"/>
), headerRight: () => (
                    <ScreenHeaderBtn iconsUrl={images.profile} dimensions="100%" />),
                    headerTitle:""
}}/>
<ScrollView showsVerticalScrollIndicator={false}
style={styles.Scroller}
>

<Welcome/>
<Popularjobs/>
<Nearbyjobs/>
</ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create(
    {SafeArea:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
Scroller:{
    flex:1,
    padding:SIZES.medium
}}
)

export default Home