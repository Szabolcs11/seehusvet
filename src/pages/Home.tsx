import React, { useState } from "react";
import list from "./../constans/List.json";

export let changetype: (type: string) => void;

interface List {
  [key: string]: string[];
}

const typedList = list as List;

function Home() {
  const [type, setType] = useState<string>("Szep");
  const [searchtext, setSearchText] = useState<string>("");
  changetype = (type: string) => {
    setType(type);
  };

  console.log(typedList);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{type}</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 12 }}>
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          style={{ border: "1px solid black", outline: "none", padding: 6, fontSize: 14 }}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="itemcontainer">
        {typedList[type]
          .filter((e) => e.toLocaleLowerCase().includes(searchtext.toLocaleLowerCase()))
          .map((e: any) => {
            const highlighted = e.replace(new RegExp(searchtext, "gi"), (match: any) => `<span class="highlight">${match}</span>`);
            return (
              <div key={e} className="item" style={{ background: "gray", padding: 6, width: "30%" }}>
                <a dangerouslySetInnerHTML={{ __html: highlighted }}></a>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
