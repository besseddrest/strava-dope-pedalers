export function requestComplete(value) {
  return {
    type: 'REQUEST_COMPLETE',
    value
  }
}

export function setActivites(value) {
  console.log('updating');

  return {
    type: 'SET_ACTIVITIES',
    value
  }
}
