import {render, RenderPosition} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import TripPresenter from './presenter/trip-presenter.js';

const tripMainContainer = document.querySelector('.trip-main');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({boardContainer: siteMainElement});

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteHeaderElement);

tripPresenter.init();
