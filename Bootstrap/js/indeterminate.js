// Since elements doesn't exist during the html page parsing,
// our const values become = NULL, to eliminate this issue
// we wait for the window to load and then execute the whole function
function loadEvents() {
	// Ühendab HTML-s oleva ID parent const-iks
	// ja kõik class-iga child-check olevad elemendid childen-iks
	const parent = document.getElementById("parentCheck");
	const children = document.querySelectorAll(".child-check");


// Funktsioon, mis kontrollib mitu child-check on checked
// ja vastavalt sellele muudab parent-checki checked ja indeterminate omadusi

function updateParent() {
	// Loeme, mitu child-check on checked
	const checked = [...children].filter(c => c.checked).length;

	// '===' Võrdub väärtusega ja tüübiga,
	// '==' Kas kaks muutujat on väärtuselt võrdsed, kuid tüüp võib olla erinev
	// '=' See on lihtsalt omistamine, kus ühele poolele pannakse väärtus
	// ja seejärel see väärtus omistatakse teisele poolele. Nt, let x = 5;
	if (checked === 0) {
		parent.checked = false;
		parent.indeterminate = false;
  } else if (checked === children.length) {
    parent.checked = true;
    parent.indeterminate = false;
  } else {
    parent.checked = false;
    parent.indeterminate = true;
	}
}

// Lisa Event listenerid kõigile child-check elementidele,
// mis kutsuvad updateParent funktsiooni
children.forEach(c => c.addEventListener("change", updateParent));

// Lisa Event listener parent-check elementile,
// mis muudab kõigi child-check elementide checked omadust
// vastavalt parent-checki checked omadusele
parent.addEventListener("change", () => 
	{
		children.forEach(c => c.checked = parent.checked);
		parent.indeterminate = false;
	});
};
// Once window loaded, execute all of the functions
window.onload = loadEvents;
