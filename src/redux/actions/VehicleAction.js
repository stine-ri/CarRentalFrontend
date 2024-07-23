var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createAsyncThunk } from '@reduxjs/toolkit';
export var fetchVehicles = createAsyncThunk('vehicles/fetchVehicle', function (_, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var token, response, jsonResponse_1, jsonResponse, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Token not found');
                }
                return [4 /*yield*/, fetch("http://localhost:3000/api/vehicleSpecifications", {
                        headers: {
                            'Authorization': "Bearer ".concat(token),
                            'Content-Type': 'application/json',
                        },
                    })];
            case 1:
                response = _a.sent();
                if (!!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                jsonResponse_1 = _a.sent();
                console.error('Fetch Vehicle Error:', jsonResponse_1.message);
                throw new Error(jsonResponse_1.message || 'Network response was not ok');
            case 3: return [4 /*yield*/, response.json()];
            case 4:
                jsonResponse = _a.sent();
                console.log('Parsed JSON Response:', jsonResponse); // Log parsed JSON response
                return [2 /*return*/, jsonResponse]; // Return the entire JSON response
            case 5:
                error_1 = _a.sent();
                console.error('Fetch Vehicles Error:', error_1.message);
                throw new Error('Failed to fetch vehicles');
            case 6: return [2 /*return*/];
        }
    });
}); });
export var bookVehicle = createAsyncThunk('vehicles/bookVehicle', function (bookingData) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/book', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.json()];
        }
    });
}); });
// Update Vehicle
export var updateVehicle = createAsyncThunk('vehicles/updateVehicle', function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var response, data, error_2;
    var vehicleId = _b.vehicleId, vehicleData = _b.vehicleData;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("http://localhost:3000/api/vehicles/".concat(vehicleId), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(vehicleData),
                    })];
            case 1:
                response = _c.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _c.sent();
                if (!response.ok) {
                    throw new Error(data.message || 'Failed to update vehicle');
                }
                return [2 /*return*/, data.vehicle]; // Assuming response includes updated vehicle data
            case 3:
                error_2 = _c.sent();
                throw new Error(error_2.message || 'Failed to update vehicle');
            case 4: return [2 /*return*/];
        }
    });
}); });
// Delete Vehicle
export var deleteVehicle = createAsyncThunk('vehicles/deleteVehicle', function (vehicleId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("http://localhost:3000/api/vehicles/".concat(vehicleId), {
                        method: 'DELETE',
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                if (!response.ok) {
                    throw new Error(data.message || 'Failed to delete vehicle');
                }
                return [2 /*return*/, vehicleId];
            case 3:
                error_3 = _a.sent();
                throw new Error(error_3.message || 'Failed to delete vehicle');
            case 4: return [2 /*return*/];
        }
    });
}); });
