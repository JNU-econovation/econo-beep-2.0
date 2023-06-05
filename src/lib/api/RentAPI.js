import ApiController from "./ApiController";

const rentRentee = async (renteeId) => {
  return await ApiController({
    url: `/api/rentees/${renteeId}/rent`,
    method: "PUT",
  });
};

const returnRentee = async (renteeId) => {
  return await ApiController({
    url: `/api/rentees/${renteeId}/return`,
    method: "PUT",
  });
};

export default { rentRentee, returnRentee };
