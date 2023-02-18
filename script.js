// blog button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href='questionAnswer.html';
});
// Random color
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
document.getElementById('random-color-1').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-1').style.backgroundColor=bg_color;
})
document.getElementById('random-color-2').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-2').style.backgroundColor=bg_color;
})
document.getElementById('random-color-3').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-3').style.backgroundColor=bg_color;
})
document.getElementById('random-color-4').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-4').style.backgroundColor=bg_color;
})
document.getElementById('random-color-5').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-5').style.backgroundColor=bg_color;
})
document.getElementById('random-color-6').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-6').style.backgroundColor=bg_color;
})
