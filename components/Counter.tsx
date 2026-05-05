import * as Haptics from 'expo-haptics'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  value: number
  onInc: () => void
  onDec: () => void
}

export const Counter = ({ value, onInc, onDec }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          onDec()
        }}
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>

      <Text style={styles.value}>{value}</Text>

      <TouchableOpacity
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          onInc()
        }}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  text: {
    fontSize: 22,
    color: 'white'
  },
  value: {
    fontSize: 20,
    color: 'white'
  }
})
