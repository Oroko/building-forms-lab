export default function manageBand(state = {
  bands: [],
}, action) {
  
  switch(action.type){
    case 'ADD_BANDNAME':
      return {
        ...state,
        bands: state.bands.concat(action.payload.bandName)
      }
    default:
      return state
  }
};
