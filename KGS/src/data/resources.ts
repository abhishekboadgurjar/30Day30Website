import { Resource, CurrentAffair } from '../types';

export const resources: Resource[] = [
  {
    title: 'UPSC Syllabus Analysis',
    description: 'Detailed analysis of UPSC syllabus with topic-wise breakdown and reading recommendations.',
    type: 'Free',
    size: '2.4 MB PDF'
  },
  {
    title: 'Polity Notes by Khan Sir',
    description: 'Comprehensive notes on Indian Polity covering constitution, governance, and political dynamics.',
    type: 'Premium',
    size: '5.7 MB PDF'
  },
  {
    title: 'SSC Mathematics Formula Book',
    description: 'Complete collection of all mathematical formulas and shortcuts needed for SSC exams.',
    type: 'Free',
    size: '3.1 MB PDF'
  },
  {
    title: 'Banking Awareness Capsule',
    description: 'Concise capsule covering all important banking concepts, schemes, and current affairs.',
    type: 'Free',
    size: '1.8 MB PDF'
  },
  {
    title: 'Modern History Timeline',
    description: 'Chronological timeline of modern Indian history with important events and significance.',
    type: 'Free',
    size: '2.2 MB PDF'
  },
  {
    title: 'Monthly Current Affairs Digest',
    description: 'Comprehensive compilation of current affairs from the previous month relevant to all exams.',
    type: 'Premium',
    size: '4.3 MB PDF'
  }
];

export const currentAffairs: CurrentAffair[] = [
  {
    title: 'New Education Policy Implementation Updates',
    description: 'Latest updates on the implementation of the New Education Policy across different states and its impact on competitive exams.',
    date: 'May 15, 2025',
    tags: ['Education', 'UPSC', 'Policy']
  },
  {
    title: 'Banking Sector Reforms and Recent RBI Guidelines',
    description: 'Analysis of recent banking sector reforms and new RBI guidelines that are important for banking exams.',
    date: 'May 10, 2025',
    tags: ['Banking', 'Economy', 'RBI']
  },
  {
    title: 'Important Supreme Court Judgments of 2025',
    description: 'Summary of landmark judgments by the Supreme Court in the current year with constitutional implications.',
    date: 'May 5, 2025',
    tags: ['Judiciary', 'UPSC', 'Law']
  },
  {
    title: 'Science & Technology: Recent Developments in Space Exploration',
    description: 'Overview of recent achievements in space exploration by ISRO and global space agencies.',
    date: 'April 28, 2025',
    tags: ['Science', 'Technology', 'UPSC']
  }
];