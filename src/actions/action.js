import axios from 'axios';

export function fetchParks() {
  return (dispatch) => {
    axios
      .get('https://boiling-earth-63862.herokuapp.com/parks.json')
      .then((res) => {
        dispatch({type: 'FETCH_FINISH', payload: res.data});
      })
  }
}
