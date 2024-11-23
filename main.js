ace.require("ace/ext/language_tools");

var list_language = [
  { "name": "JavaScript", "mode": "ace/mode/javascript" }, //Tambahkan linter
  { "name": "Python", "mode": "ace/mode/python" },  //Tambahkan linter dan perbaiki mode
  { "name": "Gloang", "mode": "ace/mode/golang" }  //Tambahkan linter dan perbaiki mode
];

var selectList = document.getElementById("list-lang");
let editor;

list_language.forEach((lang) => {
  const option = document.createElement("option");
  option.text = lang.name;
  option.value = lang.mode;
  selectList.appendChild(option);
});

editor = ace.edit("editor", {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  isFocused: true,
  hover: true,
});

const updateEditor = (mode) => {
  editor.session.setMode(mode);
}

// inisialisasi linter untuk javascript
updateEditor(list_language[0].mode)

selectList.addEventListener("change", function () {
  const selectedLang = list_language.find(lang => lang.mode === this.value);
  if (selectedLang) {

    updateEditor(selectedLang.mode);

  }
});