import axios from 'axios';

const CREATE_USER_QUERY = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
};

axios({
  data: {
    query: CREATE_USER_QUERY,
    variables: {
      input: {
        email: "test@test.com"
      }
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