export default function pageToTop() {
    // window.scrollTo(0, 0);
    const pageTop = document.querySelector("#page-main");

    pageTop.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}