const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getMember(memberId: ID!): Member
    getAllMembers: [Member]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    addMember(memberInput: MemberInput!): Member
    updateMember(memberId: ID!, memberInput: MemberInput!): Member
    deleteMember(memberId: ID!): Member
    login(email: String!, password: String!): AuthPayload!
  }

  type AuthPayload {
    token: ID!
    user: User!
  }
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: String
    user: User
  }
  type Member {
    _id: ID!
    memberNumber: String!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    startDate: String!
    endDate: String
    email: String
    primaryPhone: String
    secondaryPhone: String
    paymentFlag: Boolean
    created_date: String!
    payment: [Payment]
    addresses: [Address]
    memberFamilies: [MemberFamily]
  }

  input MemberInput {
    memberNumber: String!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    startDate: String!
    endDate: String
    email: String
    primaryPhone: String
    secondaryPhone: String
    paymentFlag: Boolean
    payment: [PaymentInput]
    addresses: [AddressInput]
    memberFamilies: [MemberFamilyInput]
  }

  type Address {
    street: String!
    street2: String
    city: String!
    state: String!
    zip: String!
    country: String!
    created_date: String!
  }

  input AddressInput {
    street: String!
    street2: String
    city: String!
    state: String!
    zip: String!
    country: String!
    created_date: String!
  }

  type MemberFamily {
    id: ID!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    relationShip: String!
    createdDate: String!
  }

  input MemberFamilyInput {
    id: ID!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    relationShip: String!
    createdDate: String!
  }

 
  type Membership {
    id: ID!
    name: String!
    amount: Int!
    startDate: String!
    endDate: String
    created_date: String!
  }

  input MembershipInput {
    id: ID!
    name: String!
    amount: Int!
    startDate: String!
    endDate: String
    created_date: String!
  }

  type Payment {
    amount: Int!
    month: String!
    year: String!
    paymentMethod: String
    paymentDate: String!
    createdDate: String!
  }

  input PaymentInput {
    amount: Int!
    month: String!
    year: String!
    paymentMethod: String
    paymentDate: String!
    createdDate: String!
  }
`;

module.exports = typeDefs;