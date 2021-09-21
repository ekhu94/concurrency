import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import getPokemon from '../services/getPokemon';

export default class Tutorial2Component extends Component {
  @tracked pokemon = null;

  @task
  *findPokemon() {
    const pokemon = yield getPokemon();
    this.pokemon = pokemon.data.name;
  }
}
