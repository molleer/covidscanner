import QrCode from "qrcode-reader";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [qr, setQr] = useState();

  useEffect(() => {
    const newQr = new QrCode();
    newQr.callback = (error, res) => {
      console.log("Callback!");
      console.log(error);
      console.log(res);
    };
    setQr(newQr);
  }, []);

  useEffect(() => {
    const video = document.getElementById("video");
    if (qr && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
        qr.decode(stream);
      });
    }
  }, [qr]);

  return (
    <div>
      <video id="video" width="640" height="480" autoPlay></video>
      <button id="snap">Snap Photo</button>
      <canvas id="canvas" width="640" height="480"></canvas>
    </div>
  );
};
export default App;
