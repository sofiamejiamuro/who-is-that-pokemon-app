import React from 'react';
import { Button } from '@material-ui/core';

const PokemonApp = () => {
  return (
    <div>
      <h1>何だこれはポケモン</h1>
      <Button variant="outlined" color="primary">
        Search
      </Button>
    </div>
  )
}

export default PokemonApp;
