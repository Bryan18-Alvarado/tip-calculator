import * as Haptics from 'expo-haptics'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  selected: number
  onSelect: (value: number) => void
  onCustom: () => void
  isCustomActive: boolean
}

const options = [0.1, 0.15, 0.2]

export const TipSelector = ({
  selected,
  onSelect,
  onCustom,
  isCustomActive
}: Props) => {
  return (
    <View style={styles.container}>
      {options.map((opt) => {
        const active = selected === opt && !isCustomActive
        return (
          <TouchableOpacity
            key={opt}
            onPress={() => {
              Haptics.selectionAsync()
              onSelect(opt)
            }}
            style={[styles.button, active && styles.active]}
          >
            <Text style={styles.text}>{opt * 100}%</Text>
          </TouchableOpacity>
        )
      })}

      <TouchableOpacity
        onPress={() => {
          Haptics.selectionAsync()
          onCustom()
        }}
        style={[styles.button, isCustomActive && styles.active]}
      >
        <Text style={styles.text}>Custom</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#333'
  },
  active: {
    backgroundColor: '#ff7a00'
  },
  text: {
    color: 'white'
  }
})
