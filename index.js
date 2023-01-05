const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")
let init = 0

const botSay = (data) => {
    return [
        "Halo, perkenalkan nama saya LynBot. siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa ya?`,
        `Wawww sama dong aku juga hobi ${data?.hobi}, btw pekerjaan kamu afaan tuh?`,
        `Ohhh ${data?.pekerjaan}, ya udah kalau gitu, udahan yah?`,
    ]
}
pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if(jawaban.value.length <1) return alert("silahkan isi terlebih dahulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pekerjaan: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loading.style.display = "block"
    container[0].style.filter = "blur(3px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loading.style.display = "none"
        container[0].style.filter = "none"
    }, [1200])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thanks ${userData[0]} Sudah Menjawab Pertanyaan Dari Taubot kali-kali kita main ${userData[2]} bareng ya    `
    jawaban.value = "Thanks Juga"
}

function botEnd() {
    alert(`Terimakasih ${userData[0]} Sudah Berkunjung`)
    window.location.reload()
}