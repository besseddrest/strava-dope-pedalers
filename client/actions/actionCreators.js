export function requestComplete(value) {
  return {
    type: 'REQUEST_COMPLETE',
    value
  }
}

export function setActivites(value) {
  return {
    type: 'SET_ACTIVITIES',
    value
  }
}

export function setRide(value) {
  return {
    type: 'SET_RIDE',
    value
  }
}

export function selectActivity(index) {
  return {
    type: 'SELECT_ACTIVITY',
    index
  }
}
