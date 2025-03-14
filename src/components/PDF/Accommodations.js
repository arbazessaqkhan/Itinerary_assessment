import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: { padding: 10, borderTop: "1px solid black", marginTop: 10 },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  text: { fontSize: 12, lineHeight: 1.5 },
});

const Accommodations = ({ accommodations }) => (
  <View style={styles.section}>
    <Text style={styles.title}>Accommodations</Text>
    {accommodations.map((acc, index) => (
      <Text key={index} style={styles.text}>
        {acc.hotelName} ({acc.hotelLocation}) - {acc.mealPlan}, {acc.roomType}
      </Text>
    ))}
  </View>
);

export default Accommodations;
