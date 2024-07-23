// CustomerSupport.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CustomerSupport.module.css';
import { fetchSupportRequests, updateSupportRequest } from '../redux/actions/customerSupportAction';
import CustomerTable from './CustomerTable';
var CustomerSupport = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.customerSupport; }) || {}, supportRequests = _a.supportRequests, loading = _a.loading, error = _a.error;
    useEffect(function () {
        dispatch(fetchSupportRequests());
    }, [dispatch]);
    var handleUpdateRequestClick = function (id) {
        // Handle edit functionality if needed
    };
    var handleDeleteRequest = function (id) {
        // Handle delete functionality
    };
    var handleUpdateRequest = function (updatedData) {
        dispatch(updateSupportRequest(updatedData));
    };
    if (loading) {
        return React.createElement("p", null, "Loading...");
    }
    if (error) {
        return React.createElement("p", { className: styles['error-message'] },
            "Error: ",
            error);
    }
    return (React.createElement("div", { className: styles['customer-support'] },
        React.createElement("h2", null, "Customer Support"),
        React.createElement(CustomerTable, { columns: ['ticket_id', 'subject', 'description', 'status', 'user_id', 'created_at', 'updated_at'], data: supportRequests, onEdit: handleUpdateRequestClick, onDelete: handleDeleteRequest, onUpdate: handleUpdateRequest })));
};
export default CustomerSupport;
