import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../../theme/theme'
// import { stylesOld } from './stylesOld'
import MapView from 'react-native-maps'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import { stylesOld } from './stylesOld'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Swipe from '../Swipe'

const LocationOld = ({ navigation, latitude1, longitude1 }) => {

    const [showTime, setTime] = useState(false);
    const [swipeEnabled, setSwipeEnabled] = useState(true);

    const X = useSharedValue(10);
    const boxValue = useSharedValue(0);
    const animatedGestureHandler = useAnimatedGestureHandler({
        onActive: e => {

            if (X.value < 290) {
                if (e.translation < 0) {
                    X.value = -e.translationX;
                }

                else {
                    X.value = e.translationX;
                }
            }
        },
        onEnd: () => {
            if (X.value > 170) {
                X.value = withSpring(290);
                runOnJS(setTime)(true);
                console.log('Swiped to the end! Performing action...');
            }
            else {
                X.value = withSpring(10);

            }

        },
    })

    const InterpolateXInput = [0, 170]

    const AnimatedStyle = useAnimatedStyle(() => {
        return { transform: [{ translateX: X.value }] }
    })

    const AnimatedTextStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                X.value,
                InterpolateXInput,
                [0.8, 0],
                Extrapolate.CLAMP,
            ),
            transform: [{
                translateX: interpolate(X.value, InterpolateXInput, [
                    0, 170, Extrapolate.CLAMP,
                ])
            }
            ]
        }
    })





    return (
        <SafeAreaView style={Theme.SafeArea}>
            {/* <View style={{ marginHorizontal: 0 }}> */}


            <View style={stylesOld.mapView}>

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>


            {/* <View style={stylesOld.locationView}>

                    <SvgXml xml={Icons.location} />
                    <View style={stylesOld.locationText}>
                        <Text style={[FontStyle.Regular14, { fontWeight: '400', color: COLORS.grey4 }]}>1076 Block A DHA Lahore</Text>
                    </View>

                </View> */}


            {/* <View style={stylesOld.itemRow}>

                    <View>

                        <Text style={stylesOld.punchText}>Punch-In</Text>
                        <Text style={stylesOld.timeText}>8:30 AM</Text>
                    </View>

                    <View>
                        <Text style={stylesOld.punchText}>Punch-Out</Text>
                        <Text style={stylesOld.timeText}>9:30 PM</Text>
                    </View>

                </View>
                <View style={{
                    //  justifyContent: 'flex-end',
                    borderWidth: 1,
                    //    flex: 1
                }}>

                    <View style={stylesOld.buttonView}>

                        <View style={stylesOld.iconView}>
                            <SvgXml xml={Icons.punchArrow} />
                        </View>

                        <View style={{ justifyContent: 'center', }}>

                            <Text style={stylesOld.text}>Swipe Right to Punch In</Text>
                        </View>

                    </View>
                </View> */}

            <View style={stylesOld.container}>

                <Swipe />
                {/* <View style={{
                    width: 340,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: COLORS.red1,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    alignItems: 'center'
                }}>
                    <PanGestureHandler
                        onGestureEvent={animatedGestureHandler}
                    >
                        <Animated.View
                            style={[
                                {
                                    width: 40,
                                    height: 40,
                                    backgroundColor: COLORS.background1,
                                    borderRadius: 10,
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    left: 0
                                },
                                AnimatedStyle
                            ]}>
                            <SvgXml xml={Icons.punchArrow} />

                        </Animated.View>

                    </PanGestureHandler>

                    {showTime ?
                        <Animated.Text style={[stylesOld.text]}>{'Punched In at 10:30 AM '}</Animated.Text>
                        :
                        <Animated.Text style={[AnimatedTextStyle, stylesOld.text]}>{showTime ? 'Time' : 'Swipe Right to Punch In'}</Animated.Text>
                    }


                </View> */}





            </View>
        </SafeAreaView>
    )
}

export default LocationOld