import React from 'react'
import { View, Text ,TouchableOpacity,Image} from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconsUrl,dimensions,handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconsUrl}
      resizeMode="cover"
      style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn