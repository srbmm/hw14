let flag = true;
$("#btn").on("click", e => {
    if (flag) {
        e.target.textContent = "Log Out";
    }else {
        e.target.textContent = "Log In";
    }
    flag = !flag;
});