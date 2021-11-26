import React, { forwardRef } from "react";
import QrReader from "react-qr-scanner";

const onScan = data => {
  if (!data) return;
  console.log(data);
};

const App = forwardRef((props, ref) => {
  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <QrReader
        onScan={onScan}
        onLoad={() => {}}
        onError={() => {}}
        ref={ref}
        facingmode={"user"}
        maximagesize={1000}
        delay={500}
      />
    </div>
  );
});

export default App;
