'use strict'

const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 


// core team 
const cores = [{
    avatar: './assets/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: './assets/lgb.JPG', 
    name: 'Gia Bách', 
    stat: 'Vice President', 
    contact: 'giabach1106', 
    link: '#',
}, {
    avatar: './assets/canh.png', 
    name: 'Công Anh', 
    stat: 'Vice President', 
    contact: 'Canh Soup', 
    link: '#',
}, {
    avatar: './assets/mdung.png', 
    name: 'Minh Dũng', 
    stat: 'Project Leader', 
    contact: 'duongdung', 
    link: '#',
}, {
    avatar: './assets/qminh.png', 
    name: 'Quang Anh', 
    stat: 'Project Leader', 
    contact: 'nqanhhh123',
    link: '#',
}, {
    avatar: './assets/tluong.png', 
    name: 'Thiên Lương', 
    stat: 'Head of Pr', 
    contact: 'Lương Nguyễn', 
    link: '#',
}, {
    avatar: './assets/lebach.png', 
    name: 'Lê Bách', 
    stat: 'Head of Events', 
    contact: 'Bách Lê', 
    link: '#',
}, {
    avatar: './assets/hphat.png', 
    name: 'Hữu Phát', 
    stat: 'Head of Med - Des', 
    contact: 'tuciphat2507', 
    link: '#',
}]


// list of members 
const members = [{
    avatar: './assets/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: './assets/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: './assets/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
},] 



// variables 
const coreList = $('.core-list'); 
const memList = $('.members-list'); 



// application 
const app = {
    render() {
        
        // core list 
        const coreListHtml = cores.map(mem => `
            <div class="core-member">
                <div class="avatar">
                    <img src="${mem.avatar}" alt="${mem.name}">
                </div>
                <div class="card">
                    <div class="name">${mem.name}</div>
                    <div class="position">${mem.stat}</div>
                    <div class="contact">
                        <div class="contact-logo"></div>
                        <div class="contact-link">
                            <a href="${mem.link}">${mem.contact}</a>
                        </div>
                    </div>
                </div>
            </div>
        `)
        coreList.innerHTML = coreListHtml.join(''); 
        
        // members list 
        const memListHtml = members.map(mem => `
            <div class="core-member">
                <div class="avatar">
                    <img src="${mem.avatar}" alt="thanhphu">
                </div>
                <div class="card">
                    <div class="name">${mem.name}</div>
                    <div class="position">${mem.stat}</div>
                    <div class="contact">
                        <div class="contact-logo">
                            <!-- svg -->
                        </div>
                        <div class="contact-link">
                            <a href="#">${mem.contact}</a>
                        </div>
                    </div>
                </div>
            </div>
        `)
        memList.innerHTML = memListHtml.join(''); 
        

    }, 
    start() {
        // render 
        this.render(); 
    }, 
}


// run 
app.start(); 



