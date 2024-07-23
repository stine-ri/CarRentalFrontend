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
export var registerUser = createAsyncThunk('auth/registerUser', function (userData_1, _a) { return __awaiter(void 0, [userData_1, _a], void 0, function (userData, _b) {
    var response, errorData, data, error_1;
    var rejectWithValue = _b.rejectWithValue;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 6]);
                return [4 /*yield*/, fetch('http://localhost:3000/api/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userData),
                    })];
            case 1:
                response = _c.sent();
                if (!!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                errorData = _c.sent();
                return [2 /*return*/, rejectWithValue(errorData.message)];
            case 3: return [4 /*yield*/, response.json()];
            case 4:
                data = _c.sent();
                localStorage.setItem('token', data.token);
                localStorage.setItem('userRole', data.role); // Store user role
                return [2 /*return*/, { user: data.user, token: data.token, role: data.role, message: data.msg }];
            case 5:
                error_1 = _c.sent();
                return [2 /*return*/, rejectWithValue(error_1.message)];
            case 6: return [2 /*return*/];
        }
    });
}); });
export var loginUser = createAsyncThunk('auth/loginUser', function (credentials_1, _a) { return __awaiter(void 0, [credentials_1, _a], void 0, function (credentials, _b) {
    var response, data, error_2;
    var rejectWithValue = _b.rejectWithValue;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('http://localhost:3000/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(credentials),
                    })];
            case 1:
                response = _c.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _c.sent();
                console.log('API Response:', data); // Check the full response
                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userRole', data.user.role); // Ensure role is accessed from user object
                    return [2 /*return*/, { user: data.user, token: data.token, role: data.user.role }];
                }
                else {
                    return [2 /*return*/, rejectWithValue(data.message)];
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                return [2 /*return*/, rejectWithValue(error_2.message)];
            case 4: return [2 /*return*/];
        }
    });
}); });
export var logoutUser = createAsyncThunk('auth/logoutUser', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        return [2 /*return*/];
    });
}); });
