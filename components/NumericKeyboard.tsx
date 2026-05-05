import { View } from 'react-native'
import { CalculatorButton } from './CalculatorButton'

interface Props {
  onInput: (value: string) => void
  onDelete: () => void
}

export const NumericKeyboard = ({ onInput, onDelete }: Props) => {
  const layout: string[][] = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '.', 'del']
  ]

  return (
    <View>
      {layout.map((row, i) => (
        <View key={i} style={{ flexDirection: 'row' }}>
          {row.map((key) => (
            <CalculatorButton
              key={key}
              label={key}
              onPress={() => (key === 'del' ? onDelete() : onInput(key))}
              variant={key === 'del' ? 'accent' : 'default'}
            />
          ))}
        </View>
      ))}
    </View>
  )
}
