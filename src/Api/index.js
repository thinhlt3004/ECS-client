import {publicRequest, privateRequest} from './axiosConfig';

//Public Request
export const userLogin = (payload) => publicRequest.post('/Customer/login', payload);

export const userRegister = (payload) => publicRequest.post('/Customer', payload);

export const confirmAccount = (payload) => publicRequest.patch(`/Customer/${payload}`);

export const getServiceCate = () => publicRequest.get('/ServiceCategory');

export const getServiceByCateId = (payload) => publicRequest.get(`/Service/get-service-by-cate/${payload}`);

export const getServiceById = (payload) => publicRequest.get(`/Service/${payload}`);

//Private Request
export const getUserByToken = () => privateRequest.get('/Customer/GetUserByToken');

export const changePassword = (payload) => privateRequest.patch(`/Customer/update-password/${payload.id}/${payload.password}`);

export const updateAccountUser = (payload) => privateRequest.put(`/Customer/${payload.id}`, payload);

export const createService = (payload) => privateRequest.post('/Service', payload);

export const createServiceByCustomer = (payload) => privateRequest.post('/ServiceCustomer', payload);

export const getAllServicesOfCustomer = (payload) => privateRequest.get(`/ServiceCustomer/${payload}`);

export const getServiceEmployees = (payload) => privateRequest.get(`/EmpOfCus/Customer/${payload}`);

export const getEmployeeById = (payload) => privateRequest.get(`/Employee/${payload}`);

export const getReportResultById = (payload) => privateRequest.get(`/Report/get-amount-by-id/${payload.id}/${payload.month}`);

export const getServiceOfCusBySCId = (payload) => privateRequest.get(`/ServiceCustomer/get-current-service-by-id/${payload}`);