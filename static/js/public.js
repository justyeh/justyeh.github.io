hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();

window.onload = () => {
    const _form = document.querySelector("#search");
    _form.onsubmit = e => {
        let value = _form.querySelector("input").value;
        if (!value) {
            return false;
        }
        let url = `https://www.google.com/search?q=site:justyeh.github.io/post%20${value}`;

        let isAppleDevice =
            -1 < navigator.userAgent.indexOf("iPad") ||
            -1 < navigator.userAgent.indexOf("iPod") ||
            -1 < navigator.userAgent.indexOf("iPhone");

        isAppleDevice ? (location.href = url) : window.open(url, "_blank");
        return false;
    };
};


function get(url, config = { timeout: 1500 }) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    let isTimeout = false;
    let timer = setTimeout(() => {
        isTimeout = true;
        xhr.abort();
    }, config.timeout);

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (isTimeout) {
                reject("timeout");
                return;
            }
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            }
        };
    });
}

/* get("https://www.google.com/")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });
 */
