var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var initialState = {
    bookings: [],
    loading: false,
    error: null,
    booking: null,
};
var bookingReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'BOOK_VEHICLE_REQUEST':
            return __assign(__assign({}, state), { loading: true });
        case 'BOOK_VEHICLE_SUCCESS':
            return __assign(__assign({}, state), { loading: false, bookings: __spreadArray(__spreadArray([], state.bookings, true), [action.payload], false), booking: action.payload, error: null });
        case 'BOOK_VEHICLE_FAILURE':
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
export default bookingReducer;
