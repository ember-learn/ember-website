import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GridDotsComponent extends Component {
  @tracked count = 0;

  increment = () => (this.count += 1);
}
