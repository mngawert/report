import http from "./HttpCommon";

class DataService {
  UserLogin = async (q) => {
    return http.post("/User/Login", q);
  };

  GetUser = async (q) => {
    return http.post("/User/GetUsers", q);
  };
  GetUserById = async (id) => {
    return http.get(`/User/GetUser/${id}`);
  };
  CreateUser = async (q) => {
    return http.post("/User/Create", q);
  };
  UpdateUser = async (q) => {
    return http.post("/User/Update", q);
  };
  ChangePasswordUser = async (q) => {
    return http.post("/User/ChangePassword", q);
  };
  DeleteUser = async (id) => {
    return http.delete(`/User/Delete/${id}`);
  };

  GetDestnAddrMap = async (q) => {
    return http.post("/DestnAddrMaps/GetDestnAddrMap", q);
  };
  GetDestnAddrMapById = async (id) => {
    return http.get(`/DestnAddrMaps/GetDestnAddrMap/${id}`);
  };
  CreateDestnAddrMap = async (q) => {
    return http.post("/DestnAddrMaps/CreateDestnAddrMap", q);
  };
  UpdateDestnAddrMap = async (q) => {
    return http.post("/DestnAddrMaps/UpdateDestnAddrMap", q);
  };
  DeleteDestnAddrMap = async (id) => {
    return http.delete(`/DestnAddrMaps/DeleteDestnAddrMap/${id}`);
  };

  GetReport = async (q) => {
    return http.post(`/${q.vasType}/GetReport`, q);
  };
  GetMngmtReport = async (q) => {
    return http.post(`/${q.vasType}/GetMngmtReport`, q);
  };
  GetDashboardReport1 = async (q) => {
    return http.post(`/${q.vasType}/GetDashboardReport1`, q);
  };
}

export default new DataService();
