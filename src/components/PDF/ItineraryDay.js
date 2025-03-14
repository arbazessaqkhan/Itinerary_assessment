import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: { padding: 10, borderBottom: "1px solid #ddd" },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  text: { fontSize: 12, lineHeight: 1.5 },
});

const ItineraryDay = ({ day }) => (
  <View style={styles.section}>
    <Text style={styles.title}>Day {day.dayNumber}</Text>
    <Text style={styles.text}>Stay at: {day.nightStayLocation} ({day.hotelName})</Text>
    {day.destinations.map((dest, idx) => (
      <Text key={idx} style={styles.text}>🗺 {dest.destinationName}: {dest.attractions.join(", ")}</Text>
    ))}
  </View>
);

export default ItineraryDay;
