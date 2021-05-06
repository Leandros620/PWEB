const rdUpper = document.getElementById("upper");
const rdLower = document.getElementById("lower");
const inText = document.getElementById("txt");
function changeTextCase (element) {
  const text = inText.value;
  if (element.value == "upper" ) {
    inText.value = text.toUpperCase();
  } else {
    inText.value = text.toLowerCase();
  }
}
