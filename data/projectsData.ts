export interface ProjectTile {
  id: string;
  name?: string;
  row: number;
  col: number;
  smRow: number;
  smCol: number;
  color: string;
  idx: number;
  delRandom: string;
  dark: boolean;
  href: string;
  ariaLabel: string;
  imageSrc: string;
  imageSrcset?: string;
  videoSrc?: string;
  websiteUrl?: string;
  desc: string;
  smDesc: string;
  category?: string;
}

export const PROJECT_TILES: ProjectTile[] = [
  {
    id: "autonomytrustlabs",
    name: "Autonomy Trust Labs",
    row: 1,
    col: 6,
    smRow: 1,
    smCol: 3,
    color: "#3cbaff",
    idx: 0,
    delRandom: "664ms",
    dark: true,
    href: "/projects/waymo",
    websiteUrl: "https://www.autonomytrustlabs.com/",
    ariaLabel: "Go to Autonomy Trust Labs project",
    imageSrc: "/images/ATL.png",
    desc: "Building the trust and assurance infrastructure for autonomous and Physical AI systems.",
    smDesc: "Building the trust and assurance infrastructure for autonomous and Physical AI systems.",
    category: "Autonomous Vehicles",
  },
  {
    id: "ventergy",
    name: "Ventergy",
    row: 1,
    col: 5,
    smRow: 1,
    smCol: 2,
    color: "#0bdd78",
    idx: 1,
    delRandom: "311ms",
    dark: false,
    href: "/projects/malta",
    ariaLabel: "Go to Ventergy project",
    imageSrc: "/images/Ventegry.jpg",
    desc: "A venture studio for intelligent energy and sustainability systems.",
    smDesc: "A venture studio for intelligent energy and sustainability systems.",
    category: "Clean Energy",
  },
  {
    id: "servira",
    name: "Servira",
    row: 1,
    col: 4,
    smRow: 1,
    smCol: 1,
    color: "#2547e1",
    idx: 2,
    delRandom: "505ms",
    dark: false,
    href: "/projects/tapestry",
    websiteUrl: "https://servira-ai.vercel.app/",
    ariaLabel: "Go to Servira project",
    imageSrc: "/images/Servira.png",
    desc: "AI-powered service operations platform for home, facility, and infrastructure services.",
    smDesc: "AI-powered service operations platform for home, facility, and infrastructure services.",
    category: "Energy Grid",
  },
  {
    id: "alignx",
    name: "AlignX",
    row: 2,
    col: 6,
    smRow: 2,
    smCol: 3,
    color: "#1b1d23",
    idx: 3,
    delRandom: "174ms",
    dark: false,
    href: "/projects/foghorn",
    ariaLabel: "Go to AlignX project",
    imageSrc: "/images/AlignX.png",
    desc: "AI-powered Business OS transforming how companies plan, operate, grow and scale.",
    smDesc: "AI-powered Business OS transforming how companies plan, operate, grow and scale.",
    category: "Clean Tech",
  },
  {
    id: "badmintonos",
    name: "BadmintonOS",
    row: 2,
    col: 5,
    smRow: 2,
    smCol: 2,
    color: "#d338ce",
    idx: 4,
    delRandom: "510ms",
    dark: false,
    href: "/projects/iyo",
    ariaLabel: "Go to BadmintonOS project",
    imageSrc: "/images/BadmintonOS.png",
    desc: "The digital and AI operating system for the global badminton ecosystem.",
    smDesc: "The digital and AI operating system for the global badminton ecosystem.",
    category: "Wearable Audio",
  },
  {
    id: "signalos",
    name: "SignalOS",
    row: 2,
    col: 4,
    smRow: 2,
    smCol: 1,
    color: "#F0F0F0",
    idx: 5,
    delRandom: "275ms",
    dark: true,
    href: "/projects/taara",
    ariaLabel: "Go to SignalOS project",
    imageSrc: "/images/SignalOS.png",
    desc: "Turning ideas into validated outcomes through execution and evidence.",
    smDesc: "Turning ideas into validated outcomes through execution and evidence.",
    category: "Connectivity",
  },
];
