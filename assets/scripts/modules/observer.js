/* Observer
---------------------------------------------------------------------------- */

const addObserver = () => {
    const observedElements = document.querySelectorAll("[data-js-observe]");
    console.log(observedElements);
    const options = {rootMargin: "0px", threshold: 0.5};
    
    const observer = new IntersectionObserver (function (entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                console.log(`Element ${entry.target} is intersecting`);
                entry.target.classList.add("is-in-view");
            } else {
                console.log(`Element ${entry.target} is not intersecting`);
                entry.target.classList.remove("is-in-view");
            }
        });
    }, options);
    
    observedElements.forEach ( function (observedElement) {
        observer.observe (observedElement);
    });
};


/* Exports
############################################################################ */

export { addObserver };