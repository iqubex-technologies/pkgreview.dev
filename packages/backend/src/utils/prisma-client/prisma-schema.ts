// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `
  type AggregateFlag {
    count: Int!
  }

  type AggregateReview {
    count: Int!
  }

  type AggregateUser {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  scalar DateTime

  type Flag {
    id: ID!
    by: User!
    review: Review!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type FlagConnection {
    pageInfo: PageInfo!
    edges: [FlagEdge]!
    aggregate: AggregateFlag!
  }

  input FlagCreateInput {
    id: ID
    by: UserCreateOneInput!
    review: ReviewCreateOneInput!
  }

  type FlagEdge {
    node: Flag!
    cursor: String!
  }

  enum FlagOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type FlagPreviousValues {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type FlagSubscriptionPayload {
    mutation: MutationType!
    node: Flag
    updatedFields: [String!]
    previousValues: FlagPreviousValues
  }

  input FlagSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: FlagWhereInput
    AND: [FlagSubscriptionWhereInput!]
    OR: [FlagSubscriptionWhereInput!]
    NOT: [FlagSubscriptionWhereInput!]
  }

  input FlagUpdateInput {
    by: UserUpdateOneRequiredInput
    review: ReviewUpdateOneRequiredInput
  }

  input FlagWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    by: UserWhereInput
    review: ReviewWhereInput
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [FlagWhereInput!]
    OR: [FlagWhereInput!]
    NOT: [FlagWhereInput!]
  }

  input FlagWhereUniqueInput {
    id: ID
  }

  scalar Long

  type Mutation {
    createFlag(data: FlagCreateInput!): Flag!
    updateFlag(data: FlagUpdateInput!, where: FlagWhereUniqueInput!): Flag
    upsertFlag(
      where: FlagWhereUniqueInput!
      create: FlagCreateInput!
      update: FlagUpdateInput!
    ): Flag!
    deleteFlag(where: FlagWhereUniqueInput!): Flag
    deleteManyFlags(where: FlagWhereInput): BatchPayload!
    createReview(data: ReviewCreateInput!): Review!
    updateReview(
      data: ReviewUpdateInput!
      where: ReviewWhereUniqueInput!
    ): Review
    updateManyReviews(
      data: ReviewUpdateManyMutationInput!
      where: ReviewWhereInput
    ): BatchPayload!
    upsertReview(
      where: ReviewWhereUniqueInput!
      create: ReviewCreateInput!
      update: ReviewUpdateInput!
    ): Review!
    deleteReview(where: ReviewWhereUniqueInput!): Review
    deleteManyReviews(where: ReviewWhereInput): BatchPayload!
    createUser(data: UserCreateInput!): User!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    updateManyUsers(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload!
    upsertUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User!
    deleteUser(where: UserWhereUniqueInput!): User
    deleteManyUsers(where: UserWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Query {
    flag(where: FlagWhereUniqueInput!): Flag
    flags(
      where: FlagWhereInput
      orderBy: FlagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Flag]!
    flagsConnection(
      where: FlagWhereInput
      orderBy: FlagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): FlagConnection!
    review(where: ReviewWhereUniqueInput!): Review
    reviews(
      where: ReviewWhereInput
      orderBy: ReviewOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Review]!
    reviewsConnection(
      where: ReviewWhereInput
      orderBy: ReviewOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): ReviewConnection!
    user(where: UserWhereUniqueInput!): User
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User]!
    usersConnection(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): UserConnection!
    node(id: ID!): Node
  }

  type Review {
    id: ID!
    author: User!
    rating: String!
    review: String!
    package: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type ReviewConnection {
    pageInfo: PageInfo!
    edges: [ReviewEdge]!
    aggregate: AggregateReview!
  }

  input ReviewCreateInput {
    id: ID
    author: UserCreateOneWithoutReviewsInput!
    rating: String!
    review: String!
    package: String!
  }

  input ReviewCreateManyWithoutAuthorInput {
    create: [ReviewCreateWithoutAuthorInput!]
    connect: [ReviewWhereUniqueInput!]
  }

  input ReviewCreateOneInput {
    create: ReviewCreateInput
    connect: ReviewWhereUniqueInput
  }

  input ReviewCreateWithoutAuthorInput {
    id: ID
    rating: String!
    review: String!
    package: String!
  }

  type ReviewEdge {
    node: Review!
    cursor: String!
  }

  enum ReviewOrderByInput {
    id_ASC
    id_DESC
    rating_ASC
    rating_DESC
    review_ASC
    review_DESC
    package_ASC
    package_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type ReviewPreviousValues {
    id: ID!
    rating: String!
    review: String!
    package: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input ReviewScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    rating: String
    rating_not: String
    rating_in: [String!]
    rating_not_in: [String!]
    rating_lt: String
    rating_lte: String
    rating_gt: String
    rating_gte: String
    rating_contains: String
    rating_not_contains: String
    rating_starts_with: String
    rating_not_starts_with: String
    rating_ends_with: String
    rating_not_ends_with: String
    review: String
    review_not: String
    review_in: [String!]
    review_not_in: [String!]
    review_lt: String
    review_lte: String
    review_gt: String
    review_gte: String
    review_contains: String
    review_not_contains: String
    review_starts_with: String
    review_not_starts_with: String
    review_ends_with: String
    review_not_ends_with: String
    package: String
    package_not: String
    package_in: [String!]
    package_not_in: [String!]
    package_lt: String
    package_lte: String
    package_gt: String
    package_gte: String
    package_contains: String
    package_not_contains: String
    package_starts_with: String
    package_not_starts_with: String
    package_ends_with: String
    package_not_ends_with: String
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [ReviewScalarWhereInput!]
    OR: [ReviewScalarWhereInput!]
    NOT: [ReviewScalarWhereInput!]
  }

  type ReviewSubscriptionPayload {
    mutation: MutationType!
    node: Review
    updatedFields: [String!]
    previousValues: ReviewPreviousValues
  }

  input ReviewSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: ReviewWhereInput
    AND: [ReviewSubscriptionWhereInput!]
    OR: [ReviewSubscriptionWhereInput!]
    NOT: [ReviewSubscriptionWhereInput!]
  }

  input ReviewUpdateDataInput {
    author: UserUpdateOneRequiredWithoutReviewsInput
    rating: String
    review: String
    package: String
  }

  input ReviewUpdateInput {
    author: UserUpdateOneRequiredWithoutReviewsInput
    rating: String
    review: String
    package: String
  }

  input ReviewUpdateManyDataInput {
    rating: String
    review: String
    package: String
  }

  input ReviewUpdateManyMutationInput {
    rating: String
    review: String
    package: String
  }

  input ReviewUpdateManyWithoutAuthorInput {
    create: [ReviewCreateWithoutAuthorInput!]
    delete: [ReviewWhereUniqueInput!]
    connect: [ReviewWhereUniqueInput!]
    set: [ReviewWhereUniqueInput!]
    disconnect: [ReviewWhereUniqueInput!]
    update: [ReviewUpdateWithWhereUniqueWithoutAuthorInput!]
    upsert: [ReviewUpsertWithWhereUniqueWithoutAuthorInput!]
    deleteMany: [ReviewScalarWhereInput!]
    updateMany: [ReviewUpdateManyWithWhereNestedInput!]
  }

  input ReviewUpdateManyWithWhereNestedInput {
    where: ReviewScalarWhereInput!
    data: ReviewUpdateManyDataInput!
  }

  input ReviewUpdateOneRequiredInput {
    create: ReviewCreateInput
    update: ReviewUpdateDataInput
    upsert: ReviewUpsertNestedInput
    connect: ReviewWhereUniqueInput
  }

  input ReviewUpdateWithoutAuthorDataInput {
    rating: String
    review: String
    package: String
  }

  input ReviewUpdateWithWhereUniqueWithoutAuthorInput {
    where: ReviewWhereUniqueInput!
    data: ReviewUpdateWithoutAuthorDataInput!
  }

  input ReviewUpsertNestedInput {
    update: ReviewUpdateDataInput!
    create: ReviewCreateInput!
  }

  input ReviewUpsertWithWhereUniqueWithoutAuthorInput {
    where: ReviewWhereUniqueInput!
    update: ReviewUpdateWithoutAuthorDataInput!
    create: ReviewCreateWithoutAuthorInput!
  }

  input ReviewWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    author: UserWhereInput
    rating: String
    rating_not: String
    rating_in: [String!]
    rating_not_in: [String!]
    rating_lt: String
    rating_lte: String
    rating_gt: String
    rating_gte: String
    rating_contains: String
    rating_not_contains: String
    rating_starts_with: String
    rating_not_starts_with: String
    rating_ends_with: String
    rating_not_ends_with: String
    review: String
    review_not: String
    review_in: [String!]
    review_not_in: [String!]
    review_lt: String
    review_lte: String
    review_gt: String
    review_gte: String
    review_contains: String
    review_not_contains: String
    review_starts_with: String
    review_not_starts_with: String
    review_ends_with: String
    review_not_ends_with: String
    package: String
    package_not: String
    package_in: [String!]
    package_not_in: [String!]
    package_lt: String
    package_lte: String
    package_gt: String
    package_gte: String
    package_contains: String
    package_not_contains: String
    package_starts_with: String
    package_not_starts_with: String
    package_ends_with: String
    package_not_ends_with: String
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [ReviewWhereInput!]
    OR: [ReviewWhereInput!]
    NOT: [ReviewWhereInput!]
  }

  input ReviewWhereUniqueInput {
    id: ID
  }

  type Subscription {
    flag(where: FlagSubscriptionWhereInput): FlagSubscriptionPayload
    review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
    user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  }

  type User {
    id: ID!
    name: String!
    email: String!
    githubUsername: String!
    githubId: Int!
    reviews(
      where: ReviewWhereInput
      orderBy: ReviewOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Review!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }

  input UserCreateInput {
    id: ID
    name: String!
    email: String!
    githubUsername: String!
    githubId: Int!
    reviews: ReviewCreateManyWithoutAuthorInput
  }

  input UserCreateOneInput {
    create: UserCreateInput
    connect: UserWhereUniqueInput
  }

  input UserCreateOneWithoutReviewsInput {
    create: UserCreateWithoutReviewsInput
    connect: UserWhereUniqueInput
  }

  input UserCreateWithoutReviewsInput {
    id: ID
    name: String!
    email: String!
    githubUsername: String!
    githubId: Int!
  }

  type UserEdge {
    node: User!
    cursor: String!
  }

  enum UserOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    email_ASC
    email_DESC
    githubUsername_ASC
    githubUsername_DESC
    githubId_ASC
    githubId_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type UserPreviousValues {
    id: ID!
    name: String!
    email: String!
    githubUsername: String!
    githubId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type UserSubscriptionPayload {
    mutation: MutationType!
    node: User
    updatedFields: [String!]
    previousValues: UserPreviousValues
  }

  input UserSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: UserWhereInput
    AND: [UserSubscriptionWhereInput!]
    OR: [UserSubscriptionWhereInput!]
    NOT: [UserSubscriptionWhereInput!]
  }

  input UserUpdateDataInput {
    name: String
    email: String
    githubUsername: String
    githubId: Int
    reviews: ReviewUpdateManyWithoutAuthorInput
  }

  input UserUpdateInput {
    name: String
    email: String
    githubUsername: String
    githubId: Int
    reviews: ReviewUpdateManyWithoutAuthorInput
  }

  input UserUpdateManyMutationInput {
    name: String
    email: String
    githubUsername: String
    githubId: Int
  }

  input UserUpdateOneRequiredInput {
    create: UserCreateInput
    update: UserUpdateDataInput
    upsert: UserUpsertNestedInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneRequiredWithoutReviewsInput {
    create: UserCreateWithoutReviewsInput
    update: UserUpdateWithoutReviewsDataInput
    upsert: UserUpsertWithoutReviewsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateWithoutReviewsDataInput {
    name: String
    email: String
    githubUsername: String
    githubId: Int
  }

  input UserUpsertNestedInput {
    update: UserUpdateDataInput!
    create: UserCreateInput!
  }

  input UserUpsertWithoutReviewsInput {
    update: UserUpdateWithoutReviewsDataInput!
    create: UserCreateWithoutReviewsInput!
  }

  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    githubUsername: String
    githubUsername_not: String
    githubUsername_in: [String!]
    githubUsername_not_in: [String!]
    githubUsername_lt: String
    githubUsername_lte: String
    githubUsername_gt: String
    githubUsername_gte: String
    githubUsername_contains: String
    githubUsername_not_contains: String
    githubUsername_starts_with: String
    githubUsername_not_starts_with: String
    githubUsername_ends_with: String
    githubUsername_not_ends_with: String
    githubId: Int
    githubId_not: Int
    githubId_in: [Int!]
    githubId_not_in: [Int!]
    githubId_lt: Int
    githubId_lte: Int
    githubId_gt: Int
    githubId_gte: Int
    reviews_every: ReviewWhereInput
    reviews_some: ReviewWhereInput
    reviews_none: ReviewWhereInput
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  input UserWhereUniqueInput {
    id: ID
    email: String
    githubUsername: String
    githubId: Int
  }
`
