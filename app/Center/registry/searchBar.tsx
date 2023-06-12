'use client'

import { useState } from "react";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const cars: string[] = [
    "29A-12345",
    "29A-12346",
    "29A-12347",
]

export function SearchBar() {
    const [value, setValue] = useState("");

    return (
        <>
            <div className="input">
                <Stack spacing={2} direction="row" minWidth={150}>
                    <Autocomplete
                        freeSolo
                        id="car"
                        disableClearable
                        fullWidth={true}
                        options={cars.map((option) => option)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Nhập biển số xe"
                                fullWidth={true}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}

                            />
                        )}
                        onChange={(event, value) => {
                            setValue(value);
                            console.log(value);
                        }}
                    />
                </Stack>
                {
                    (value !== "") && (
                        <div className="container mx-auto mt-5 font-medium text-lg text-center">
                            Biển số xe:
                            <span className="text-accent font-semibold"> {value}</span>
                        </div>)}
            </div>
        </>
    )
}