import {
  Routes as ReactRouterDomRoutes,
  Route,
  useRouteError,
} from "react-router-dom";
import { Home, GiftList } from "./pages";

const Routes = () => (
  <ReactRouterDomRoutes>
    <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
    <Route
      path="/gift-list"
      element={<GiftList />}
      errorElement={<ErrorBoundary />}
    />
  </ReactRouterDomRoutes>
);

const ErrorBoundary = () => {
  const error = useRouteError();

  const renderErrorMessage = () => {
    if (error instanceof Error) {
      return error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "statusText" in error
    ) {
      return (error as { statusText?: string }).statusText;
    }

    return "Unknown error occurred.";
  };

  return (
    <div role="alert">
      <h1>Sorry, an unexpected error has occurred.</h1>
      <p>{renderErrorMessage()}</p>
    </div>
  );
};

export default Routes;
