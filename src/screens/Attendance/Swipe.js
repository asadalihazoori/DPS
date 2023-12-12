import { View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme/colors'
import { FontStyle } from '../../theme/FontStyle'
import { Dimensions } from 'react-native';
import Theme from '../../theme/theme';

const Swipe = ({ onSlide, freeze, title }) => {

    const screenWidth = Dimensions.get('window').width;
    const maxXValue = (screenWidth - 58) * 0.86;
    const swipeThreshold = maxXValue * 0.5;
    const InterpolateXInput = [0, swipeThreshold];

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
                X.value = withSpring(maxXValue - 5, { mass: 1 }, () => { });
                runOnJS(onSlide)();
            } else if (X.value < swipeThreshold && swipeEnabled && freeze) {
                X.value = withSpring(10, { mass: 0.5 }, () => {
                    runOnJS(setSwipeEnabled)(true);
                });
            }
        },
    });



    const AnimatedStyle = useAnimatedStyle(() => {
        return { transform: [{ translateX: X.value }] };
    });


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
            style={stylesOld.container}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
                <Animated.View
                    style={[stylesOld.innerContainer, AnimatedStyle]}>

                    <Icon
                        name={'chevron-triple-right'}
                        style={{
                            color: COLORS.white, fontSize: 50,
                        }}
                    />
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


const stylesOld = StyleSheet.create({
    container: {
        ...Theme.Shadow,
        borderWidth: 0, // must
        // borderColor: 'black',
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        // backgroundColor: 'red'
    },

    text: {
        ...FontStyle.Regular14,
        color: COLORS.white,
    },

})