"use client";

import { Center } from "@chakra-ui/react";
import Link from "next/link";
import moment from "moment";
import React, { useEffect, useState } from "react";
// import style from './Timebar.module.css'
export default function Timebar() {
  const [currentDate, setCurrentDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="mt-1 px-5 bg-accent flex fit-content align-center justify-between text-sm md:flex-col">
        <Link
          href="#"
          className="hover:cursor-none active:outline-none py-2 btn btn-ghost normal-case text-lg bg-accent min-w-100 "
        >
          🕒 {moment(currentDate).format("MMMM Do YYYY, h:mm:ss a")}
        </Link>
        <Link
          className="btn btn-ghost normal-case text-lg  bg-accent min-w-100 hover:bg-transparent"
          href="#"
        >
          <div className="join">
            <div className="input-group">
              <input
                className="input input-bordered join-item text-sm"
                placeholder="Search"
              />
              <select className="select select-bordered join-item text-sm">
                <option disabled selected>
                  Filter by district
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
                <option>Action</option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
                <option>Action</option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
                <option>Action</option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
                <option>Action</option>
              </select>
            </div>
            <button className="btn join-item text-sm">Search</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
