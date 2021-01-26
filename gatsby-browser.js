import { initMetricool, trackVisit } from './src/utils/gdpr';

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === `undefined`) {
        await import(`intersection-observer`);
    }
    initMetricool();
}

export const onRouteUpdate = ({ location }) => {
    trackVisit(location);
}
