import React,{useEffect, useState} from 'react'
import { View, Text,TouchableOpacity,ScrollView,ActivityIndicator } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS} from '../../../constants'
const Nearbyjobs = () => {
  
  // const [data, setdata] = useState([])
  // const [isLoading, setisLoading] = useState(true)
  // const [error,setError]=useState(null)
  // useEffect(() => {
  //   const tt=setTimeout(() => {
  //     const fetching=async()=>{
  //     const { data, isLoading, error } = await useFetch(
  //       'search', { query: 'React Native Developer', num_pages: "1", }
  //     )
  //     setdata(data)
  //     setisLoading(isLoading)
  //     setError(error)}
  //     fetching();
  //   }, 1006);
  //   return ()=>{
  //     clearTimeout(tt)
  //   }
  // }, [data,isLoading,error]);
  const route = useRouter()
  const { data, isLoading, error } =  useFetch(
        'search', { query: 'React Native Developer', num_pages: "1", }
      )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>

          <Text style={styles.headerBtn}>Show all </Text></TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary} />) : error ? (
          <Text>Somehing went wrong </Text>

        ) : (
         <ScrollView>
          {data?.map((job)=>(
            <NearbyJobCard
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={()=>route.push(`/job-details/${job.job_id}`)}
            />
          ))}
         </ScrollView>

        )}
      </View>
    </View>
  )
}

export default Nearbyjobs