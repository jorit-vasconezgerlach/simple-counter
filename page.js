function up() {
    counter = document.querySelector('#counter .number');
    counter.innerHTML = parseFloat(counter.innerHTML)+1;
}
function down() {
    counter = document.querySelector('#counter .number');
    counter.innerHTML = parseFloat(counter.innerHTML)-1;
}