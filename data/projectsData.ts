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
  status?: string;
}

export const PROJECT_TILES: ProjectTile[] = [
  {
    id: "autonomytrustlabs",
    name: "AutonomyTrustLabs",
    row: 1,
    col: 6,
    smRow: 1,
    smCol: 3,
    color: "#3cbaff",
    idx: 0,
    delRandom: "664ms",
    dark: true,
    href: "/projects/waymo",
    websiteUrl: "https://autonomy-trust-labs.vercel.app/",
    ariaLabel: "Go to AutonomyTrustLabs project",
    imageSrc: "https://lh3.googleusercontent.com/faxtCqVNVWA6-xfiXvLk0GUfARiPMivH_EqSBRddPjHCJThVPEGpOouf5fRXx8nU6prVhVz1UJ2SyoKxSCmfBs9HB1sHrC_IM_98=e365-pa-nu-s0",
    imageSrcset: "https://lh3.googleusercontent.com/faxtCqVNVWA6-xfiXvLk0GUfARiPMivH_EqSBRddPjHCJThVPEGpOouf5fRXx8nU6prVhVz1UJ2SyoKxSCmfBs9HB1sHrC_IM_98=e365-pa-nu-w600-rw 2x, https://lh3.googleusercontent.com/faxtCqVNVWA6-xfiXvLk0GUfARiPMivH_EqSBRddPjHCJThVPEGpOouf5fRXx8nU6prVhVz1UJ2SyoKxSCmfBs9HB1sHrC_IM_98=e365-pa-nu-w300-rw",
    videoSrc: "/videos/autonomous-robot.mp4",
    desc: "autonomous systems / physical AI trust infrastructure",
    smDesc: "autonomous systems / physical AI trust infrastructure",
    category: "Autonomous Vehicles",
    status: "Graduated",
  },
  {
    id: "signalos",
    name: "SignalOS",
    row: 2,
    col: 5,
    smRow: 2,
    smCol: 2,
    color: "#F0F0F0",
    idx: 2,
    delRandom: "275ms",
    dark: true,
    href: "/projects/taara",
    ariaLabel: "Go to SignalOS project",
    imageSrc: "https://lh3.googleusercontent.com/N0XV8h1mcBtuncWdk52vKlsv3YftAXoJnbH0P2Wt-f0dsfwYw2E9ac2tTHSU2mknwUlNYRe3t0HDVxKnMo59eebHdoIDMBt1Sn1c=e365-pa-nu-s0",
    imageSrcset: "https://lh3.googleusercontent.com/N0XV8h1mcBtuncWdk52vKlsv3YftAXoJnbH0P2Wt-f0dsfwYw2E9ac2tTHSU2mknwUlNYRe3t0HDVxKnMo59eebHdoIDMBt1Sn1c=e365-pa-nu-w600-rw 2x, https://lh3.googleusercontent.com/N0XV8h1mcBtuncWdk52vKlsv3YftAXoJnbH0P2Wt-f0dsfwYw2E9ac2tTHSU2mknwUlNYRe3t0HDVxKnMo59eebHdoIDMBt1Sn1c=e365-pa-nu-w300-rw",
    videoSrc: "/videos/SignalOS.mp4",
    desc: "signal intelligence / data-driven decisioning platform",
    smDesc: "signal intelligence / data-driven decisioning platform",
    category: "Connectivity",
    status: "Current",
  },
  {
    id: "ventergy",
    name: "Ventergy",
    row: 2,
    col: 6,
    smRow: 2,
    smCol: 3,
    color: "#0bdd78",
    idx: 3,
    delRandom: "311ms",
    dark: false,
    href: "/projects/malta",
    websiteUrl: "https://ventergy-group.vercel.app/",
    ariaLabel: "Go to Ventergy project",
    imageSrc: "https://lh3.googleusercontent.com/S1RjmAu76veZc648NrTaoFY9H5h6pG7wjnfDSEoiymoF5PBdIwbn8Jioh9DJBAPKNLkpr6Sx4UCLL1umkjT4-KBS354GU8eA-HOXpw=e365-pa-nu-s0",
    imageSrcset: "https://lh3.googleusercontent.com/S1RjmAu76veZc648NrTaoFY9H5h6pG7wjnfDSEoiymoF5PBdIwbn8Jioh9DJBAPKNLkpr6Sx4UCLL1umkjT4-KBS354GU8eA-HOXpw=e365-pa-nu-w600-rw 2x, https://lh3.googleusercontent.com/S1RjmAu76veZc648NrTaoFY9H5h6pG7wjnfDSEoiymoF5PBdIwbn8Jioh9DJBAPKNLkpr6Sx4UCLL1umkjT4-KBS354GU8eA-HOXpw=e365-pa-nu-w300-rw",
    videoSrc: "/videos/Ventergy.mp4",
    desc: "energy systems & sustainability venture",
    smDesc: "energy systems & sustainability venture",
    category: "Clean Energy",
    status: "Graduated",
  },
  {
    id: "alignx",
    name: "AlignX",
    row: 3,
    col: 4,
    smRow: 4,
    smCol: 3,
    color: "#1b1d23",
    idx: 7,
    delRandom: "174ms",
    dark: false,
    href: "/projects/foghorn",
    websiteUrl: "https://align-x-olive.vercel.app/",
    ariaLabel: "Go to AlignX project",
    imageSrc: "https://lh3.googleusercontent.com/0mO_ye6zYJVy1EGqUfJlxeuSC97276M-yEWYKkP8oaC9ArFJ7CGnYFCQbehSB7U9OZu7iMujNk_qCZr5XyNi91gWWMGqAMH3Rg1j=e365-pa-nu-s0",
    imageSrcset: "https://lh3.googleusercontent.com/0mO_ye6zYJVy1EGqUfJlxeuSC97276M-yEWYKkP8oaC9ArFJ7CGnYFCQbehSB7U9OZu7iMujNk_qCZr5XyNi91gWWMGqAMH3Rg1j=e365-pa-nu-w600-rw 2x, https://lh3.googleusercontent.com/0mO_ye6zYJVy1EGqUfJlxeuSC97276M-yEWYKkP8oaC9ArFJ7CGnYFCQbehSB7U9OZu7iMujNk_qCZr5XyNi91gWWMGqAMH3Rg1j=e365-pa-nu-w300-rw",
    videoSrc: "/videos/AlignX.mp4",
    desc: "partner relationship management SaaS (ChannelOS)",
    smDesc: "partner relationship management SaaS (ChannelOS)",
    category: "Clean Tech",
    status: "Graduated",
  },
  {
    id: "servira",
    name: "Servira",
    row: 3,
    col: 5,
    smRow: 4,
    smCol: 2,
    color: "#2547e1",
    idx: 8,
    delRandom: "505ms",
    dark: false,
    href: "/projects/tapestry",
    websiteUrl: "https://servira-ai.vercel.app/",
    ariaLabel: "Go to Servira project",
    imageSrc: "https://lh3.googleusercontent.com/2QAbtZgsrtnxB8fig8VbOVNN7MElFbvhfPOx3-WxA_AKMaMrS0hG_Stk_VNZezcM6umSG538_n0k0U9NzlBsBtcxqquus0h74fIA=e365-pa-nu-s0",
    imageSrcset: "https://lh3.googleusercontent.com/2QAbtZgsrtnxB8fig8VbOVNN7MElFbvhfPOx3-WxA_AKMaMrS0hG_Stk_VNZezcM6umSG538_n0k0U9NzlBsBtcxqquus0h74fIA=e365-pa-nu-w600-rw 2x, https://lh3.googleusercontent.com/2QAbtZgsrtnxB8fig8VbOVNN7MElFbvhfPOx3-WxA_AKMaMrS0hG_Stk_VNZezcM6umSG538_n0k0U9NzlBsBtcxqquus0h74fIA=e365-pa-nu-w300-rw",
    videoSrc: "/videos/Servira.mp4",
    desc: "home services booking app",
    smDesc: "home services booking app",
    category: "Energy Grid",
    status: "Current",
  },
  {
    id: "badmintonos",
    name: "BadmintonOS",
    row: 3,
    col: 6,
    smRow: 4,
    smCol: 1,
    color: "#d338ce",
    idx: 9,
    delRandom: "510ms",
    dark: false,
    href: "/projects/iyo",
    websiteUrl: "https://badmintonos.com",
    ariaLabel: "Go to BadmintonOS project",
    imageSrc: "https://lh3.googleusercontent.com/b2TE1GoQZ2IyYVODLxhKV9wlQ3rkIctu-CZoM4izPb0JxH50Z2wHQD4Pb2IyiSdCPL20bcw42cbZwTDybhyJzUDP1L0ozzaEY27ejw=e365-pa-nu-s0",
    imageSrcset: "https://lh3.googleusercontent.com/b2TE1GoQZ2IyYVODLxhKV9wlQ3rkIctu-CZoM4izPb0JxH50Z2wHQD4Pb2IyiSdCPL20bcw42cbZwTDybhyJzUDP1L0ozzaEY27ejw=e365-pa-nu-w600-rw 2x, https://lh3.googleusercontent.com/b2TE1GoQZ2IyYVODLxhKV9wlQ3rkIctu-CZoM4izPb0JxH50Z2wHQD4Pb2IyiSdCPL20bcw42cbZwTDybhyJzUDP1L0ozzaEY27ejw=e365-pa-nu-w300-rw",
    videoSrc: "/videos/BadmintonOS.mp4",
    desc: "badminton video capture & sharing app (Clipo)",
    smDesc: "badminton video capture & sharing app (Clipo)",
    category: "Wearable Audio",
    status: "Graduated",
  },
];
