import { SyllabusModule, Mentor, BonusItem, FaqItem } from '../types';
import { WORKSHOP_DETAILS } from './constants';

export const SYLLABUS_MODULES: SyllabusModule[] = [
  {
    id: 1,
    title: '1. Wi-Fi & Network Security',
    description: 'How wireless networks get intercepted, live packet sniffing mechanics via Wireshark, rogue access points, and steps to fortify networks.',
    badge: 'Live Wireshark Demo',
    iconName: 'wifi',
    tools: ['Wireshark', 'Aircrack-ng', 'Kismet', 'Alfa Wireless Card'],
    learningOutcomes: [
      'Deconstruct 802.11 4-way WPA2/WPA3 handshakes',
      'Detect deauthentication frames and evil twin rogue APs',
      'Filter suspicious beacon frames and unencrypted HTTP/DNS leaks',
      'Configure Enterprise 802.1X and rogue client isolation'
    ],
    liveDemoScenario: 'Mentors intercept a live beacon in the lab sandbox, isolating unencrypted broadcast packets and proving how easy it is to eavesdrop without WPA3 Enterprise shields.'
  },
  {
    id: 2,
    title: '2. Mobile & Android Exploits',
    description: 'Dissecting weaponized APKs, unauthorized background microphone/camera access, runtime permission hijacking, and Android defense postures.',
    badge: 'Reverse-Engineering Sandbox',
    iconName: 'smartphone',
    tools: ['JADX-GUI', 'APKTool', 'Frida Hooking', 'Android Studio Emulator'],
    learningOutcomes: [
      'Decompile and unpack Android bytecode into readable Smali and Java',
      'Identify backdoor permissions concealed inside casual utility apps',
      'Bypass SSL pinning using dynamic Frida scripts',
      'Implement ProGuard obfuscation and Google Play Protect compliance'
    ],
    liveDemoScenario: 'Reverse-engineering a simulated flashlight application that secretly requested SEND_SMS and RECORD_AUDIO permissions in the background.'
  },
  {
    id: 3,
    title: '3. Web App & Browser Hacking',
    description: 'SQL Injection (SQLi), Cross-Site Scripting (XSS), insecure direct object references (IDOR), and real defensive sanitization protocols.',
    badge: 'OWASP Top 10 Hands-on',
    iconName: 'globe',
    tools: ['Burp Suite Community', 'OWASP ZAP', 'SQLmap', 'Firefox Developer Edition'],
    learningOutcomes: [
      'Intercept raw HTTP/HTTPS traffic through an upstream proxy',
      'Exploit classic blind and error-based SQL injection vulnerability vectors',
      'Execute stored and reflected XSS session cookie theft in sandbox',
      'Deploy Prepared Statements and Content Security Policy (CSP) headers'
    ],
    liveDemoScenario: 'Bypassing an administrative authentication portal using targeted SQL syntax alteration, followed by securing it with parameter binding.'
  },
  {
    id: 4,
    title: '4. Passwords & Auth Cracking',
    description: 'Credential stuffing, hash cracking algorithms, dictionary attacks, rainbow tables, and implementing zero-trust Multi-Factor Auth (MFA).',
    badge: 'Hashcat & John The Ripper',
    iconName: 'key-round',
    tools: ['Hashcat', 'John The Ripper', 'RockYou Wordlist', 'KeePassXC'],
    learningOutcomes: [
      'Differentiate MD5, SHA-256, bcrypt, and Argon2 cryptographic work factors',
      'Run GPU-accelerated mask and rule-based dictionary attacks',
      'Detect credential reuse across public credential dump databases',
      'Mandate TOTP/FIDO2 hardware security keys for admin endpoints'
    ],
    liveDemoScenario: 'Benchmarking the speed of cracking a 6-character MD5 password in 0.04 seconds versus an 14-character passphrase with salt.'
  },
  {
    id: 5,
    title: '5. Forensics & Incident Triage',
    description: 'Reconstructing cyber breaches, server log correlation, volatile memory dumping, and discovering threat actor footprints.',
    badge: 'Real Incident Case Study',
    iconName: 'microscope',
    tools: ['Volatility 3', 'Autopsy', 'Wireshark PCAP', 'FTK Imager'],
    learningOutcomes: [
      'Preserve digital chain of custody and forensic RAM captures',
      'Extract rogue injected DLLs from active memory process trees',
      'Timeline analysis across Linux syslog, auth.log, and Windows Event logs',
      'Create emergency incident containment and network quarantine plans'
    ],
    liveDemoScenario: 'Investigating a simulated ransomware intrusion: extracting the adversary IP, timestamp of entry, and initial payload dropper.'
  },
  {
    id: 6,
    title: '6. Cryptography & Stego',
    description: 'Concealing executable payloads inside innocent media files, modern symmetric/asymmetric key ciphers, and decryption fundamentals.',
    badge: 'Payload Extraction Lab',
    iconName: 'shield-alert',
    tools: ['Steghide', 'OpenSSL', 'CyberChef', 'Binwalk'],
    learningOutcomes: [
      'Extract hidden zip archives hidden in JPEG/PNG byte streams with Binwalk',
      'Understand AES-256 GCM encryption vs historical DES vulnerabilities',
      'Public/private key asymmetric cryptography mechanics (RSA/ECC)',
      'Defend against steganographic data exfiltration through network DLP'
    ],
    liveDemoScenario: 'Unpacking an innocent-looking campus photo to uncover an encrypted text file embedded within the Least Significant Bits (LSB).'
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'suraj',
    initials: 'SK',
    name: 'Suraj Kumar',
    role: 'Cyber Security Engineer',
    specialization: 'Specialization: Network Pen-Testing & Threat Intel',
    bio: 'With deep domain expertise in red teaming, Suraj has audited enterprise networks, intercepted critical perimeter vulnerabilities, and guided hundreds of engineers on navigating dark web threat landscapes and active attack vectors.',
    badge: '6+ Years Field Experience • Red Team Specialist',
    certifications: ['OSCP (Offensive Security Certified Professional)', 'CRTP (Active Directory)', 'CEH Master'],
    recentWork: 'Conducted red-team penetration tests for fintech banking infrastructures and conducted live threat reconnaissance.'
  },
  {
    id: 'vivek',
    initials: 'VK',
    name: 'Vivek',
    role: 'Cyber Security Engineer',
    specialization: 'Specialization: AppSec & Vulnerability Management',
    bio: 'Vivek is an application security enthusiast obsessed with hunting business logic flaws, patch validation, and cloud workload hardening. He regularly leads hackathons and mentors students into full-time security analyst positions.',
    badge: 'AppSec Strategist • 50+ Vulnerability Disclosures',
    certifications: ['eWPTX (Web Application Penetration Tester)', 'AWS Certified Security Specialist', 'Security+'],
    recentWork: 'Discovered critical API & IDOR vulnerabilities in popular cloud services and authored automated AppSec pipelines.'
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    bonusNumber: 'BONUS #1',
    title: 'Top 50 Practical Ethical Hacking Cheatsheets',
    description: 'Curated payloads for SQLi, XSS vectors, Nmap terminal syntax shortcuts, and Linux privilege escalation command blocks.',
    worth: 'Worth ₹3,500 — FREE',
    category: 'Cheatsheets & Payloads',
    contents: [
      'Nmap Top 20 Port & OS Fingerprinting Scan One-Liners',
      'Burp Suite Match & Replace Regex Rules for Header Spoofing',
      'Linux /etc/sudoers Privilege Escalation Checklists',
      'SQLi Authentication Bypass & Error-Based Vector Matrix',
      'XSS Polyglot Payloads for WAF Bypass Testing'
    ]
  },
  {
    id: 2,
    bonusNumber: 'BONUS #2',
    title: 'Complete Bug Bounty & Kali Linux Setup Toolkit',
    description: 'Step-by-step configuration manual for Burp Suite Professional, virtual machines, custom wordlists, and initial vulnerability reconnaissance scripts.',
    worth: 'Worth ₹4,000 — FREE',
    category: 'Software & Environment Scripts',
    contents: [
      'Pre-configured VirtualBox/VMware Kali Linux ISO Setup Blueprint',
      'Burp Suite CA Certificate Root Installation Guide for Firefox & Android',
      'Custom SecLists Selections: High-Probability Indian Educational Domains',
      'Subdomain Enumeration Shell Script Pipeline (subfinder + httpx)',
      'Automated Vulnerability Scanner Safe-Run Configuration'
    ]
  },
  {
    id: 3,
    bonusNumber: 'BONUS #3',
    title: 'Cyber Defense Career & Roadmap E-Book',
    description: 'A comprehensive blueprint mapping certifications (Security+, CEH, OSCP), portfolio project repositories, and technical interview question sets.',
    worth: 'Worth ₹3,000 — FREE',
    category: 'Career & Interview Playbook',
    contents: [
      'Step-by-Step 6-Month Roadmap: From College Student to SOC Analyst L1',
      'Certification ROI Breakdown: CompTIA vs CEH vs OSCP vs BJT',
      'Top 75 Real Technical Interview Questions from Top Cybersecurity MNCs',
      'GitHub Portfolio Template for Hands-on Home Lab Proof',
      'Off-Campus Cyber Internship Application Strategy & Outreach Templates'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Is this workshop really completely free?',
    answer: "Yes, absolutely! The workshop is 100% free for all college and university students with a valid student ID card as part of Punjab's Cyber Awareness Initiative."
  },
  {
    question: 'Do I need prior coding or hacking experience?',
    answer: 'None whatsoever. Every demonstration starts from basic computer and networking logic, gradually breaking down complex attack patterns into clear, step-by-step principles.'
  },
  {
    question: 'Is this safe and legal to learn?',
    answer: '100% legal. All tests and attack mechanics are strictly demonstrated inside isolated offline virtual sandboxes with full educational permission under strict legal safety standards.'
  },
  {
    question: 'Do I need to bring my own laptop?',
    answer: "We strongly recommend bringing your laptop with charger so you can run tools alongside the mentors. If you don't have one, lab display screens will be available for you to follow along."
  },
  {
    question: 'Will I receive an official certificate?',
    answer: 'Yes! Every attendee who attends the complete 3-hour practical session will receive an official Techmines Certificate of Participation to boost their LinkedIn profile and resume.'
  },
  {
    question: 'Where exactly is the venue in Ludhiana?',
    answer: `The masterclass takes place at ${WORKSHOP_DETAILS.VENUE_NAME} (${WORKSHOP_DETAILS.VENUE_ADDRESS}). Full parking and transit directions are emailed upon registration confirmation.`
  }
];

export const ELIGIBILITY_POINTS = [
  {
    title: 'BCA, MCA, B.Tech, IT and School Students',
    body: 'Move past dry college textbook theory and build actual resume-worthy practical offensive and defensive skills that tech recruiters actively scout for.',
    pill: 'Gain Practical Project Proof'
  },
  {
    title: 'Curious Beginners in Ethical Hacking',
    body: 'Stop guessing from fragmented YouTube tutorials. See exactly how professional security researchers discover vulnerabilities in real life safely.',
    pill: 'Learn the Hacker Mindset'
  },
  {
    title: 'Aspiring Cyber Defense & SOC Engineers',
    body: 'Get an actionable, realistic career roadmap for premium credentials like CompTIA Security+, CEH, and OSCP, plus strategies to bag high-paying internships.',
    pill: 'Clear Industry Roadmap'
  }
];
