// ============================================================
//  JOB OPENINGS — Edit this file to add / remove / update jobs
//
//  Fields:
//    title      — Job title (string)
//    type       — 'Full Time' | 'Part Time' | 'Internship' | 'Contract'
//    location   — Office / Remote info (string)
//    experience — e.g. '1–3 Years' or 'Fresher'
//    skills     — Array of skill tags (max 5-6 recommended)
//    emoji      — Single emoji for the job icon
//    active     — Set to false to hide a job without deleting it
//    formUrl    — Google Form link for this job (Apply Now button yahi kholega)
// ============================================================

export const jobOpenings = [
  {
    title: 'Full Stack Developer',
    type: 'Full Time',
    location: 'Mumbai / Remote',
    experience: '2–4 Years',
    skills: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
    emoji: '💻',
    active: true,
    formUrl: 'https://forms.gle/naDKTZD5cVy54crd8',
  },
  {
    title: 'React Native Developer',
    type: 'Full Time',
    location: 'Mumbai / Remote',
    experience: '1–3 Years',
    skills: ['React Native', 'JavaScript', 'Firebase', 'REST APIs'],
    emoji: '📱',
    active: true,
    formUrl: 'https://forms.gle/naDKTZD5cVy54crd8',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full Time',
    location: 'Mumbai',
    experience: '1–3 Years',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    emoji: '🎨',
    active: true,
    formUrl: 'https://forms.gle/naDKTZD5cVy54crd8',
  },
  {
    title: 'Digital Marketing Executive',
    type: 'Full Time',
    location: 'Mumbai',
    experience: '1–2 Years',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Content Marketing'],
    emoji: '📢',
    active: true,
    formUrl: 'https://forms.gle/naDKTZD5cVy54crd8',
  },
  {
    title: 'Business Development Executive',
    type: 'Full Time',
    location: 'Mumbai / Pune',
    experience: '1–3 Years',
    skills: ['Lead Generation', 'Client Communication', 'Sales', 'CRM'],
    emoji: '🤝',
    active: true,
    formUrl: 'https://forms.gle/naDKTZD5cVy54crd8',
  },
  {
    title: 'PHP / Laravel Developer',
    type: 'Full Time',
    location: 'Mumbai',
    experience: '2–4 Years',
    skills: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
    emoji: '🐘',
    active: true,
    formUrl: 'https://forms.gle/naDKTZD5cVy54crd8',
  },
]

// How to add a new job:
//   Copy any block above, paste at the end, change the values, set active: true
//   formUrl mein us job ka Google Form link daalo
//
// How to hide a job temporarily:
//   Set active: false — it won't show on the website but data is preserved
//
// How to remove a job permanently:
//   Delete the entire { ... } block
