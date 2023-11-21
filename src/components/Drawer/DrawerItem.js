import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { FontStyle } from '../../theme/FontStyle'

const CustomDrawerItem = ({
  icon,
  title,
  navigate,
  style,
  marginTop
}) => {

  return (
    <TouchableOpacity
      style={[styles.container, { marginTop: marginTop }]}
      onPress={navigate}>

      <View style={styles.iconView}>
        <SvgXml xml={icon} />
      </View>

      <View style={{ marginLeft: 11 }}>
        <Text style={[FontStyle.Regular14_500, style]}>{title}</Text>
      </View>


    </TouchableOpacity>
  )
}

export default CustomDrawerItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16
  },

  iconView: {
    width: 26,
    // borderColor: 'red'
  }

})