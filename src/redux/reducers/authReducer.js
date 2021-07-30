import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../../constants/constants';

const initState = null;
// {
// id: 'test-123',
// role: 'ADMIN',
// provider: 'password'
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      console.log(action);
      return {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider,
      };
    case SIGNOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
