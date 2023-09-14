import axios from 'axios';

const GET_USER = `
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      email
      name
      photoURL
    }
  }
`;

const apiUrl = 'https://omniapi.letsloopin.com/graphql';

const headers = {
  Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  'Content-Type': 'application/json',
  'namespace': 'huler',
  'userId': 1,
};

axios({
  data: {
    query: GET_USER,
    variables: {
      id: 1
    }
  },
  headers: headers,
  method: 'post',
  url: apiUrl,
})
  .then((response) => {
    console.log('GraphQL Response:', response.data);
  })
  .catch((error) => {
    console.error('GraphQL Request Error:', error);
  });