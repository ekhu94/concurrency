import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import getPokemon from '../services/getPokemon';

export default class TutorialComponent extends Component {
  @tracked pokemon = null;
  @tracked loadingState = false;

  @action async test() {
    if (this.loadingState) return;
    try {
      this.loadingState = true;
      const pokemon = await getPokemon();
      if (!this.isDestroyed) {
        this.pokemon = pokemon.data.name;
      }
    } catch (e) {
      console.log(e);
    } finally {
      if (!this.isDestroyed) {
        this.loadingState = false;
      }
    }
  }
}
