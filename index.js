const generator = (img, props) => {
  if (props.value) {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${props.value}&amp;size=${props.size}`;
    img.alt = props.qrAlt;
    img.title = props.title;
  }
};

exports.qrcodeGenerator = ({
  value,
  size = "180x180",
  qrAlt = "React easy QR image",
  title = "React easy QR generator",
  showQrId,
}) => {
  let img = document.createElement("img");
  let qr = document.getElementById(showQrId);
  qr.appendChild(img);

  generator(img, { value, size, qrAlt, title });
};
