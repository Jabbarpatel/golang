import React from "react";

type Props = {
  active: boolean;
};

const AppStatusPill = ({ active }: Props) => {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: 600,
        border: `1px solid ${active ? "#22c55e" : "#ef4444"}`,
        backgroundColor: active ? "#f0fdf4" : "#fef2f2",
        color: active ? "#15803d" : "#b91c1c",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: active ? "#22c55e" : "#ef4444",
        }}
      />
      {active ? "Active" : "Inactive"}
    </span>
  );
};
export default AppStatusPill;
