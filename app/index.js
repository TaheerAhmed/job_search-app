import { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    //using timeout bcz rapid api allows for one request onoly per 1s
    const [showComponentNB, setShowComponentNB] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowComponentNB(true);
        }, 1800);
    }, []);


    const router = useRouter();


    return (
        <SafeAreaView style={styles.SafeArea}>
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: COLORS.lightWhite
                }, headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconsUrl={icons.menu} dimensions="60%" />
                ), headerRight: () => (
                    <ScreenHeaderBtn iconsUrl={images.profile} dimensions="100%" />),
                headerTitle: ""
            }} />
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.Scroller}
            >

                <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                        console.log(searchTerm)
                        if (searchTerm) {
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                />
                <Popularjobs />
                <View style={styles.bar} />
                {showComponentNB ? (<Nearbyjobs />) : (<ActivityIndicator size="large" color={COLORS.primary} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        SafeArea: {
            flex: 1,
            backgroundColor: COLORS.lightWhite
        },
        Scroller: {
            flex: 1,
            padding: SIZES.medium
        },
        bar: { borderBottomWidth: 1, borderBottomColor: 'black', marginTop: '5%'}
    }
)

export default Home