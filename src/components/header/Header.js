import { isMobile } from "react-device-detect";
import HeaderMobile from "./HeaderMobile";
import HeaderPc from "./HeaderPc";
import PageTitle from "../PageTitle";

function Header() {
  return <>{isMobile ? <HeaderMobile /> : <HeaderPc />}</>;
}

export default Header;
