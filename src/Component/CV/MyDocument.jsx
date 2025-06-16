import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 10,
    fontFamily: "Helvetica",
    flexDirection: "column",
  },
  section: {
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 6,
  },
  infoItem: {
    fontSize: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 4,
  },
  summary: {
    textAlign: "justify",
    marginBottom: 10,
  },
  heading: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  location: {
    fontSize: 9,
    marginBottom: 2,
  },
  contributionItem: {
    marginLeft: 10,
    marginBottom: 2,
    textAlign: "justify",
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.section}>
        <Text style={styles.name}>
          {data.name.length > 0 ? data.name : "John Doe"}
        </Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoItem}>
            {data.email.length > 0
              ? `@${data.email}`
              : "@johndoeprofessional@gmail.com"}
          </Text>
          <Text style={styles.infoItem}>
            {data.phone.length > 0 ? `(+63) ${data.phone}` : "(+63) 1234567890"}
          </Text>
          <Text style={styles.infoItem}>
            {data.location.length > 0 ? data.location : "Burges, New York USA"}
          </Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.summary}>
          {data.summary.length > 0
            ? data.summary
            : "Aspiring Software Developer with hands-on experience in full-stack web development, database management, and user interface design using React and Tailwind CSS. Skilled in integrating authentication, dynamic content, and scalable features. Eager to learn and contribute to innovative development teams."}
        </Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Experience</Text>
        <View style={styles.divider} />
        <Text style={styles.location}>
          {data.expLocation?.length > 0
            ? data.expLocation
            : "Burges, New York USA"}
        </Text>
        <View style={styles.experienceHeader}>
          <Text>
            {data.position.length > 0 ? data.position : "Web Developer"} at{" "}
            {data.companyName.length > 0 ? data.companyName : "Meta"}
          </Text>
          <Text>
            {data.start.length > 0 ? data.start : "2022-04-16"} -{" "}
            {data.end.length > 0 ? data.end : "2023-12-12"}
          </Text>
        </View>
        <View>
          {data.contribution?.length > 0 && data.contribution[0]?.length > 0 ? (
            data.contribution.map((item, idx) => (
              <Text key={idx} style={styles.contributionItem}>
                • {item}
              </Text>
            ))
          ) : (
            <>
              <Text style={styles.contributionItem}>
                • Implemented real-time user authentication using Firebase
                Authentication for secure access control.
              </Text>
              <Text style={styles.contributionItem}>
                • Developed a responsive dashboard interface using React and
                Tailwind CSS to enhance user experience across devices.
              </Text>
              <Text style={styles.contributionItem}>
                • Integrated Google Maps API to display user locations and
                visualize scheduling data dynamically.
              </Text>
            </>
          )}
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Educational Background</Text>
        <View style={styles.divider} />
        <View style={styles.educationHeader}>
          <Text>
            {data.school.length > 0 ? data.school : "National University"} -{" "}
            {data.titleStudy.length > 0
              ? data.titleStudy
              : "BS, Computer Science"}
          </Text>
          <Text>
            {data.dateStudy.length > 0
              ? data.dateStudy
              : "August 2020 - May 2025"}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
