import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainClass: '',
  secondaryClass: '',
  displayCourseTube: true,
  displayContactMe: false,
  displayCreateContent: false,
  displayAllCourses: true,
  seekingCourse: false,
  requiredCourse: '',
  seekingInstructor: false,
  requiredInstructor: '',
  userSearchValue: '',
};

export const webBodySlice = createSlice({
  name: 'webBody',
  initialState,
  reducers: {
    handleWebBodySetUp: (state, action) => {
      state.mainClass = action.payload.mainClass;
      state.secondaryClass = action.payload.secondaryClass;
    },
    handleContactMeBtnClick: (state) => {
      state.displayCourseTube = false;
      state.displayCreateContent = false;
      state.displayContactMe = true;
    },
    handleCreateContentBtnClick: (state) => {
      state.displayCourseTube = false;
      state.displayCreateContent = true;
      state.displayContactMe = false;
    },
    handleCloseBtnClick: (state) => {
      state.displayCourseTube = true;
      state.displayAllCourses = true;
      state.displayContactMe = false;
      state.displayCreateContent = false;
    },
    handleSidebarHomeClick: (state) => {
      state.displayCourseTube = true;
      state.displayCreateContent = false;
      state.displayContactMe = false;
      state.displayAllCourses = true;
      state.seekingCourse = false;
      state.seekingInstructor = false;
      state.userSearchValue = '';
    },
    handleSidebarCourseClick: (state, action) => {
      state.requiredCourse = action.payload.toLowerCase();
      state.displayCourseTube = true;
      state.seekingCourse = true;
      state.displayContactMe = false;
      state.displayCreateContent = false;
      state.displayAllCourses = false;
      state.seekingInstructor = false;
      state.userSearchValue = '';
      state.requiredInstructor = '';
    },
    handleSidebarInstructorClick: (state, action) => {
      state.requiredInstructor = action.payload.toLowerCase();
      state.displayCourseTube = true;
      state.seekingInstructor = true;
      state.displayContactMe = false;
      state.displayCreateContent = false;
      state.displayAllCourses = false;
      state.seekingCourse = false;
      state.userSearchValue = '';
      state.requiredCourse = '';
    },
    handleUserSearch: (state, action) => {
      state.userSearchValue = action.payload.toLowerCase();
      state.displayCourseTube = true;
      state.displayContactMe = false;
      state.displayCreateContent = false;
      state.displayAllCourses = false;
      state.seekingCourse = false;
      state.seekingInstructor = false;
      state.requiredCourse = '';
      state.requiredInstructor = '';
    },
  },
});

export const MainClass = (state) => state.webBody.mainClass;
export const SecondaryClass = (state) => state.webBody.secondaryClass;
export const DisplayCourseTube = (state) => state.webBody.displayCourseTube;
export const DisplayContactMe = (state) => state.webBody.displayContactMe;
export const DisplayCreateContent = (state) => state.webBody.displayCreateContent;
export const DisplayAllCourses = (state) => state.webBody.displayAllCourses;
export const SeekingCourse = (state) => state.webBody.seekingCourse;
export const RequiredCourse = (state) => state.webBody.requiredCourse;
export const SeekingInstructor = (state) => state.webBody.seekingInstructor;
export const RequiredInstructor = (state) => state.webBody.requiredInstructor;
export const UserSearchValue = (state) => state.webBody.userSearchValue;

export const {
  handleWebBodySetUp,
  handleContactMeBtnClick,
  handleCreateContentBtnClick,
  handleCloseBtnClick,
  handleSidebarHomeClick,
  handleSidebarCourseClick,
  handleSidebarInstructorClick,
  handleUserSearch,
} = webBodySlice.actions;

export default webBodySlice.reducer;
