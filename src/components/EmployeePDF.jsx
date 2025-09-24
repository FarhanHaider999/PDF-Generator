import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Amiri",
  src: "/fonts/Amiri-Regular.ttf", 
});

const EmployeePDF = ({ data }) => {
  const styles = StyleSheet.create({
    page: { 
      padding: 30, 
      backgroundColor: "#fff", 
      fontFamily: "Helvetica",
      fontSize: 10
    },
    header: { 
      fontSize: 20, 
      marginBottom: 25, 
      textAlign: "center",
      fontWeight: "bold",
      color: "#1f2937"
    },
    headerArabic: {
      fontSize: 18,
      textAlign: "center",
      marginTop: 5,
      marginBottom: 20,
      color: "#374151",
      fontFamily: "Amiri" 
    },
    table: { 
      display: "table", 
      width: "100%", 
      border: "2px solid #d1d5db",
      borderRadius: 5
    },
    headerRow: { 
      flexDirection: "row", 
      backgroundColor: "#f3f4f6",
      borderBottom: "2px solid #d1d5db",
      minHeight: 35
    },
    row: { 
      flexDirection: "row", 
      borderBottom: "1px solid #e5e7eb",
      minHeight: 30
    },
    lastRow: {
      borderBottom: "none"
    },
    col: { 
      width: "33.33%", 
      padding: 8,
      justifyContent: "center",
      borderRight: "1px solid #e5e7eb"
    },
    lastCol: {
      borderRight: "none"
    },
    left: { 
      textAlign: "left", 
      fontWeight: "bold",
      color: "#374151"
    },
    center: { 
      textAlign: "center",
      backgroundColor: "#fafafa",
      color: "#111827",
      fontWeight: "normal"
    },
    right: { 
      textAlign: "right", 
      fontWeight: "bold",
      color: "#374151",
      fontFamily: "Amiri" 
    },
    headerText: {
      fontWeight: "bold",
      fontSize: 11,
      color: "#1f2937"
    },
    headerTextArabic: {
      fontWeight: "bold",
      fontSize: 11,
      color: "#1f2937",
      fontFamily: "Amiri" 
    },
    valueText: {
      fontSize: 10,
      lineHeight: 1.4
    },
    notesRow: {
      minHeight: 50,
      alignItems: "flex-start"
    },
    notesText: {
      fontSize: 9,
      lineHeight: 1.3,
      paddingTop: 2
    }
  });

  const labels = {
    name: { en: "Name", ar: "الاسم" },
    department: { en: "Department", ar: "القسم" },
    role: { en: "Role", ar: "الدور" },
    joiningDate: { en: "Joining Date", ar: "تاريخ الانضمام" },
    notes: { en: "Notes", ar: "ملاحظات" },
  };

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("en-GB") : "N/A";

  const renderDataRow = (key, label, index, isLast) => {
    const isNotesRow = key === 'notes';
    const value = key === "joiningDate" ? formatDate(data[key]) : (data[key] || "N/A");
    
    return (
      <View 
        key={key} 
        style={[
          styles.row, 
          isLast && styles.lastRow,
          isNotesRow && styles.notesRow
        ]}
      >
        <View style={[styles.col, styles.left]}>
          <Text style={styles.headerText}>{label.en}</Text>
        </View>
        <View style={[styles.col, styles.center]}>
          <Text style={[
            styles.valueText, 
            isNotesRow && styles.notesText
          ]}>
            {value}
          </Text>
        </View>
        <View style={[styles.col, styles.right, styles.lastCol]}>
          <Text style={styles.headerTextArabic}>{label.ar}</Text>
        </View>
      </View>
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Employee Information</Text>
        <Text style={styles.headerArabic}>معلومات الموظف</Text>

        <View style={styles.table}>
          <View style={styles.headerRow}>
            <View style={[styles.col, styles.left]}>
              <Text style={styles.headerText}>English</Text>
            </View>
            <View style={[styles.col, styles.center]}>
              <Text style={styles.headerText}>Value</Text>
            </View>
            <View style={[styles.col, styles.right, styles.lastCol]}>
              <Text style={styles.headerTextArabic}>العربية</Text>
            </View>
          </View>

          {Object.entries(labels).map(([key, label], index, array) => 
            renderDataRow(key, label, index, index === array.length - 1)
          )}
        </View>

        <View style={{ marginTop: 30, textAlign: "center" }}>
          <Text style={{ fontSize: 8, color: "#6b7280" }}>
            Generated on {new Date().toLocaleDateString("en-GB")} at {new Date().toLocaleTimeString("en-GB")}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default EmployeePDF;
