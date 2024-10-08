var buttons = document.getElementsByTagName("button");
var reactProps;
for (key of Object.keys(buttons[0])) {
  if (key.split("$")[0] == "__reactProps") {
    reactProps = key;
    break;
  }
}
var button = () => {
  var likeButton = null;
  var seen = false;
  for (const button of buttons) {
    const props = button[reactProps];
    if (props?.className && props.className.includes("like")) {
      if (seen) {
        likeButton = button;
        break;
      }
      seen = true;
    }
  }
  return likeButton;
};
setInterval(function () {
  button().click();
}, 1000);
