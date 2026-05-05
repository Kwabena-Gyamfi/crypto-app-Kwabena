import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashboardHome from "./pages/dashboard/Home";
import Trade from "./pages/dashboard/Trade";
import Lend from "./pages/dashboard/Lend";
import Transactions from "./pages/dashboard/Transactions";
import DashboardAssetDetail from "./pages/dashboard/AssetDetail";
import { TokenSales, Cash, Crypto } from "./pages/dashboard/SecondaryPages";
import { OnchainVerify, AdvancedAPI } from "./pages/dashboard/ExtraPages";
import AdvancedSpot from "./pages/dashboard/AdvancedSpot";
import { AdvancedPortfolio, AdvancedOrders, AdvancedReferral } from "./pages/dashboard/AdvancedPages";
import Watchlist from "./pages/dashboard/Watchlist";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="assets/:assetId" element={<AssetDetail />} />
        <Route path="learn" element={<Learn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="home" element={<DashboardHome />} />
      <Route path="trade" element={<Trade />} />
      <Route path="lend" element={<Lend />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="watchlist" element={<Watchlist />} />
      <Route path="asset/:id" element={<DashboardAssetDetail />} />
      <Route path="token-sales" element={<TokenSales />} />
      <Route path="cash" element={<Cash />} />
      <Route path="crypto" element={<Crypto />} />
      <Route path="onchain-verify" element={<OnchainVerify />} />
      <Route path="advanced-api" element={<AdvancedAPI />} />
      <Route path="advanced" element={<Navigate to="/advanced/spot" replace />} />
      <Route path="advanced/spot" element={<AdvancedSpot />} />
      <Route path="advanced/derivatives" element={<AdvancedSpot />} />
      <Route path="advanced/portfolio" element={<AdvancedPortfolio />} />
      <Route path="advanced/orders" element={<AdvancedOrders />} />
      <Route path="advanced/referral" element={<AdvancedReferral />} />
    </Routes>
  );
}

export default App;
