"use client"
import React, { ReactNode } from "react";

const template = ({ children }: { children: ReactNode }) => {
  return <div className="border border-violet-500">{children}</div>;
};

export default template;
