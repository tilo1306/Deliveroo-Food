import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function CustomHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('@/assets/images/bike.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>Delivery · Now</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.subtitle}>Carapicuiba, SP</Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
