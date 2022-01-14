import CityList from "./CityList";
import CityListMaxDDL from "./CityListMaxDDL";
import { CityContext, CityProvider } from "./contexts/CityContext";
import CityDetail from "./CityDetail";
import { useContext, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import {SearchBar} from "./SearchBar";

function CityLayout() {
  const { selectedCityId } = useContext(CityContext);
  return (
    <>
      <CityListMaxDDL />
      <SearchBar />
      <hr/>
      <CityList displayCount={5} />
      { selectedCityId && <CityDetail cityId={selectedCityId} /> }
    </>
  );
}

function App() {
  function MyErrorBoundaryFallback({ errorMessage, errorStatus }) {
    return (
      <div className="container">
        <h1>Error From CityLayout Component</h1>
        <div className="row">
          Error Status: <b>{errorStatus}</b>
        </div>
        <div className="row">
          ErrorMessage: <b>{errorMessage}</b>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={<MyErrorBoundaryFallback />}>
      <Suspense fallback={<div>Loading..</div>}>
        <div className="container">
          <CityProvider>
            <CityLayout />
          </CityProvider>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
