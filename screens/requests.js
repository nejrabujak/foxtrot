import axios from 'axios';

const WP_API_URL = 'https://6470c23e3de51400f724e3f9.mockapi.io/wp';
const SHOP_DATA_API_URL =
  'https://6470c23e3de51400f724e3f9.mockapi.io/wp/dresses';

export const signUp = async (inputData) => {
  inputData.weddingDate = new Date();
  try {
    const responseData = await axios({
      method: 'post',
      url: `${WP_API_URL}/users`,
      data: inputData,
    });
    return {
      userInfo: responseData.data,
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};

export const getUsers = async () => {
  try {
    const responseData = await axios({
      method: 'get',
      url: `${WP_API_URL}/users`,
    });

    return responseData.data;
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};

export const userLogin = async ({ userName, userPassword }) => {
  const allUsers = await getUsers();

  const userByUsername = allUsers.find((user) => user.username === userName);

  if (userByUsername && userByUsername?.password === userPassword) {
    return {
      success: true,
      message: '',
      userInfo: userByUsername,
      isAdmin: userByUsername?.username?.toLowerCase() === 'admin',
    };
  }

  return {
    success: false,
    message: 'Failed!',
    userInfo: null,
    isAdmin: false,
  };
};

export const getItemsByCategory = async (currentCategoryName) => {
  const resData = await axios({
    method: 'get',
    url: SHOP_DATA_API_URL,
  });

  const allItems = resData.data || [];

  const itemsByCategory = allItems.filter(
    (item) => item.category === currentCategoryName
  );

  return itemsByCategory;
};

export const getCategoryData = async () => {
  const resData = await axios({
    method: 'get',
    url: SHOP_DATA_API_URL,
  });

  const allItems = resData.data || [];

  return allItems;
};

export const createNewItem = async (inputData) => {
  try {
    const responseData = await axios({
      method: 'post',
      url: SHOP_DATA_API_URL,
      data: inputData,
    });
    return {
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};

export const editItem = async (inputData, itemId) => {
  try {
    await axios({
      method: 'put',
      url: `${SHOP_DATA_API_URL}/${itemId}`,
      data: inputData,
    });
    return {
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};

export const updateUserInfo = async (updatedUserInfo) => {
  try {
    const userId = updatedUserInfo.id;

    await axios.put(`${WP_API_URL}/users/${userId}`, updatedUserInfo);
    console.log('User wishList updated successfully!');
  } catch (err) {
    console.error('Failed to update user wishList:', error);
  }
};

export const deleteItemById = async (itemId) => {
  try {
    const response = await axios.delete(`${SHOP_DATA_API_URL}/${itemId}`);
    return response.data;
  } catch (err) {
    console.error('Error deleting item:', err);
    throw err;
  }
};
