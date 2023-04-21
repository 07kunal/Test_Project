import React, { lazy, Suspense, useState } from 'react'
// import FakeApi from './FakeApi'; (this part is lazy loading)
import UseMemoHook from './UseMemoHook';
import Test from './useRefHooks';
import Test2 from './Test2';
import ReferentialEquality from './referential equality/ReferentialEquality';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './errorboundary/ErrorBoundary';
import SingleItem from './singleItem/SingleItem';
import ClientErrorCheckingTab from './checkingError/ClientErrorCheckingTab';
import ClientTable from './clienttable/ClientTable';
import ClientTableCheck from './clientCheckTable/ClientTableCheck';

import MainTable from './maintable/MainTable';
const FakeApi = lazy(() => import("./FakeApi.js"))

function App() {



  return (
    <div className="App">
      {/* <Test2 /> */}
      {/* <Test/> */}
      {/* <ReferentialEquality /> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }} >
        <Suspense fallback={<div>please wait my dear user</div>}> <FakeApi />
        </Suspense>
      </ErrorBoundary> */}
      {/* <UseMemoHook/> */}

      {/* <SingleItem /> */}
      {/* <ClientErrorCheckingTab /> */}
      {/* <ClientTable/> */}

      {/* <ClientTableCheck /> */}


      <MainTable />




    </div>
  );
}

export default App;
