import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function CustomHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/bike.png')} />
          <Text>Deliveroo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
