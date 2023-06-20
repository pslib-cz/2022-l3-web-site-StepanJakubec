document.addEventListener("DOMContentLoaded", () => {
    const showButtons = document.querySelectorAll(".news-showText");
    console.log(showButtons);
    for (const button of showButtons) {
        button.addEventListener("click", (event) => {
            const div = event.target.parentNode;
            const hiddenTextFinal = div.querySelector(".news_main_item__hiddenText");
            hiddenTextFinal.classList.toggle("news-textActive");
            if (button.textContent === "More") {
                button.textContent = "Hide";
              } else {
                button.textContent = "More";
              }
        });
    };
});