import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: { marginTop: 20, textAlign: "center", fontSize: 12 },
});

const PDFFooter = ({ companyInfo }) => (
  <View style={styles.footer}>
    <Text>For inquiries, contact {companyInfo.contact}</Text>
    <Text>Thank you for choosing {companyInfo.companyName}!</Text>
  </View>
);

export default PDFFooter;
