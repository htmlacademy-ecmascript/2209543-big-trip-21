import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import {render} from '../render.js';

export default class TripPresenter {

  eventListViewComponent = new EventListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.eventListViewComponent, this.boardContainer);
    render(new PointEditView(), this.eventListViewComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventListViewComponent.getElement());
    }
  }
}

