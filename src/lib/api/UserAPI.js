import axios from "axios";

const localStorage = window.localStorage;

const loadProfile = async () => {
  const response = await axios.get(process.env.REACT_APP_BEEP_API + '/api/user/profile', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }, params: {
      accessToken: localStorage.getItem('accessToken')
    }
  })

  return response.data;
}

const loadRented = async ({userId}) => {
  const response = await axios.get(process.env.REACT_APP_BEEP_API + '/api/user/' + userId + '/rents', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }, params: {
      accessToken: localStorage.getItem('accessToken')
    }
  })

  return response.data;
}

const loadReturned = async ({userId}) => {
  const response = await axios.get(process.env.REACT_APP_BEEP_API + '/api/user/' + userId + '/returns', {
    headers: {
      'Content-Type': 'application/json',
    }, params: {
      accessToken: localStorage.getItem('accessToken')
    }
  })

  return response.data;
}

const loadBookmark = async ({userId}) => {
  const response = await axios.get(process.env.REACT_APP_BEEP_API + '/api/user/' + userId + '/bookmarks', {
    headers: {
      'Content-Type': 'application/json',
    }, params: {
      accessToken: localStorage.getItem('accessToken')
    }
  })

  return response.data;
}

export default {loadProfile, loadRented, loadReturned, loadBookmark}
