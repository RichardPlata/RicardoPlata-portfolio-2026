import portrait from '../assets/images/About-Picture.png'
import resume from '../assets/files/Resume-RicardoPlata-2026.pdf'

export const siteConfig = {
  name: 'Ricardo Plata',
  profile: {
    portrait,
    locationKey: 'hero.location',
    availabilityKey: 'hero.availability',
  },
  links: {
    // Supply approved destinations and set status to ready; missing actions stay hidden.
    resume: { href: resume, status: 'ready' },
    linkedin: { href: 'https://www.linkedin.com/in/ricardo-guadarrama-plata-976a8b209', status: 'ready' },
  },
  contact: { email: 'g2ricardogplata@gmail.com' },
}
