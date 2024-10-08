let run = true;
const time_step = 1000;

const wait = (n = 1) => new Promise((rs, rj) => run ? setTimeout(rs, n) : rj());

const click = async (cn, i = 0) => {
	document.getElementsByClassName(cn)[i].click();
	return wait(time_step);
};

document.onkeydown = (e = window.event) => {
	if (e.key === "a") {
		run = run ? true : explore() || true;	
	} else if (e.key === "z") {
		console.log(time_step *= 0.9);
	} else if (e.key === "x") {
		console.log(time_step *= 1.1);
	} else {
		run = false;
	}
};

const explore = async () =>
	click("recCard__info").then(() =>
		Array.from(document.getElementsByClassName("bullet")).reduce((p, e) =>
			p.then(() => {
				e.click();
				return wait(time_step);
			}), Promise.resolve())
   	)
	.then(() => click("recsGamepad__button--like"))
	.then(() => explore());

explore();
