export interface Role {
  title: string
  period: string
  description?: string
}

export interface ExperienceEntry {
  id: string
  company: string
  roles: Role[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'dexian',
    company: 'Dexian',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jan 2026 – Present',
        description:
          'Working on full-stack software and AI-driven applications, with a focus on building practical automation solutions using Python, JavaScript, Microsoft Azure and AI services. Build and maintain production applications combining full-stack development, cloud services and AI/ML capabilities. Worked across document intelligence/OCR, image analysis, speech and conversational AI, integrating services such as Azure AI and OpenAI. Developed AI-enabled applications for automation, information extraction, voice-based systems and business workflows. Contribute across the application lifecycle, from backend APIs and data processing to frontend integration and deployment.',
      },
      {
        title: 'Associate Software Engineer',
        period: 'Sep 2024 – Feb 2026',
      },
      {
        title: 'Intern',
        period: 'Mar 2024 – Sep 2024',
      },
    ],
  },
  {
    id: 'vaska',
    company: 'VASKA Consultancy',
    roles: [
      {
        title: 'Software and Automation Engineer',
        period: 'Dec 2023 – Mar 2024',
      },
    ],
  },
]
