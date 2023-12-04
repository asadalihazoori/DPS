import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgress = ({ percentage, radius, strokeWidth, color, backgroundColor, text }) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
        />
        <Text
          x={radius}
          y={radius}
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="black"
          style={styles.text}
        >
          {'text'}
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // aspectRatio: 1, // To maintain a perfect circle
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    fill: 'black',
    dominantBaseline: 'central', // Adjust vertical alignment
    textAnchor: 'middle',
  },
});

export default CircularProgress;
