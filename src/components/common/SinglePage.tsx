import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SingleMoviePage from 'components/pages/SingleMoviePage';
import { movieItemActions, selectmovieItemList } from 'features/movieItem/movieItemSlice';
import { selectSingleMovieList, singleMovieActions } from 'features/singleMovie/singleMovieSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function SinglePage() {
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()
  const singleList = useAppSelector(selectmovieItemList)
  const singleList2 = useAppSelector(selectSingleMovieList)

  useEffect(() => {
    dispatch(movieItemActions.fetchmovieItemList(imdb_id))
    dispatch(singleMovieActions.fetchSingleMovieList(imdb_id))
    console.log(
      '1 la movie Item '+singleList,
      '2 la sing Item ' +singleList2
    )
    
  }, [imdb_id])


  
  return (
    <div>
        <SingleMoviePage singleList={singleList2} />
    </div>
  );
}