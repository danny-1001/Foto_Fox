const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click" , () =>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link =>{
    link.addEventListener("click", ()=>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    })
})
// functionality
formbutton("create", {
    title: "Contact Us!",
    fields: [{
        name: "email",
        type: "email",
        label: "Email",
        required: true
      },
      {
        name: "Message",
        type: "textarea"
      },
      {
        type: "submit"
      }],
      // Style
        styles: {
        fontFamily:'"Times New Roman", sans-serif',
        button: {
          background: "#87428b"
        },
        title: {
          background: "#87428b",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontSize:"1.5rem"
        },
        description:{
            background:"white",
            color:"#87428b",
            fontSize:"1.5rem"
        },
        input:{
            background:"#414141",
            color:"white",
            fontSize:"1.5rem",
            borderRadius:"0.4rem"

        },
        submitInput:{
            background:"#87428b",
            color:"white",
            fontSize:"1.3rem"
        }, 
            
      },

});