import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  menuErr: '',
  instructors: [],
  instructorsErr: '',
  courses: [],
  coursesErr: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setInstructors: (state, action) => {
      state.instructors = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setMenuErr: (state, action) => {
      state.menuErr = action.payload;
    },
    setInstructorsErr: (state, action) => {
      state.instructorsErr = action.payload;
    },
    setCoursesErr: (state, action) => {
      state.coursesErr = action.payload;
    },
    addLogo: (state, action) => {
      state.menu.push(action.payload);
    },
    addInstructor: (state, action) => {
      state.instructors.push(action.payload);
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    editLogo: (state, action) => {
      const updatedLogo = action.payload;
      state.menu = state.menu.map((logo) => (logo._id === updatedLogo._id ? updatedLogo : logo));
    },
    editInstructor: (state, action) => {
      const updatedInstructor = action.payload;
      state.instructors = state.instructors.map((instructor) => {
        return instructor._id === updatedInstructor._id ? updatedInstructor : instructor;
      });
    },
    editCourse: (state, action) => {
      const updatedCourse = action.payload;
      state.courses = state.courses.map((course) => {
        return course._id === updatedCourse._id ? updatedCourse : course;
      });
    },
    delLogo: (state, action) => {
      state.menu = state.menu.filter((logo) => logo._id !== action.payload);
    },
    delInstructor: (state, action) => {
      state.instructors = state.instructors.filter(
        (instructor) => instructor._id !== action.payload
      );
    },
    delCourse: (state, action) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    },
  },
});

export const MenuData = (state) => state.data.menu;
export const MenuErr = (state) => state.data.menuErr;
export const InstructorsData = (state) => state.data.instructors;
export const InstructorsErr = (state) => state.data.instructorsErr;
export const CoursesData = (state) => state.data.courses;
export const CourseErr = (state) => state.data.coursesErr;

export const {
  setMenu,
  setInstructors,
  setCourses,
  setMenuErr,
  setInstructorsErr,
  setCoursesErr,
  addLogo,
  addInstructor,
  addCourse,
  editLogo,
  editInstructor,
  editCourse,
  delLogo,
  delInstructor,
  delCourse,
} = dataSlice.actions;

export default dataSlice.reducer;
