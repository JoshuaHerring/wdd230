const image = document.querySelectorAll('img');
const options = {
    threshold: 1,
    rootMargin: "0px 0px 100px 100px"
}
const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry =>{
            if (!entry.isIntersecting){
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }

        })
        console.log(io);
    },
    {
        threshold: [.5]
    }
)

image.forEach(image => {
    io.observe(image);
})


const pimages = document.querySelectorAll('[data-src]');

function preloadImage(img)
{
    const source = img.getAttribute('data-src');
    if (!source){
        return;
    }
    img.src = source;
}