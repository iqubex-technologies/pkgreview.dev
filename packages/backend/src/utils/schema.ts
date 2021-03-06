const typeDefs = /* GraphQL */ `
  # import * from 'src/utils/prisma-client/prisma-schema.ts'

  # Database Fields
  type User {
    id: String!
    name: String!
    email: String!
    githubUsername: String!
    githubId: Int!
    token: String!
    reviews: [Review]
    createdAt: String!
    updatedAt: String!
  }

  type Review {
    id: String!
    author: User!
    rating: String! # Rating!
    review: String!
    package: String! # Package! Populate Later
    createdAt: String!
    updatedAt: String!
  }

  type Flag {
    id: String!
    by: User!
    review: Review!
    createdAt: String!
    updatedAt: String!
  }

  # Non-Database fields
  type Package {
    name: String!
    type: String!
    version: String!
    maintainers: [Maintainer]
    githubRepoUrl: String
    description: String
    reviews: [Review]
    rating: Float
    isUserMaintainer: Boolean
    hasUserReviewed: Boolean
  }

  type Rating {
    score: Int!
    total: Int!
  }

  input RatingInput {
    score: Int!
    total: Int!
  }

  type Maintainer {
    username: String!
    email: String!
  }

  # Mutations
  type Mutation {
    exampleMutation: String
    loginMutation(codeForToken: String!): User
    writeReview(
      review: String!
      rating: String! # RatingInput!
      packageName: String!
      currentUserToken: String!
    ): Review
    flagReview(reviewId: String!, currentUserToken: String!): Flag!
  }

  # Queries
  type Query {
    exampleQuery: String
    getCurrentUser(token: String): User
    getPackageAndReviews(
      slug: String!
      type: String!
      currentUserToken: String
    ): Package
    searchPackage(
      searchString: String!
      skip: Int = 0
      limit: Int = 5
    ): [Package]
  }
`

export default typeDefs
