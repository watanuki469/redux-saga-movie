import { Box } from '@mui/material';
import { Movie } from 'models';
import React from 'react';
import { useState } from 'react';
// import { useForm } from 'react-hook-form';


export interface ShowMovieProps {
  initialValues?: Movie;
}

export default function ShowMovie({ initialValues }: ShowMovieProps) {
  const [error, setError] = useState<string>('');
//   const {
//     control,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useForm<Movie>({
//     defaultValues: initialValues,
//   });

  return (
    <Box maxWidth={400}>
      <form>

       
      </form>
    </Box>
  );
}