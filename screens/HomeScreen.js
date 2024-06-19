// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  const featuredJobs = [
    { title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    // Add 7 more featured jobs here
  ];

  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    // Add 7 more popular jobs here
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome, {name}</Text>
      <Text>{email}</Text>
      <Text style={styles.subHeader}>Featured Jobs</Text>
      {featuredJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
      <Text style={styles.subHeader}>Popular Jobs</Text>
      {popularJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 20,
    marginTop: 16,
  },
});
