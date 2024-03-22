const regex = {
	name: /^[A-Za-z]+$/,
	email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	age: /^\d+$/, 
	text: /.+/,
};

let form = document.querySelector(".form");
let inputs = document.querySelectorAll(".required");
let btn = document.querySelector(".btn")
let err = document.querySelector(".err")
let suc = document.querySelector(".suc")
let inpname = document.querySelector("input[name='name']");
let inpsur = document.querySelector("input[name='surname']");
let inpage = document.querySelector("input[name='age']");

inpname.addEventListener('input', () => {
    document.querySelector(".newsurname").textContent = inpname.value;
});

inpsur.addEventListener('input', () => {
    document.querySelector(".newname").textContent = inpsur.value;
});

inpage.addEventListener('input', () => {
    document.querySelector(".newage").textContent = inpage.value;
});





form.onsubmit = (e) => {
	e.preventDefault();

	let obj = {};

	let fm = new FormData(form);

	if (validate()) {
		fm.forEach((value, key) => {
			obj[key] = value;
		});
	} else {
		console.error("error");
	}

	console.log(obj);
};



function validate() {
	let ess = 5
	let ror = 7
	let state;
    inputs.forEach((input) => {
		const p = input.parentElement.querySelector('p')
        if(!regex[input.id].test(input.value)) {
            input.style.border = "1px solid red";
            input.parentElement.lastElementChild.style.display = "block"
            input.parentElement.children[2].innerHTML = `Please, enter your ${input.id}`;
			p.style.color = 'red';

            state = false
        } else {
			input.style.border = "1px solid blue";
            input.parentElement.lastElementChild.style.display = "none"
            input.parentElement.children[2].innerHTML = "";
			p.style.color = 'blue';

			if(p.style.color = 'blue') {
				ess +=1
				ror -=1
			}

            state = true
        }
    })

	suc.textContent = ess + "/12"
	err.textContent = ror + "/12"


	if (state) {
        btn.style.backgroundColor = "blue";
		btn.style.color = "white"
    } else {
        btn.style.backgroundColor = "rgb(238, 0, 4)";
		btn.style.color = "white"
    }


	return state
}