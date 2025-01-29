import * as React from "react";

export function Card({ children, className }) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={`border-b p-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
