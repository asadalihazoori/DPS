import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg'
import { FontStyle } from '../../theme/FontStyle'
import { COLORS } from '../../theme/colors'

const CustomDrawerItem = ({
  icon,
  title,
  navigate,
  style,
  marginTop,
  extandable,
  data,
  onSelect,
  selectedScreen,
}) => {

  const [isExpanded, setExpanded] = useState(false);


  const handlePress = (item) => {
    if (extandable) {
      setExpanded(!isExpanded);
    }
    else {
      navigate()
    }
  };
  return (

    <View>

      <TouchableOpacity
        style={[styles.container, { marginTop: marginTop }]}
        onPress={handlePress}>

        <View style={styles.iconView}>
          <SvgXml xml={icon} />
        </View>

        <View style={styles.textView}>
          <Text style={[FontStyle.Regular14_500, style]}>{title}</Text>
        </View>

      </TouchableOpacity>

      {isExpanded &&
        <View style={styles.extentedView}>

          {data?.map((item) => {
            const isSelectedItem = item.id === selectedScreen?.id
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={item.id}
                onPress={() => {
                  onSelect(item)
                  navigate(item.navigate)
                }}
                style={[styles.dropDown, {
                  backgroundColor: isSelectedItem ? '#F0F5FF' : 'transparent',
                }]}>
                <Text style={[styles.dropDownText, { color: isSelectedItem ? COLORS.black : COLORS.metallic, }]}>{item.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      }
    </View>
  )
}

export default CustomDrawerItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    // borderWidth: 1,
  },

  iconView: {
    width: 26,
    height: 24,
    justifyContent: 'center',
    // borderWidth: 1,
  },

  textView: {
    marginLeft: 11,
    justifyContent: 'center',
    // borderWidth: 1,
  },

  extentedView: {
    // borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: COLORS.background,
    marginBottom: 16,
    gap: 4,

  },
  dropDown: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    // borderWidth: 1,
  },

  dropDownText: {
    ...FontStyle.Regular12,
    color: COLORS.metallic,
    fontWeight: '500'
  },

})