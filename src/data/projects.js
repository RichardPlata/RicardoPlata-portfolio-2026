// Display order for the home.
import { auraProjectsVideo, guqiProjectsVideo, hardwoodProjectsVideo, kokoroProjects, shineProjectsVideo } from './mediaAssets.js'

export const professionalProjects = [
  { slug: 'gu-qi', title: 'GU-QI', typeKey: 'types.webDesign', layoutVariant: 'lead', order: 1, video: guqiProjectsVideo },
  { slug: 'kokoro', title: 'Kokoro Bake Studio', typeKey: 'types.digitalProduct', layoutVariant: 'support', order: 2, image: kokoroProjects },
  { slug: 'a-plus-hardwood', title: 'A+ Hardwood Flooring', typeKey: 'types.webDesign', layoutVariant: 'support', order: 3, video: hardwoodProjectsVideo },
  { slug: 'shine-cleaning', title: 'Shine Cleaning', typeKey: 'types.webDesign', layoutVariant: 'closing', order: 4, video: shineProjectsVideo },
  { slug: 'aura-drive', title: 'AURA Drive', typeKey: 'types.automotiveInterface', layoutVariant: 'wide', order: 5, video: auraProjectsVideo },
]
