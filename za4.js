const post = document.getElementById('m')
window.countS = 0;

const get = (json) => {
    const d = json.data;
    const perd = [];
    for (let i = 0; i in d; i++) {
        const preData = [];
        pd.push(d[i].avatar);
        pd.push(d[i].first_name);
        pd.push(d[i].last_name);
        pd.push(d[i].email)
        perd.push(pd);
    }
    return perd;
}

const mrend = (d) => {
    for (let i in d) {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const p = document.createElement('p');
        countS++
        div.classList.add(card - $ { countS });
        img.src = d[i][0];
        h2.innerText = $ { d[i][1] }
        $ { d[i][2] };
        p.innerText = Email: $ { d[i][3] };
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        post.appendChild(div);
    }
}

const render = (json, param) => {
    const d = get(json);
    switch (param) {
        case 'up':
            d.sort(function(a, b) {
                let aa = a[1].length
                let bb = b[1].length
                if (aa > bb) {
                    return 1;
                }
                if (bb > aa) {
                    return -1
                }
                return 0
            })
            mrend(d);
            break;
        case 'down':
            d.sort(function(a, b) {
                let aa = a[1].length
                let bb = b[1].length
                if (aa > bb) {
                    return -1;
                }
                if (bb > aa) {
                    return 1
                }
                return 0
            })
            mrend(d);
            break;
        case 'none':
            mrend(d);
    }
}



function gp(n, param) {
    fetch(`https://reqres.in/api/users?page=${n}`)
        .then(
            obj => obj.json(),
            e => console.log(e)
        )
        .then(
            json => render(json, param),
            e => console.log(e)
        )
}

const sorting = (param) => {
    for (let i = 1; i < 3; i++) {
        gp(i, param);
    }
}

const sorted = (upDown) => {
    switch (upDown) {
        case 'up':
            sorting('up')
            break;
        case 'down':
            sorting('down');
            break;
        default:
            sorting('none');
    }
}


function myFunction() {
    let input = document.getElementById("in");
    let filter = input.value.toUpperCase();
    let root = document.getElementById("m");
    let cards = root.getElementsByTagName("div");

    cards = [...cards].slice(2, cards.length)

    for (let i = 0; i < cards.length; i++) {
        let h2 = cards[i].getElementsByTagName("h2")[0];
        if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}