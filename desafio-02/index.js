const textFaq  = document.querySelectorAll('.text-faq')

textFaq.forEach(function (element) {
    element.addEventListener('click', function () {
        const Active = element.classList.contains('active')
        
        textFaq.forEach(function (element) {
            element.classList.remove('active')
        })

        if (!Active) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
        
    })
})