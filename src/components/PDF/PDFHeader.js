import React from "react";
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: { textAlign: "center", marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  image: { width: 50, height: 50, marginBottom: 10 },
});

const PDFHeader = ({ companyInfo }) => (
  <View style={styles.header}>
    <Image src="/assets/images/companyLogo.png" style={styles.image} />
    <Text style={styles.title}>{companyInfo.companyName}</Text>
    <Text>{companyInfo.email} | {companyInfo.website}</Text>
  </View>
);

export default PDFHeader;
