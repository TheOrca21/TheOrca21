export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'SQL'],
  },
  {
    title: 'Backend',
    skills: ['Django', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'AI / ML',
    skills: [
      'Generative AI',
      'RAG',
      'LLM Applications',
      'Azure OpenAI',
      'Speech AI',
      'OCR / Document Intelligence',
      'Machine Learning',
    ],
  },
  {
    title: 'Cloud / Infrastructure',
    skills: ['Microsoft Azure', 'Docker', 'Git', 'GitHub'],
  },
]

export const currentlyExploring = [
  'LLM fundamentals',
  'Machine Learning',
  'Deep Learning',
  'Transformer architectures',
  'Distributed systems',
  'Cloud infrastructure',
]
