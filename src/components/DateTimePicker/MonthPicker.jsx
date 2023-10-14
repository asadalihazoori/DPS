import React, { useState, useCallback, useMemo } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';

const MonthYearPicker = ({ onDateChange, tardines, tax }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {

      const selectedDate = newDate || date;

      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();

      const dateStr = `${year}-${month?.toString()?.padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const tardinesDate = `${year}-${month?.toString()?.padStart(2, '0')}`;
      const taxYear = `${year}`;

      showPicker(false);
      setDate(selectedDate);
      if (event == 'dateSetAction') {
        if (tardines) {
          onDateChange(tardinesDate)

        }
        else if (tax) {
          onDateChange(taxYear)

        }
        else {

          onDateChange(dateStr)
        }
      }
    },
    [date, showPicker],
  );

  const formattedDate = useMemo(() => {
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }, [date]);

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={() => showPicker(true)} style={styles.button}>
        <Text style={styles.text}>{formattedDate}</Text>
      </TouchableOpacity>

      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          minimumDate={new Date(2021, 0)}
          maximumDate={new Date()}
          locale="en"
          mode='short'
        />
      )}

    </SafeAreaView>
  );
};

export default MonthYearPicker;


const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red'
  },

  button: {
    padding: 18,
    backgroundColor: 'grey',
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

});