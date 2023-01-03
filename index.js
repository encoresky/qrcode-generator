const generator = (img, props) => {
  if (props.value) {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${props.value}&size=${props.size}&color=${props.color}&bgcolor=${props.bgcolor}`;
    img.alt = props.qrAlt;
    img.title = props.title;
  }
};

exports.qrcodeGenerator = ({
  value,
  size = "180x180",
  qrAlt = "React easy QR image",
  title = "React easy QR generator",
  bgcolor = "fff",
  color = "000",
  showQrId,
}) => {
  let img = document.createElement("img");
  let qr = document.getElementById(showQrId);
  qr.appendChild(img);

  generator(img, { value, size, qrAlt, title, color, bgcolor});
};
