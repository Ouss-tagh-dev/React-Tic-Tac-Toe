
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-BJMP9P2M9H';
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
