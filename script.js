//Elemet selection
let btn = document.getElementById('gen');
let copy = document.getElementById('copy');
let output = document.getElementById('output');
let count_slider = document.getElementById('table-count');
let len_slider = document.getElementById('table-length');
let lab_c = document.getElementById('count-label');
let lab_len = document.getElementById('lenght-label');

//Variable declaration and initialisation
let clipboard = '';
let count_slider_val = 1;
let len_slider_val = 1;
const row = 'ABCDEFGHIJKLM';
const column = 'NOPQRSTUVWXYZ';

function randomChar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
}


function generate(t_l, t_c) {
    let space_top = ' ';
    let space = ' '.repeat(2);
    let content = '';
    clipboard = '';

    for (let count = 0; count < t_c; count++) {
        if (t_l == 1) {
            content += ' '.repeat(3) + '<span class="non_generated">A</span>' + space_top;
            clipboard += ' '.repeat(3) + 'A' + space_top;

            for (let i = 1; i < row.length; i++) {
                content += space_top + `<span class="non_generated">${row.charAt(i)}</span>` + space_top;
                clipboard += space_top + row.charAt(i) + space_top;
            }

        } else if (t_l % 2 == 0) {
            space_top = ' '.repeat(t_l / 2-1);
            content += space + space_top + ' ' + '<span class="non_generated">A</span>';
            clipboard += space + space_top + ' ' + 'A';

            for (let i = 1; i < row.length; i++) {
                content += ' '.repeat(t_l/2) + space + space_top+ `<span class="non_generated">${row.charAt(i)}</span>`;
                clipboard += ' '.repeat(t_l/2) + space + space_top + row.charAt(i);
            }

        } else {
            space_top = ' '.repeat(Math.floor(t_l / 2) + 1);
            content += ' '.repeat(2) + space_top + '<span class="non_generated">A</span>' + space_top;
            clipboard += ' '.repeat(2) + space_top + 'A' + space_top;

            for (let i = 1; i < row.length; i++) {
                content += space_top + `<span class="non_generated">${row.charAt(i)}</span>` + space_top;
                clipboard += space_top + row.charAt(i) + space_top;
            }

        }

        content += '<br>';
        clipboard += '\n';

        for (let i = 0; i < column.length; i++) {
            content += `<span class="non_generated">${column.charAt(i)}</span>` + space;
            clipboard += column.charAt(i) + space;

            for (let j = 0; j < row.length; j++) {
                for (let i = 0; i < t_l; i++) {
                    let randch = randomChar()
                    content += randch;
                    clipboard += randch;
                }
                content += space;
                clipboard += space;
            }

            content += '<br>';
            clipboard += '\n'
        }
        content += '<br>';
        clipboard += '\n';
    }
    output.innerHTML = content;
}


function copyOutput() {
    navigator.clipboard.writeText(clipboard);
}

function displayCopy() {
    copy.innerText = 'Copied!';
    setTimeout(() => {
        copy.innerText = 'Copy';;
    }, 1000)
}

btn.addEventListener('click', function () {
    generate(len_slider_val, count_slider_val);
});

copy.addEventListener('click', function () {
    copyOutput();
    displayCopy();
});

len_slider.addEventListener("input", function () {
    len_slider_val = parseInt(len_slider.value, 10);
    lab_len.textContent = 'Table length: ' + len_slider_val;
});

count_slider.addEventListener("input", function () {
    count_slider_val = parseInt(count_slider.value, 10);
    lab_c.textContent = 'Table count: ' + count_slider_val;
});