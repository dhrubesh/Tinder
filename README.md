# Tinder
Auto swipe-right (tinder-web)

Follow the steps given below:

  1. Copy-paste the script from tinder.js to developer console of your browser.
  2. Press the ENTER key.
  3. Sit back and relax as you see profiles are automatically SWIPPED RIGHT. (  😎  )

You're welcome 😉

### Or to make things more convinient
Add this as bookmark url:
```
javascript:(function(){let run = true, time_step = 1000; const wait = (n = 1) => new Promise((rs, rj) => run ? setTimeout(rs, n) : rj()), click = async (cn, i = 0) => { document.getElementsByClassName(cn)[i].click(); return wait(time_step) }; document.onkeydown = (e = window.event) => { if (e.key === "a") run = run ? true : explore() || true; else if (e.key === "z") console.log(time_step *= 0.9); else if (e.key === "x") console.log(time_step *= 1.1); else run = false; }; const explore = async () => click("recCard__info").then(() => Array.from(document.getElementsByClassName("bullet")).reduce((p, e) => p.then(() => { e.click(); return wait(time_step) }), Promise.resolve()) ).then(() => click("recsGamepad__button--like") ).then(() => explore()); explore();})();
```
Add it to bookmark bar and click it while on tinder.

### Control
```
a - start
z - speed up by 10%
x - slow down by 10%
```

### Avoiding reload
if you copy the code just close inspector instead of clicking on website.
