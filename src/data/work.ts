export type Lane = "Agents" | "Systems" | "Shipped" | "Data";

export type Project = {
  name: string;
  lane: Lane;
  stack: string;
  source: string;
  live?: string;
  summary: string;
  parts?: { name: string; note: string }[];
};

export const lanes: Array<"All" | Lane> = [
  "All",
  "Agents",
  "Systems",
  "Shipped",
  "Data",
];

export const projects: Project[] = [
  {
    name: "astack",
    lane: "Agents",
    stack: "Go",
    source: "https://github.com/aamoghS/astack",
    summary:
      "The chat is the conductor. A local coding CLI writes the code only when that CLI is already installed. If none is installed, the chat edits the files. Playbook, swarm, and arena stay local processes.",
  },
  {
    name: "oss-model-memory",
    lane: "Agents",
    stack: "Notes",
    source: "https://github.com/aamoghS/oss-model-memory",
    summary:
      "Product memory for smaller open-source chat models, about 1B to 14B parameters. Files, summaries, and always-on facts go into the prompt. It does not start from a vector database or from changing weights.",
  },
  {
    name: "sideprojects",
    lane: "Systems",
    stack: "Go",
    source: "https://github.com/aamoghS/sideprojects",
    summary:
      "A monorepo of networking experiments. Each folder is its own module, and none of it is a production control plane.",
    parts: [
      {
        name: "hotwire",
        note: "Scores backends on latency and errors, then pushes routing weights.",
      },
      {
        name: "plate",
        note: "Starts VMs through a small HTTP API. Docker locally, Proxmox on a real box.",
      },
      {
        name: "relay",
        note: "gRPC pub/sub: topics, streams, and a two-way chat room.",
      },
      {
        name: "cloak",
        note: "A layer-3 UDP VPN with a TUN device on each side.",
      },
      {
        name: "ipv1",
        note: "Flat names like “1” instead of dotted addresses, for the lab only.",
      },
      {
        name: "simhttp",
        note: "Fake HTTP backends with latency, jitter, and error rate.",
      },
    ],
  },
  {
    name: "gotero",
    lane: "Systems",
    stack: "Go",
    source: "https://github.com/aamoghS/gotero",
    summary:
      "A Go client for the Zotero API. It fetches collections and downloads PDFs concurrently.",
  },
  {
    name: "VIP",
    lane: "Shipped",
    stack: "Next.js",
    source: "https://github.com/aamoghS/VIP",
    live: "https://codevipdash.vercel.app/",
    summary:
      "Pages for rooms, sprints, a toolbox, and metrics. Drag-and-drop, Supabase, Drizzle, and tRPC.",
  },
  {
    name: "moviesstore",
    lane: "Shipped",
    stack: "Python",
    source: "https://github.com/aamoghS/moviesstore",
    live: "https://aamogh.pythonanywhere.com/",
    summary: "A movie store web app, deployed on PythonAnywhere.",
  },
  {
    name: "attendanceAutomator",
    lane: "Shipped",
    stack: "Apps Script",
    source: "https://github.com/aamoghS/attendanceAutomator",
    live: "https://aamoghs.github.io/attendanceAutomator/",
    summary:
      "A library that folds many Google Forms into one attendance sheet. It counts by email and skips forms it already processed.",
  },
  {
    name: "NLP Logix internship",
    lane: "Data",
    stack: "Python",
    source: "https://github.com/aamoghS/NLP-Logix-Internship",
    summary:
      "Summer data science internship. NFL play-by-play, about 450,000 rows. A run-or-pass model at about 80% accuracy, plus the charts. Presented to NLP Logix and the Jacksonville Jaguars analytics staff.",
  },
];
