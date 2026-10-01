import { useTranslation } from 'react-i18next'

import './ProjectIndex.css'

export default function ProjectIndex() {
  const { t } = useTranslation()
  return (
    <div className="project-index-heading">
      <h2 id="projects-title">{t('projectIndex.title')}</h2>

    </div>
  )
}
