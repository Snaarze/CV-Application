// MyDocument.jsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  document: {
    boxShadow: "1px 5px 10px rgba(0,0,0,0.4)",
    height: "85%",
    width: "35%",
  },
  name: {
    fontSize: 24,
    fontWeight: 800,
  },
  page: {
    flexDirection: "column",
    padding: 0,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
  },
  information: {
    display: "flex",
    gap: 10,
    fontSize: 10,
    fontWeight: 400,
    width: "100%",
    justifyContent: "center",
  },
  lineGap: {
    width: "100%",
    height: "1px",
    borderTop: "1px solid black",
  },
  summaryWrapper: {
    marginTop: "2px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "60px",
  },
  summary: {
    textAlign: "justify",
    fontSize: "10px",
    width: "100%",
  },
  personal: {
    fontSize: "14px",
    fontWeight: 800,
  },
  expContainer: {
    textAlign: "justify",
    width: "100%",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  expLocation: {
    fontSize: "10px",
    marginTop: "10px",
  },
  exp: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  duration: {
    fontSize: 12,
  },
  contribution: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
  },
});

const MyDocument = ({ data }) => (
  <Document style={styles.document}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.name}>
          {data.name.length > 0 ? data.name : "John Doe"}
        </Text>
        <View style={styles.information}>
          <Text>
            {data.email.length > 0
              ? " Icon  " + data.email
              : "johndoeprofessional@gmail.com"}
          </Text>
          <Text>
            {data.phone.length > 0
              ? " Icon (+63) " + data.phone
              : "(+63) 123456789"}
          </Text>
          <Text>
            {data.location.length > 0
              ? " Icon " + data.location
              : "Los Angeles City,California, USA"}
          </Text>
        </View>
        <View style={styles.lineGap}></View>
        <View style={styles.summaryWrapper}>
          <Text style={styles.summary}>
            {data.summary.length > 0
              ? data.summary
              : "Aspiring Software Developer with hands-on experience in full-stack web development, database management, and user interface design using React and Tailwind CSS. Skilled in integrating authentication, dynamic content, and scalable features. Eager to learn and contribute to innovative development teams."}
          </Text>
        </View>
        <Text style={styles.personal}>Personal Experience</Text>
        <View style={styles.lineGap}></View>
        <View style={styles.expContainer}>
          <Text style={styles.expLocation}>
            {data.expLocation?.length > 0
              ? data.expLocation
              : "Burges, New York USA"}
          </Text>
          <View style={styles.exp}>
            <Text>
              {data.position.length > 0 && data.companyName.length > 0
                ? `${data.position} at ${data.companyName}`
                : "Web Developer at Meta"}
            </Text>
            <Text style={styles.duration}>
              {data.start?.length > 0
                ? data.start + "-" + data.end
                : "February 2022 - July 2025"}
            </Text>
          </View>
          <View style={styles.contribution}>
            {data.contribution.length > 0 ? (
              data.contribution.map((contribute) => (
                <Text key={contribute}>{contribute}</Text>
              ))
            ) : (
              <Text>test</Text>
            )}
          </View>
        </View>
        <Text style={styles.name}>{data.school}</Text>
        <Text style={styles.name}>{data.titleStudy}</Text>
        <Text style={styles.name}>{data.dateStudy}</Text>
        <Text style={styles.name}>{data.companyName}</Text>
        <Text style={styles.name}>{data.position}</Text>
        <Text style={styles.name}>{data.duration}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
