// start of submission //

d = 300;   // dimensionsc.width = c.height = d;f = v = h = u = 0;  // f = score, h = horizontal direction, v = verticle direction, u = countdownH = "rgba(0,0,0,0.5)";I = "#fff";R = "red";K = document;
function M() {
    return 2 * (Math.floor(Math.random() * (d / 2)))
}x = M();y = M();w = W = 7;  // disc widthsX = Y = M();function C() {a.fillStyle = H;  a.fillRect(0, 0, d, d)} // clear canvas
function P(I) { // score (colour)
    a.fillStyle = I;
    a.fillText("score: " + Math.floor(f / 10), 8, 10)
}z = setInterval("m()", 50);
function m() { // animation
    f++;
    if (f % 100 == 0) { u = 10; W++ }
    if (u > 0) {
        r = 4;  // chaser speed
        s = 2;  // your speed
        u--
    } else {
        r = 2;
        s = 4
    }
    // Chase
    if (Y < y) Y += r; else Y -= r;
    if (X < x) X += r; else X -= r;
    //move user
    if (v == "u" && y > 8) y -= s;
    if (v == "d" && y < d - 8) y += s;
    if (h == "l" && x > 8) x -= s;
    if (h == "r" && x < d - 8) x += s;
    function E() { // check collision
        S = X - x;
        D = Y - y;
        F = w + W;
        return (S * S + D * D <= F * F)
    }
    if (E()) {
        clearInterval(z);
        setInterval(function () {
            q(X, Y, R, W);
            W++;
            P("#000")
        }, 5);
    }
    // draw canvas
    C(); // Clear canvas
    function q(x, y, n, w) { // draw shapes: x,y = position, n = colour, w = width
        a.fillStyle = n;
        a.beginPath();
        a.arc(x, y, w, 0, Math.PI * 2, true);
        a.fill();
    }
    q(x, y, "#0FF", w);
    q(X, Y, R, W);
    P(I);
}
K.onkeydown = function (e) {
    k = e.keyCode;
    if (k == 37) h = "l";
    if (k == 38) v = "u";
    if (k == 39) h = "r";
    if (k == 40) v = "d";
};
K.onkeyup = function (e) {
    k = e.keyCode;
    if (k == 37 || k == 39) h = "";
    if (k == 38 || k == 40) v = ""
}
// end of submission //