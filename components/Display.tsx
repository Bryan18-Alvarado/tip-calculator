import { StyleSheet, Text, View } from 'react-native'

interface Props {
  amount: string
  tipAmount: number
  totalPerPerson: number
  isEditingTip: boolean
  customTipInput: string
}

export const Display = ({
  amount,
  tipAmount,
  totalPerPerson,
  isEditingTip,
  customTipInput
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total por persona</Text>

      <Text style={styles.total}>C$ {totalPerPerson.toFixed(2)}</Text>

      <Text style={styles.info}>
        Bill: C${Number.parseFloat(amount || '0').toFixed(2)}
      </Text>

      <Text style={styles.info}>Tip: C${tipAmount.toFixed(2)}</Text>

      {isEditingTip && (
        <Text style={styles.custom}>Editing Tip: {customTipInput}%</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    color: '#aaa'
  },
  total: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white'
  },
  info: {
    color: '#aaa'
  },
  custom: {
    color: '#ff7a00',
    marginTop: 5
  }
})
