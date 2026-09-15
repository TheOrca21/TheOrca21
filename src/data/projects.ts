export type ProjectType = 'professional' | 'open-source' | 'personal'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  year?: number
  type: ProjectType
  githubUrl?: string
  demoUrl?: string
  image?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'multilingual-voice-ai',
    title: 'Multilingual Voice-Based AI Support Platform',
    description:
      'Built a multilingual voice-based support application for farmers, supporting Hindi, English, and Bhojpuri. Combined speech recognition, retrieval-augmented generation, LLM-based response generation, and text-to-speech into an end-to-end audio-to-audio system. Worked across the backend, retrieval pipeline, AI service integration, and application workflow to take the system from experimentation to production. The platform supports around 800 farmers per day and reached 8,000+ users within its first month.',
    technologies: [
      'Python',
      'RAG',
      'Azure OpenAI',
      'Whisper',
      'Speech AI',
      'FastAPI / Flask',
      'Azure',
    ],
    type: 'professional',
    featured: true,
  },
  {
    id: 'ocr-document-intelligence',
    title: 'OCR-Based Document Intelligence Pipeline',
    description:
      'Architected and led development of a document intelligence pipeline for processing and validating information extracted from documents. Integrated OCR and AI-based document understanding with backend processing and validation workflows, with a focus on reliability and automation. The system processes around 500 documents per day with approximately 98% validation accuracy.',
    technologies: [
      'Python',
      'OCR',
      'Azure AI',
      'Document Intelligence',
      'Backend APIs',
      'Automation',
    ],
    type: 'professional',
    featured: true,
  },
]

/** Featured projects shown on the site. Add entries to `projects` and set featured: true. */
export const featuredProjects = projects.filter((p) => p.featured)
