import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import axios from "axios";
import { useEffect } from "react";
import Delet from "./button/delet";
import Edit from "./button/Edit";

export default function Home() {
    const gridRef = useRef < AgGridReact > null;
    const [row, setrow] = useState([]);
    const [col, setcol] = useState([
        { field: "created", filter: "agNumberColumnFilter" },
        { field: "id", filter: "agNumberColumnFilter" },
        { field: "email", filter: true, sortable: true },
        { field: "title", filter: true, sortable: true },
        { field: "firstName", filter: true, sortable: true },
        { field: "lastName", filter: true, sortable: true },
        {
            field: "delet",
            cellRenderer: Delet,
        },
        {
            field: "edit",
            cellRenderer: Edit,
        },
    ]);

    // ================================================
    const mynav = useNavigate();
    const myremove = () => {
        localStorage.removeItem("user");
        mynav("/");
    };
    useEffect(() => {
        let data = localStorage.getItem("user");
        let x = JSON.parse(data);

        axios
            .get("http://localhost:4000/accounts", {
                headers: {
                    Authorization: "Bearer " + x?.jwtToken,
                },
            })
            .then((y) => {
                console.log(y.data);
                setrow(y.data); //<<<-------------
            })
            .catch((y) => {
                console.log(y);
            });
    }, []);
    // =======================================================
    const onRemoveSelected = useCallback(() => {
        const selectedData = gridRef.current.api.getSelectedRows();
        const res = gridRef.current.api.applyTransaction({
            remove: selectedData,
        });
        // printResult(res);
    }, []);
    return (
        <div>
            <div className="HomeBTN">
                <button className="btn btn-danger " onClick={myremove}>
                    Log-out
                </button>
            </div>

            <div
                className="ag-theme-alpine midd top mt-5 p-4 "
                style={{ width: 1500, height: 600 }}
            >
                <AgGridReact rowData={row} columnDefs={col} />
            </div>
        </div>
    );
}