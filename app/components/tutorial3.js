import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import getPokemons from '../services/getPokemons';

export default class Tutorial3Component extends Component {
  @tracked pokemons = null;

  @task
  *findPokemons() {
    const pokemons = yield getPokemons();
    console.log(pokemons);
    this.pokemons = pokemons.data.results;
  }
}
