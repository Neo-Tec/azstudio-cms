import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import aboutMe from './aboutMe'
import socialMedia from './socialMedia'
import footer from './footer'
import skills, {skillObject} from './skills'
import videoProjects from './videoProjects'

export const schemaTypes = [
  // Document types
  // movie,
  // person,
  // screening,

  aboutMe,
  socialMedia,
  footer,
  skills,
  videoProjects,

  // Other types
  // blockContent,
  // plotSummary,
  // plotSummaries,
  // castMember,
  // crewMember,
  skillObject,
]

export const singeletonSchemas = [aboutMe, socialMedia, footer, skills]
