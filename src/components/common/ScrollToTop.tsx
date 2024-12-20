import { useScrollToTop } from '../../hooks/useScrollToTop';

/**
 * Component that handles scrolling to top on route changes.
 * Place this component at the root level of your app.
 */
export default function ScrollToTop() {
  useScrollToTop();
  return null;
}