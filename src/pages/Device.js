import { useSearchParams } from "react-router-dom";
import axios from "axios";
import routes from "../routes";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";

function Device() {
  const [searchParams, setSearchParams] = useSearchParams();

  const loadDeviceList = async ({ keyword, pageIndex, pageSize }) => {
    const response = await axios.get(
      process.env.REACT_APP_BEEP_API + "api/rentee/search/device",
      {
        params: {
          name: keyword,
          pageIndex: pageIndex,
          pageSize: pageSize,
        },
      }
    );

    return response.data;
  };

  return (
    <InfoListLayout
      key={
        searchParams.get("keyword") !== null
          ? `equipments?${searchParams.get("keyword")}`
          : "equipments"
      }
      listType="기자재"
      searchApiUrl={routes.device}
      loadRenteeList={loadDeviceList}
    />
  );
}

export default Device;
