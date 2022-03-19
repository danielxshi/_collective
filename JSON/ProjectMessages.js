// import Fairmont from '../public/client-logos/';
import AP from '../public/client-logos/ap.png';
// import HUBLOT from '../public/client-logos/';
// import FSP from '../public/client-logos/';
// import CK from '../public/client-logos/';
// import millenium from '../public/client-logos/';
// import burj from '../public/client-logos/';

const dummyText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque itaque harum doloremque inventore dolorem natus,';

const IntroMessage = [
  {
    ID: '1',
    Title: '/',
    cName: 'link',
    Message: dummyText,
  },
  {
    ID: '1',
    Title: '/',
    cName: 'link',
    Message: dummyText,
  },
  {
    ID: '1',
    Title: '/',
    cName: 'link',
    Message: dummyText,
  },
  {
    ID: '1',
    Title: '/',
    cName: 'link',
    Message: dummyText,
  },
];

const ServiceMessages = [
  {
    ID: 'SM1',
    Title: 'Creative Planning & Marketing',
    Message:
      'Having worked in cross-functional teams with market wide partnerships, we are proud to be…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM2',
    Title: 'Website Development',
    Message:
      'From the layout & positioning, to the color schemes & images, a website’s design is the face of the brand…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM3',
    Title: 'CPG',
    Message:
      'Finding success in the CPG industry begins with being able to properly understand consumers…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM4',
    Title: 'PR Work',
    Message:
      'We utilize data to identify behavioural insights to determine which platforms are effective for the…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM5',
    Title: 'Social Insights & Planning',
    Message:
      'From planning campaigns on social media to conducting market research to growing social…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM6',
    Title: 'Influencer Work',
    Message:
      'From matching your product/service with the right spokesperson to running a mass campaign, we…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM7',
    Title: 'Strategical & Fundamental Financial Analysis',
    Message:
      'Solid logistics is what allows for small business to grow and expand into large organizations…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM8',
    Title: 'Technological & Programmatic Advancements',
    Message:
      'Our Technological & Programmatic branch comprises of five abilities: Engineering, Technical…',
    Link: '/',
    Src: '/',
  },
  {
    ID: 'SM9',
    Title: 'Production & Studio Set (Videography and Photography)',
    Message:
      'Our managers & producers research, analyze, formalize, execute and accentuate our client…',
    Link: '/',
    Src: '/',
  },
];

// Locations
const NY = 'New York, USA';
const VAN = 'Vancouver, CA';
const DUBAI = 'Dubai, UAE';

const RecruitingMessages = [
  {
    ID: 'RM1',
    Title: 'Project Manager',
    Location: NY,
    Description: 'Requisition ID: 467262 (full time)',
  },
  {
    ID: 'RM2',
    Title: 'Web UX/UI Designer',
    Location: NY,
    Description: 'Requisition ID: 532970 (full time)',
  },
  {
    ID: 'RM3',
    Title: 'Key Grip',
    Location: VAN,
    Description: 'Requisition ID: 910315 (full time)',
  },
  {
    ID: 'RM4',
    Title: 'Organizational CMS Consultant',
    Location: NY,
    Description: 'Requisition ID: 285726 (part time)',
  },
  {
    ID: 'RM5',
    Title: 'Logistics Consultant',
    Location: VAN,
    Description: 'Requisition ID: 822411 (part time)',
  },
  {
    ID: 'RM6',
    Title: 'Junior Data Analyst',
    Location: NY,
    Description: 'Requisition ID: 166984 (internship)',
  },
  {
    ID: 'RM7',
    Title: 'Project Manager',
    Location: DUBAI,
    Description: 'Requisition ID: 165626 (full time)',
  },
];

const ClientLogos = [
  {
    Title: '/',
    Src: AP,
    alt: 'alt',
  },
];

const ProjectMessages = {
  IntroMessage: IntroMessage,
  ServiceMessages: ServiceMessages,
  RecruitingMessages: RecruitingMessages,
  ClientLogos: ClientLogos,
};

export default ProjectMessages;
