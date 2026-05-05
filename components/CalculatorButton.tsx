import * as Haptics from 'expo-haptics'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  label: string
  onPress: () => void
  variant?: 'default' | 'accent'
}

export const CalculatorButton = ({
  label,
  onPress,
  variant = 'default'
}: Props) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    onPress()
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, variant === 'accent' && styles.accent]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 6,
    padding: 22,
    borderRadius: 14,
    backgroundColor: '#2a2a2a',
    alignItems: 'center'
  },
  accent: {
    backgroundColor: '#ff7a00'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
})
