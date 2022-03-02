import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Popover extends Component {
  @tracked isOpen = false;

  toggle = () => (this.isOpen = !this.isOpen);
}
