const imageAssets = import.meta.glob('../assets/images/*', { eager: true, query: '?url', import: 'default' })
const videoAssets = import.meta.glob('../assets/videos/*', { eager: true, query: '?url', import: 'default' })

function resolveAsset(collection, filename) {
  const entry = Object.entries(collection).find(([path]) => path.endsWith(`/${filename}`))
  return entry?.[1] || ''
}

export const guqi1 = resolveAsset(imageAssets, 'GuQi-CaseStudy1.png')
export const guqi2 = resolveAsset(imageAssets, 'GuQi-CaseStudy2.png')
export const guqi3 = resolveAsset(imageAssets, 'GuQi-CaseStudy3.png')
export const guqiProjectsVideo = resolveAsset(videoAssets, 'GuQi-video-projects.mp4')

export const hardwood1 = resolveAsset(imageAssets, 'HardWood-CaseStudy1.png')
export const hardwood2 = resolveAsset(imageAssets, 'HardWood-CaseStudy2.png')
export const hardwood3 = resolveAsset(imageAssets, 'HardWood-CaseStudy3.png')

export const kokoro1 = resolveAsset(imageAssets, 'Kokoro-CaseStudy1.png')
export const kokoro2 = resolveAsset(imageAssets, 'Kokoro-CaseStudy2.png')
export const kokoro3 = resolveAsset(imageAssets, 'Kokoro-CaseStudy3.png')
export const kokoroProjects = resolveAsset(imageAssets, 'Kokoro-Projects.png')

export const shine1 = resolveAsset(imageAssets, 'ShineCleaning-CaseStudy1.png')
export const shine2 = resolveAsset(imageAssets, 'ShineCleaning-CaseStudy2.png')
export const shine3 = resolveAsset(imageAssets, 'ShineCleaning-CaseStudy3.png')

export const auraProjectsVideo = resolveAsset(videoAssets, 'AURA-video-projects.mp4')
export const auraDriveModesVideo = resolveAsset(videoAssets, 'Aura-drivemodes-video.mp4')
export const auraExteriorVideo = resolveAsset(videoAssets, 'Aura-exteriortocockpit-video.mp4')
export const hardwoodProjectsVideo = resolveAsset(videoAssets, 'hardwood-video-projects.mp4')
export const shineProjectsVideo = resolveAsset(videoAssets, 'ShineCleaning-video-projects.mp4')
