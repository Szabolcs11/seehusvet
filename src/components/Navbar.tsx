import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changetype } from "../pages/Home";

function Navbar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("Szep");

  return (
    <div style={{ width: "100%", background: "blue", display: "flex", flexDirection: "row", gap: 20, justifyContent: "center", fontFamily: "sans-serif" }}>
      <div
        style={{ cursor: "pointer", color: "white", padding: 10 }}
        onClick={() => {
          setSelected("Szep");
          changetype("Szep");
        }}
      >
        Szép
      </div>
      <div
        style={{ cursor: "pointer", color: "white", padding: 10 }}
        onClick={() => {
          setSelected("Vicces");
          changetype("Vicces");
        }}
      >
        Vicces
      </div>
      <div
        style={{ cursor: "pointer", color: "white", padding: 10 }}
        onClick={() => {
          setSelected("Aranyos");
          changetype("Aranyos");
        }}
      >
        Aranyos
      </div>
    </div>
  );
}

export default Navbar;
