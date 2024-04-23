import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;






export const UPDATE_MEMBER = gql`
  mutation updateMember($memberId: ID!, $memberInput: MemberInput!) {
    updateMember(memberId: $memberId, memberInput: $memberInput) {
      _id
      memberNumber
      firstName
      lastName
      baptismalName
      gender
      startDate
      endDate
      email
      primaryPhone
      secondaryPhone
    }
  }
`;
// export const ADD_FAMILY =gql`

// mutation addfamily($input: FamilyInput!) {
  
//   addfamily(familyInput: $input){
//     _id
//     firstName
//     middleName
//     lastName
//     baptismalName
//     gender
//     relationShip
//     createdDate
//   }
// }
//                       )`

export const ADD_MEMBER = gql`
  mutation addMember($input: MemberInput!) {
    addMember(memberInput: $input) {
      _id
      memberNumber
      firstName
      middleName
      lastName
      baptismalName
      gender
      startDate
      endDate
      email
      primaryPhone
      secondaryPhone
      paymentFlag
      created_date
      addresses {
        street
        street2
        city
        state
        zip
        country
        created_date
      }
      memberFamilies {
        id
        firstName
        middleName
        lastName
        baptismalName
        gender
        relationShip
        createdDate
      }
      payment {
        amount
        month
        year
        paymentMethod
        paymentDate
        createdDate
      }
    }
  }
`;


export const GET_ALL_MEMBERS = gql`
  query GetAllMembers {
    getAllMembers {
      _id
      memberNumber
      firstName
      lastName
      baptismalName
      gender
      startDate
      endDate
      email
      primaryPhone
      secondaryPhone
      paymentFlag
      created_date
      addresses {
        street
        street2
        city
        state
        zip
        country
        created_date
      }
      memberFamilies {
        id
        firstName
        middleName
        lastName
        baptismalName
        gender
        relationShip
        createdDate
      }
      payment {
        amount
        month
        year
        paymentMethod
        paymentDate
        createdDate
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
