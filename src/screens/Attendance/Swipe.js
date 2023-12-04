import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { SvgXml } from 'react-native-svg'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// const Swipe = ({ navigation, onSlide, time }) => {

//     const [swipeEnabled, setSwipeEnabled] = useState(true);
//     const [showTime, setTime] = useState(false);

//     const X = useSharedValue(10);
//     const boxValue = useSharedValue(0);
//     const animatedGestureHandler = useAnimatedGestureHandler({
//         onActive: e => {

//             if (X.value < 290) {
//                 if (e.translation < 0) {
//                     X.value = -e.translationX;
//                 }

//                 else {
//                     X.value = e.translationX;
//                 }
//             }
//         },
//         onEnd: () => {
//             if (X.value > 170) {
//                 X.value = withSpring(290);
//                 runOnJS(setTime)(true);
//                 runOnJS(onSlide)();
//                 console.log('Swiped to the end! Performing action...');
//             }
//             else {
//                 X.value = withSpring(10);

//             }

//         },
//     })

//     const InterpolateXInput = [0, 170]

//     const AnimatedStyle = useAnimatedStyle(() => {
//         return { transform: [{ translateX: X.value }] }
//     })

//     const AnimatedTextStyle = useAnimatedStyle(() => {
//         return {
//             opacity: interpolate(
//                 X.value,
//                 InterpolateXInput,
//                 [0.8, 0],
//                 Extrapolate.CLAMP,
//             ),
//             transform: [{
//                 translateX: interpolate(X.value, InterpolateXInput, [
//                     0, 170, Extrapolate.CLAMP,
//                 ])
//             }
//             ]
//         }
//     })





//     return (
//         // <SafeAreaView style={Theme.SafeArea}>
//         //     <View style={{ marginHorizontal: 16 }}>

//         <View style={{
//             width: '100%',
//             height: 50,
//             borderRadius: 10,
//             backgroundColor: COLORS.blue,
//             justifyContent: 'center',
//             alignItems: 'center'
//             // paddingHorizontal: 10,
//         }}>
//             <PanGestureHandler
//                 onGestureEvent={animatedGestureHandler}
//             >
//                 <Animated.View
//                     style={[
//                         {
//                             width: 40,
//                             height: 40,
//                             backgroundColor: COLORS.background1,
//                             borderRadius: 10,
//                             position: 'absolute',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             left: 0
//                         },
//                         AnimatedStyle
//                     ]}>
//                     <SvgXml xml={Icons.punchArrow}
//                         width={26}
//                         height={26}
//                         style={{ transform: [{ scaleX: -1 }] }} />

//                 </Animated.View>

//             </PanGestureHandler>

//             {showTime ?
//                 <Animated.Text style={[stylesOld.text]}>{`Punched Out at ${time} `}</Animated.Text>
//                 :
//                 <Animated.Text style={[AnimatedTextStyle, stylesOld.text]}>{showTime ? 'Time' : 'Swipe Right to Punch In'}</Animated.Text>
//             }


//         </View>





//         //     </View>
//         // </SafeAreaView>
//     )
// }

// export default Swipe


import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme/colors'
import { Icons } from '../../assets/SvgIcons/Icons'
import { FontStyle } from '../../theme/FontStyle'



const stylesOld = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        // marginTop: 24,
        // borderWidth: 1,
        flex: 1,
    },

   

    text: {
        ...FontStyle.Regular14,
        color: COLORS.white,
    },

    

})

import { Dimensions } from 'react-native';


const Swipe = ({ navigation, onSlide, freeze, title }) => {


    const [showTime, setTime] = useState(false);
    const screenWidth = Dimensions.get('window').width;

    const maxXValue = (screenWidth - 58) * 0.9;

    const swipeThreshold = maxXValue * 0.5;
    const [swipeEnabled, setSwipeEnabled] = useState(true);

    const X = useSharedValue(10);

    const animatedGestureHandler = useAnimatedGestureHandler({
        onActive: (e) => {
            if (X.value < maxXValue && swipeEnabled && freeze) {
                X.value = e.translationX < 0 ? -e.translationX : e.translationX;
            }
        },
        onEnd: () => {
            if (X.value > swipeThreshold && swipeEnabled && freeze) {
                runOnJS(setSwipeEnabled)(false);
                X.value = withSpring(maxXValue - 10, {}, () => {
                    runOnJS(setTime)(true)
                })
                    ;
                runOnJS(onSlide)();
            } else if (X.value < swipeThreshold && swipeEnabled && freeze) {
                X.value = withSpring(10, {}, () => {
                    runOnJS(setSwipeEnabled)(true);
                });
            }
        },
    });

    const AnimatedStyle = useAnimatedStyle(() => {
        return { transform: [{ translateX: X.value }] };
    });

    const InterpolateXInput = [0, swipeThreshold];

    const AnimatedTextStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(X.value, InterpolateXInput, [0.8, 0], Extrapolate.CLAMP),
            transform: [
                {
                    translateX: interpolate(X.value, InterpolateXInput, [0, swipeThreshold], Extrapolate.CLAMP),
                },
            ],
        };
    });

    return (
        <View
            style={{
                width: '100%',
                height: 50,
                borderRadius: 10,
                backgroundColor: COLORS.blue,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
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
                            left: 0,
                        },
                        AnimatedStyle,
                    ]}>
                    <SvgXml xml={Icons.punchArrow} width={26} height={26} style={{ transform: [{ scaleX: -1 }] }} />
                </Animated.View>
            </PanGestureHandler>

            {!freeze ? (<View>
                <Animated.Text style={[stylesOld.text, { marginRight: 0, }]}>{title}</Animated.Text>
            </View>)
                :
                (<Animated.Text style={[AnimatedTextStyle, stylesOld.text]}>
                    {'Swipe Right to Punch In'}
                </Animated.Text>)
            }


        </View>
    );
};

export default Swipe;
