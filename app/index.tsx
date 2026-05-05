import { Counter } from '@/components/Counter'
import { Display } from '@/components/Display'
import { NumericKeyboard } from '@/components/NumericKeyboard'
import { TipSelector } from '@/components/TipSelector'
import { useTipCalculator } from '@/hooks/useTipCalculator'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function Index() {
  const {
    amount,
    tip,
    customTip,
    customTipInput,
    isEditingTip,
    people,
    tipAmount,
    totalPerPerson,
    buildNumber,
    deleteLast,
    setTip,
    setCustomTip,
    setIsEditingTip,
    incrementPeople,
    decrementPeople,
    activateCustomTip
  } = useTipCalculator()

  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.container, isLandscape && styles.landscape]}>
        <View style={styles.top}>
          <Display
            amount={amount}
            tipAmount={tipAmount}
            totalPerPerson={totalPerPerson}
            isEditingTip={isEditingTip}
            customTipInput={customTipInput}
          />

          <View style={styles.controls}>
            <TipSelector
              selected={customTip ?? tip}
              onSelect={(v) => {
                setCustomTip(null)
                setIsEditingTip(false)
                setTip(v)
              }}
              onCustom={activateCustomTip}
              isCustomActive={isEditingTip}
            />

            <Counter
              value={people}
              onInc={incrementPeople}
              onDec={decrementPeople}
            />
          </View>
        </View>

        <View style={styles.bottom}>
          <NumericKeyboard onInput={buildNumber} onDelete={deleteLast} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#121212'
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10
  },

  landscape: {
    flexDirection: 'row'
  },

  top: {
    flex: 1,
    marginTop: 20
  },

  controls: {
    marginTop: 20,
    gap: 20
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10
  }
})
