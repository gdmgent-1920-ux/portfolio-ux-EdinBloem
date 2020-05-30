const menuButton = document.querySelector('nav .nav-button');
const nav = document.querySelector('nav.nav');

const toggleMenu = () => {
    try {

        if (nav.classList.contains('menu-hidden')) {
            nav.classList.remove('menu-hidden');
            nav.classList.add('menu-show');
        } else {

            nav.classList.add('menu-hidden');
            nav.classList.remove('menu-show');
        }
    } catch (error) {
        console.log('wss is de javascript nie goe gelinkt of er is iets fout aan de html')
    }   
};

const scrollControl = (element) => {
  
    const columns = [
        document.querySelector('.podcasts-column.left'),
        document.querySelector('.podcasts-column.right')
    ];
    
    let onTop, columnItems, dir = ''; 

    columns.forEach(i => { 
        
        if (i.classList.contains('left')) dir = 'down';
        if (i.classList.contains('right')) dir = 'up';
        
        onTop = i.querySelector('.podcast-item.ontop'); 
        columnItems = i.querySelectorAll('.podcast-item'); 
        
        try { 
            const index = [].indexOf.call(columnItems, onTop); 
            onTop.classList.remove('ontop'); 
            columnItems[index+1].classList.add('ontop'); 
            columnItems[index+1].scrollIntoView();
        } catch (error) {
            columnItems[0].scrollIntoView();
            columnItems[0].classList.add('ontop');
        }
    })
};

try {
    const form = document.querySelector('form#formulier');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let data = new FormData(form);
        const firstName = data.get('fname'), lastName = data.get('lname'), message = data.get('message');
        console.log(`
    firstName: ${firstName},
    lastName: ${lastName},
    message: ${message}
        `);
    })
} catch {}



menuButton.addEventListener('click', toggleMenu); 
document.addEventListener('click', (event) => {
    const scrollControlBtn = event.target.closest('button.podscast-scroll-control'); 
    if (scrollControlBtn != null) scrollControl(scrollControlBtn); 
});