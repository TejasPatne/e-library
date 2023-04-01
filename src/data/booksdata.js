const data=[
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61mIq2iJUXL.jpg",
        bookname: "Cracking the coding interview",
        author: "Gayle Laakman McDowell",
        edition: "6th",
        type: "study",
        link: `${process.env.REACT_APP_OAC}CRACKING%20the%20%C2%B7%20CODING%20INTERVIEW%20(%20PDFDrive%20).pdf`
    },
    {
        coverpage: "https://www.coursehero.com/thumb/98/25/9825575fc357c78fa33b0c783b851da1ce7dfe04_180.jpg",
        bookname: "Hands on Machine Learning",
        author: "Aurélien Géron",
        edition: "3rd",
        type: "study",
        link: `${process.env.REACT_APP_OAC}2-Aur%C3%A9lien-G%C3%A9ron-Hands-On-Machine-Learning-with-Scikit-Learn-Keras-and-Tensorflow_-Concepts-Tools-and-Techniques-to-Build-Intelligent-Systems-O%E2%80%99Reilly-Media-2019.pdf`
    },
    {
        coverpage: "https://rukminim1.flixcart.com/image/416/416/js23pu80/book/2/2/8/data-structures-original-imafdpmcxbvg9apg.jpeg?q=70",
        bookname: "Data Structures Algorithms and Applications",
        author: "Sartaj Sahni",
        edition: "2nd",
        type: "study",
        link: `${process.env.REACT_APP_OAC}data-structures-algorithms-and-applications-in-c-by-sartraj-sahani.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61CVP-MfUoL.jpg",
        bookname: "Data Structures and Algorithms Made Easy",
        author: "Narasimha Karumanchi ",
        edition: "",
        type: "study",
        link: `${process.env.REACT_APP_OAC}Data%20Structures%20and%20Algorithms%20Made%20Easy_%20Data%20Structures%20and%20Algorithmic%20Puzzles%20(%20PDFDrive%20).pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61dCk-9h7hL.jpg",
        bookname: "Machine Learning for Absolute Beginners",
        author: "Oliver Theobold",
        edition: "1st",
        type: "study",
        link: `${process.env.REACT_APP_OAC}Machine%20Learning%20for%20Absolute%20Beginners%20(%20PDFDrive%20).pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81zZ0DXfG8L.jpg",
        bookname: "Machine Learning for Dummies",
        author: "John Paul Mueller,  Luca Massaron",
        edition: "2nd",
        type: "study",
        link: `${process.env.REACT_APP_OAC}Machine%20Learning%20For%20Dummies%20(%20PDFDrive%20).pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/517p4KD0yKL._SX331_BO1,204,203,200_.jpg",
        bookname: "Machine Learning: Step by Step Guide",
        author: "Rudolph Russell",
        edition: "1st",
        type: "study",
        link: `${process.env.REACT_APP_OAC}Machine%20Learning_%20Step-by-Step%20Guide%20To%20Implement%20Machine%20Learning%20Algorithms%20with%20Python%20(%20PDFDrive%20).pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Q1tPupKjL.jpg",
        bookname: "Pride and Prejudice",
        author: "Jane Austen",
        edition: "",
        type: "novel",
        link: `${process.env.REACT_APP_OAC}Pride%20and%20prejudice.pdf`
    },
    {
        coverpage: "https://www.booklistqueen.com/wp-content/uploads/emma-jane-austen.jpg",
        bookname: "Emma",
        author: "Jane Austen",
        edition: "",
        type: "novel",
        link: `${process.env.REACT_APP_OAC}emma.pdf`
    },
    {
        coverpage: "https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/0564c4aeac4a931dd405bf8ea15d5d4e/thumb_1200_1599.png",
        bookname: "Git Cheatsheet",
        author: "London App Brewer",
        edition: "",
        type: "study",
        link: `${process.env.REACT_APP_OAC}Git-Cheatsheet.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41szolWxmgL.jpg",
        bookname: "Beyond Good and Evil",
        author: "Friedrich Nietzsche",
        edition: "",
        type: "novel",
        link: `${process.env.REACT_APP_OAC}beyond-good-and-evil.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81JlhbXmDhL.jpg",
        bookname: "Boots Belts Berets",
        author: "Tanushree Podder",
        edition: "",
        type: "novel",
        link: `${process.env.REACT_APP_OAC}Boots%20belts%20berets.pdf`
    },
    {
        coverpage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1312011583i/1686084.jpg",
        bookname: "COMPUTER ALGORITHMS",
        author: "Ellis Horowitz",
        edition: "",
        type: "study",
        link: `${process.env.REACT_APP_OAC}`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81IzbD2IiIL.jpg",
        bookname: "The Kite Runner",
        author: "Khaled Hosseini",
        edition: "",
        type: "novel",
        link: `${process.env.REACT_APP_OAC}Microsoft%20Word%20-%20THE%20KITE%20RUNNER.docx.pdf`
    },
    {
        coverpage: "",
        bookname: "Northanger Abbey",
        author: "Jane Austen",
        edition: "",
        type: "novel",
        link: `${process.env.REACT_APP_OAC}northanger-abbey.pdf`
    },
    {
        coverpage: "https://image.isu.pub/150801143140-a5feb2bc6c63757b76245735c2755ff9/jpg/page_1.jpg",
        bookname: "MARVEL-CATALOG-JAN-APR2016",
        author: "Marver",
        edition: "JAN-APR 2016",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}MARVEL-CATALOG-JAN-APR2016.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91n8RDsLHSL.jpg",
        bookname: "DC Marvel Comics - Batman & Spiderman",
        author: "DC",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}DC Marvel Comics - Batman & Spiderman.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71c4eratVsL.jpg",
        bookname: "Hanuman to the Rescue",
        author: "ACK",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}Hanuman to the Rescue.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71OAc480kdL.jpg",
        bookname: "thanjavur",
        author: "ACK",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}thanjavur-ack.pdf`
    },
    {
        coverpage: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
        bookname: "Spiderman",
        author: "DC",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}spiderman-comic.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/7130nI5y5CL.jpg",
        bookname: "Bheeshma",
        author: "ACK",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}Bheeshma ACK.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/517pDUTM4VL.jpg",
        bookname: "Tales of Arjuna",
        author: "ACK",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}Tales of Arjuna.pdf`
    },
    {
        coverpage: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71RM5nsXVyL.jpg",
        bookname: "Ghatotkacha",
        author: "ACK",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}Ghatotkacha.pdf`
    },
    {
        coverpage: "https://cdn.papertrell.com/005/835/005835316_480X320FW.jpg",
        bookname: "Pareekshit",
        author: "ACK",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}Pareekshit.pdf`
    },
    {
        coverpage: "https://www.amarchitrakatha.com/wp-content/uploads/2022/08/Shiva-Parvati.jpg",
        bookname: "Shiva Parvati",
        author: "ACK",
        edition: "",
        type: "comic",
        link: `${process.env.REACT_APP_OAC}Shiva Parvati.pdf`
    },

]

export default data;

