import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useTeacher = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isTeacher, isLoading: isTeacherLoading } = useQuery({
        queryKey: ['isTeacher', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/teacher/${user?.email}`);
            return response.data.teacher;
        }
    })

    console.log(isTeacher);

    return [isTeacher, isTeacherLoading]

};

export default useTeacher;