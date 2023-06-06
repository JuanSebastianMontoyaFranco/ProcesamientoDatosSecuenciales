import {
  HOST,
  NO_ITEMS_ERROR,
} from './Constants'

function handleErrors(response) {
  if (response.status >= 500) {
    throw Error(response.statusText)
  }
  return response
}


function validateResponse(response) {
  if (response.hasOwnProperty('error')) {
    return response.error
  }

  if (!response.hasOwnProperty('rows')) {
    if (response.length < 1) {
      return NO_ITEMS_ERROR
    }

    return null
  }

  let rows = response.rows
  if (rows.length < 1) {
    return NO_ITEMS_ERROR
  }

  return null
}

// SIMPLE GET REQUESTS
export function getElementById(path, responseHandler) {
  // Path should have id as param
  let url = HOST + path

  fetch(url, {
    method: 'GET',
    headers: {
      token: sessionStorage.getItem('token'),
    },
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((response) => {
      if (response.hasOwnProperty('error')) {
        return responseHandler('error', response.error)
      }

      if (response.hasOwnProperty('rows')) {
        return responseHandler('success', response.rows[0])
      }

      return responseHandler('success', response[0])
    })
    .catch((error) => responseHandler('error', error))
}

export function getElements(key, path, responseHandler) {
  // Make the request if there is nothing stored
  let url = HOST + path
  fetch(url, {
    method: 'GET',
    headers: {
      token: sessionStorage.getItem('token'),
    },
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((response) => {
      let validation = validateResponse(response)
      if (validation != null) {
        return responseHandler('error', validation)
      }

      let rows = response.rows ? response.rows : response
      let json = JSON.stringify(rows)
      sessionStorage.setItem(key, json)

      return responseHandler('success', rows)
    })
    .catch((error) => responseHandler('error', error))
}

