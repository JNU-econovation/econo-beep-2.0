import React from "react";
import { useSearchParams } from "react-router-dom";
import routes from "@/routes";
import InfoListLayout from "@/components/info-list-layout/InfoListLayout";
import SEARCH_TYPES from "@/constant/SEARCH_TYPES";
import RenteeAPI from "@/lib/api/RenteeAPI";

function Device() {
  const [searchParams, _] = useSearchParams();

  return (
    <InfoListLayout
      key={`device-${searchParams.get("keyword")}`}
      listType={SEARCH_TYPES.DEVICE}
      searchApiUrl={routes.device}
      loadRenteeList={RenteeAPI.loadDeviceList}
    />
  );
}

export default Device;
