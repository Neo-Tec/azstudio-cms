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

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  aboutMe,
  socialMedia,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]

export const singeletonSchemas = [aboutMe, socialMedia]
