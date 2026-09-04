import { contactContent, siteDetails } from '@/content/site';

export const englishPageContent = {
  metadata: {
    title: 'English Information',
    description: 'English information for international students and English speakers visiting One Hope Church in Kaohsiung.',
  },
  hero: {
    title: 'One Hope',
    churchName: 'National Sun Yat-Sen University Free Methodist Church',
    introduction: [
      'A student-focused Christian church located next to National Sun Yat-sen University in Kaohsiung.',
      'We welcome students, international students, and anyone interested in exploring the Christian faith.',
    ],
  },
  about: {
    title: 'A church for students and friends',
    description: 'One Hope is a Christian church next to National Sun Yat-sen University in Kaohsiung. Our ministry primarily serves university students and offers a welcoming community for anyone who would like to explore the Christian faith.',
  },
  gatherings: [
    {
      day: 'Wednesday',
      time: '19:00–20:30',
      name: 'NSYSU Cru+ Fellowship',
    },
    {
      day: 'Friday',
      time: '12:00–13:00',
      name: 'Public Reading of Scripture',
    },
    {
      day: 'Saturday',
      time: '14:30–16:00',
      name: 'Worship Service',
    },
  ],
  location: {
    address: 'No. 87, Shaochuan St., Gushan Dist., Kaohsiung City, Taiwan',
    mapUrl: siteDetails.mapUrl,
  },
  contact: contactContent,
};
