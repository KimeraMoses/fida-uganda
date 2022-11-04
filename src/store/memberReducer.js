import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'member',
  initialState: {
    member: null,
  },
  reducers: {
    setMember: (state, action) => {
      // console.log('action', action)
      if (!state.member) {
        state.member = action.payload;
      } else {
        state.member = { ...state.member, ...action.payload };
      }
    },
    setMemberNull: (state) => {
      state.member = null;
    },
  },
});

const { setMember, setMemberNull } = slice.actions;

export const selectMember = (member) => ({
  type: setMember.type,
  payload: member,
});

export const resetMember = () => ({
  type: setMemberNull.type,
});

export default slice.reducer;
