import React from "react";

export function FakeCiga(props) {
  return (
    <>
      {[1, 1, 1, 1, 1, 1, 1].map((_, i) => {
        let distance = 112;

        if (window.innerWidth < 700) {
          distance = 70;
        }
        return (
          <div key={i}>
            <div className="ciga-top" style={{ left: `${i * distance}px` }} />
            <div className="ciga-white" style={{ left: `${i * distance}px` }} />
          </div>
        );
      })}
    </>
  );
}
