import axios from "axios";

const localStorage = window.localStorage;

const loadBooks = async ({keyword, sort, pageIndex, pageSize}) => {
  const response = await axios.get(process.env.REACT_APP_BEEP_API + '/api/management/books', {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }, params: {
      name: keyword,
      sort: sort,
      pageIndex: pageIndex,
      pageSize: pageSize
    }
  });

  return response.data;
}

const createBook = async (bookForm) => {
  return await axios.post(process.env.REACT_APP_BEEP_API + 'api/management/books', bookForm, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
  });
}

const editBook = async (bookForm, bookId) => {
  return await axios.put(process.env.REACT_APP_BEEP_API + '/api/management/books/' + bookId, bookForm, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
  })
}

const deleteBook = async (bookId) => {
  return await axios.delete(process.env.REACT_APP_BEEP_API + '/api/management/books/' + bookId, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
}

const loadDevices = async ({keyword, sort, pageIndex, pageSize}) => {
  const response = await axios.get(process.env.REACT_APP_BEEP_API + '/api/management/devices', {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }, params: {
      name: keyword,
      sort: sort,
      pageIndex: pageIndex,
      pageSize: pageSize,
    }
  })

  return response.data;
}

const createDevice = async (deviceForm) => {
  return await axios.post(process.env.REACT_APP_BEEP_API + '/api/management/devices', deviceForm, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
}

const editDevice = async (deviceForm, deviceId) => {
  return await axios.put(process.env.REACT_APP_BEEP_API + '/api/management/devices/' + deviceId, deviceForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
}

const deleteDevice = async (deviceId) => {
  return await axios.delete(process.env.REACT_APP_BEEP_API + '/api/management/devices/' + deviceId, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
}


export default {
  loadBooks,
  createBook,
  editBook,
  deleteBook,
  loadDevices,
  createDevice,
  editDevice,
  deleteDevice
}
