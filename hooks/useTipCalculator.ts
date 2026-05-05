import { useEffect, useMemo, useState } from 'react'

export const useTipCalculator = () => {
  const [amount, setAmount] = useState<string>('0')

  const [tip, setTip] = useState<number>(0.2)
  const [customTip, setCustomTip] = useState<number | null>(null)

  const [isEditingTip, setIsEditingTip] = useState<boolean>(false)
  const [customTipInput, setCustomTipInput] = useState<string>('0')

  const [people, setPeople] = useState<number>(1)

  const [tipAmount, setTipAmount] = useState<number>(0)
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0)

  const buildNumber = (value: string) => {
    if (isEditingTip) {
      if (value === '.' && customTipInput.includes('.')) return

      if (customTipInput === '0' && value !== '.') {
        setCustomTipInput(value)
      } else {
        setCustomTipInput((prev) => prev + value)
      }
      return
    }

    if (value === '.' && amount.includes('.')) return

    if (amount === '0' && value !== '.') {
      setAmount(value)
    } else {
      setAmount((prev) => prev + value)
    }
  }

  const deleteLast = () => {
    if (isEditingTip) {
      setCustomTipInput((prev) => (prev.length === 1 ? '0' : prev.slice(0, -1)))
      return
    }

    setAmount((prev) => (prev.length === 1 ? '0' : prev.slice(0, -1)))
  }

  const incrementPeople = () => setPeople((p) => p + 1)
  const decrementPeople = () => setPeople((p) => (p > 1 ? p - 1 : 1))

  const activateCustomTip = () => {
    setIsEditingTip(true)
    setCustomTipInput('0')
  }

  const activeTip = useMemo(() => {
    if (isEditingTip) {
      return (Number.parseFloat(customTipInput) || 0) / 100
    }
    return customTip ?? tip
  }, [isEditingTip, customTipInput, customTip, tip])

  useEffect(() => {
    const base = Number.parseFloat(amount) || 0
    const tipValue = base * activeTip
    const total = base + tipValue

    setTipAmount(tipValue)
    setTotalPerPerson(total / people)
  }, [amount, activeTip, people])

  return {
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
  }
}
