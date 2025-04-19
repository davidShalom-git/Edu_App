import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SafeScreen({children}) {
    const insets = useSafeAreaInsets()
  return (
    <View style={{flex: 1,paddingTop: insets.top}}>
      {children}
    </View>
  )
}