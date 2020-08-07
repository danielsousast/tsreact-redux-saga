import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { loadRequest } from "../../store/ducks/repositories/actions";

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state:ApplicationState) => state.repositories.data);
  const dispatch = useDispatch();

  function handleLoadRepositories() {
    dispatch(loadRequest())
  }

  return (
    <div>
      <button onClick={handleLoadRepositories}>Load Repositories</button>
    <ul>
      {repositories.map(repository => (
        <li key={repository.id}>{repository.name}</li>
      ))}
    </ul>
    </div>

  )
}

export default RepositoryList;
