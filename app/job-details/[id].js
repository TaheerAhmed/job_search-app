import React, { useState, useCallback } from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl ,Share} from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn } from '../../components'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES, icons } from '../../constants'

import Specifics from '../../components/jobdetails/specifics/Specifics'


const tabs = ["About", "Qualifications", "Responsibilities"]

const jobDetails = () => {
    const onRefresh = () => { }
    const displayTabContent=()=>{

        switch (activeTab
            ) {
            case "Qualifications":
                return <Specifics
                title="Qualifications"
                points={data[0].job_highlights?.Qualifications??['N/A']}
                />
        case "About":
                return <JobAbout
                title="About"
                info={data[0].job_description??"NoData"}
                />
        case "Responsibilities":
                return <Specifics
                    title="Responsibilities"
                    points={data[0].job_highlights?.Responsibilities ?? ['N/A']} />
            default:
                break;
        }
    }
    const params = useSearchParams();
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false)
    const [activeTab, setActiveTab] = useState(tabs[0])
    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    headerLeft: () => (<ScreenHeaderBtn iconsUrl={icons.left}
                        dimensions="60%"
                        handlePress={() => router.back()} />),
                    headerRight: () => (<ScreenHeaderBtn
                        iconsUrl={icons.share}
                        dimensions="60%"
                        handlePress={()=>{
                            Share.share(
                                {
                                    message: `Check out this Job at ${data[0].employer_name} ${data[0].job_google_link}`,
                                    url: `${data[0].job_google_link}`,
                                    title: `${data[0].job_title}`,
                                }
                            )
console.log(data[0])
                        }}
                    />),
                    headerTitle: ""
                }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary} />) : error ? <Text>SOmething Went Wrong</Text> : data.length === 0 ? <Text>No data</Text> :

                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
{displayTabContent()}
<JobFooter url={data[0]?.job_google_link??'https://careers.google.com/jobs/results'}/>
                        </View>}
                </ScrollView></>
        </SafeAreaView>
    )
}


export default jobDetails
