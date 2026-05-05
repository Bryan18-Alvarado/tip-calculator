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
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20
  },
  label: {
    color: '#aaa',
    fontSize: 14
  },
  total: {
    fontSize: 52,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center'
  },
  info: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center'
  },
  custom: {
    color: '#ff7a00',
    marginTop: 8,
    fontWeight: '500'
  }
})
