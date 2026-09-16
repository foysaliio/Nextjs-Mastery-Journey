"use client";
import React, { useEffect } from "react";

interface DashboardTemplateProps {
  children: React.ReactNode;
}

const DashboardTemplate = ({ children }: DashboardTemplateProps) => {
  useEffect(() => {
    console.log("Dashboard template mounted");

    return () => {
      console.log("Dashboard template unmounted");
    };
  }, []);
  return (
    <div className="rounded-xl border border-zinc-800 p-6">{children}</div>
  );
};

export default DashboardTemplate;
