import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import {
  setMenu,
  setMenuErr,
  setInstructors,
  setInstructorsErr,
  setCourses,
  setCoursesErr,
} from '../features/data/slices/dataSlice';
import { useGetMenuQuery } from '../features/data/slices/menu/menuApiSlice';
import { useGetInstructorsQuery } from '../features/data/slices/instructor/instructorApiSlice';
import { useGetCoursesQuery } from '../features/data/slices/course/courseApiSlice';

const useFetchData = () => {
  const dispatch = useAppDispatch();
  const {
    data: menuData,
    isLoading: isMenuLoading,
    isSuccess: isMenuSuccess,
    isError: isMenuErr,
    error: menuErr,
  } = useGetMenuQuery();

  const {
    data: instructorsData,
    isLoading: isIntructorsLoading,
    isSuccess: isIntructorsSuccess,
    isError: isIsInstructorsErr,
    error: instructorsErr,
  } = useGetInstructorsQuery();

  const {
    data: coursesData,
    isLoading: isCoursesLoading,
    isSuccess: isCoursesSuccess,
    isError: isIsCoursesErr,
    error: coursesErr,
  } = useGetCoursesQuery();

  const useEffectDependencyArray = [
    isMenuLoading,
    isIntructorsLoading,
    isCoursesLoading,
    dispatch,
  ];

  useEffect(() => {
    if (isMenuErr) setMenuErr(menuErr);
    if (isIsInstructorsErr) setInstructorsErr(instructorsErr);
    if (isIsCoursesErr) setCoursesErr(coursesErr);

    if (isMenuSuccess && isIntructorsSuccess && isCoursesSuccess) {
      dispatch(setMenu(menuData));
      dispatch(setInstructors(instructorsData));
      dispatch(setCourses(coursesData));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useEffectDependencyArray);
};

export default useFetchData;
