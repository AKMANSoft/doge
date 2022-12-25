import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import ('../Containers/home'));
const Mint = React.lazy(() => import ('../Containers/mint'));
const Doge = React.lazy(() => import ('../Containers/doge'));
const HouseOfDoge = React.lazy(() => import ('../Containers/houseOfDoge'));
const HouseOfShiba = React.lazy(() => import ('../Containers/houseOfShiba'));
const Lottery = React.lazy(() => import ('../Containers/lottery'));

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Home />
        </React.Suspense>
        }
      />
      <Route path="/mint" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Mint />
        </React.Suspense>
        }
      />
      <Route path="/doge" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Doge />
        </React.Suspense>
        }
      />
      <Route path="/houseOfDoge" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <HouseOfDoge />
        </React.Suspense>
        }
      />
      <Route path="/houseOfShiba" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <HouseOfShiba />
        </React.Suspense>
        }
      />
      <Route path="/lottery" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Lottery />
        </React.Suspense>
        }
      />
    </Routes>
  )
}
export default MyRoutes;