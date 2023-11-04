const axios = require("axios").default;



const changeUserPicture = (user_id, img) => {
    const options = {
        method: 'PATCH',
        url: `https://${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}`,
        headers: {authorization: 'Bearer ABCD', 'content-type': 'application/json'},
        data: {user_metadata: {picture: img}}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
};

