const chat_panel = document.querySelector(".lateral_panel-container")
const storie1 = document.querySelector(".storie1")
const storie2 = document.querySelector(".storie2")
const storie3 = document.querySelector(".storie3")
const storie4 = document.querySelector(".storie4")
const storie5 = document.querySelector(".storie5")
const logo_container = document.querySelector(".logo_container")
const storie_close = document.querySelector(".storie_close")
const lateral_panel = document.querySelector(".lateral_panel")
const stories_wrapper = document.querySelector(".stories_wrapper")
const stories_background = document.querySelector(".stories_background")

// ACTIVATING STORIES

storie1.addEventListener("click", open_storie1)
storie2.addEventListener("click", open_storie2)
storie3.addEventListener("click", open_storie3)
storie4.addEventListener("click", open_storie4)
storie5.addEventListener("click", open_storie5)

function aparece(){    
    chat_panel.classList.add("hidden")
    logo_container.classList.add("separating")
    storie_close.classList.remove("storie_close_disappear")
    lateral_panel.classList.add("stories_container")
    lateral_panel.classList.add("leteral_panel-color")
    stories_wrapper.classList.remove("hidden")
    stories_background.classList.remove("hidden")
}

function open_storie1(){
    aparece()
    select_storie(1);
}
function open_storie2(){
    aparece()
    select_storie(2)
}

function open_storie3(){
    aparece()
    select_storie(3)
}

function open_storie4(){
    aparece()
    select_storie(4)
}

function open_storie5(){
    aparece()
    select_storie(5)
}



// DEACTIVATING STORIES

storie_close.addEventListener("click", desaparece)

function desaparece(){
    chat_panel.classList.remove("hidden")
    logo_container.classList.remove("separating")
    storie_close.classList.add("storie_close_disappear")
    lateral_panel.classList.remove("stories_container")
    lateral_panel.classList.remove("leteral_panel-color")
    stories_wrapper.classList.add("hidden")
    stories_background.classList.add("hidden")
}

//appears()




//  CHANGING SOUND, PAUSE, AND PLAY ICONS

const st_play_button = document.getElementById("play_button")
let state = "playing";
st_play_button.addEventListener("click", reproducir_pausar)

function reproducir_pausar(){
    if (state == "playing"){

        st_play_button.src="./resources/play_icon"
        state = "paused";
        pausar_reproducir_historias(state)

    } else if (state == "paused"){        
        state = "playing"
        st_play_button.src="./resources/pause_icon"
        pausar_reproducir_historias(state)
    }
}

//  ACTIVATING SOUND AND MUTING


const st_sound_button = document.getElementById("sound_button")
storie_sound_state = "sonando";

st_sound_button.addEventListener("click", silenciar_sonar)

function silenciar_sonar(){
    if (storie_sound_state == "sonando"){
        st_sound_button.src=("./resources/sound_off_icon")
        storie_sound_state = "silenciado";
    } else if (storie_sound_state == "silenciado"){
        st_sound_button.src="./resources/sound_icon";
        storie_sound_state = "sonando"
    }
}

/*  **************************  PLAYING THE STORIES  ****************************  */

//Next and previous Story:


const next_storie = document.querySelector(".next_storie")
const previous_storie = document.querySelector(".previous_storie")

next_storie.addEventListener("click", next_storie_activate)
previous_storie.addEventListener("click", previous_storie_activate)

var active_storie = 1;

function next_storie_activate(){
    if (active_storie < 6){
        active_storie +=1;
        select_storie(active_storie)

    }        
}

function previous_storie_activate(){
    if (active_storie > 1){
        active_storie -=1;
        select_storie(active_storie)
    }   
}

function select_storie(active_storie){
    switch (active_storie){
        case 1:
            storie_number_one()
        break;
    
        case 2:
            storie_number_two()
        break;
    
        case 3:
            storie_number_three()
        break;

        case 4:
            storie_number_four()
        break;

        case 5:
            storie_number_five()
        break;

        case 6:
            storie_number_six()
        break;
        default: storie_number_one()
    }
}

const storie_image = document.querySelector(".storie_content-image")
const active_storie_img = document.querySelector(".active_storie_img")
const link = document.querySelector(".link")
const active_storie_username = document.querySelector(".active_storie-username")
const sponsor_username = document.querySelector(".sponsor")
const verify_icon = document.querySelector(".verify-icon")
const button = document.querySelector(".click-button")

function storie_number_one(){
    console.log("Story 1")
    active_storie = 1;
   
    storie_image.src = "./resources/drone.jpg"   
    active_storie_img.src = "./resources/profile.jpg"
    active_storie_username.textContent = "Hari Bahadur Thapa"

    sombrear_background_storie1()
}

function storie_number_two(){
    console.log("Story 2")
    active_storie = 2;
    storie_image.id = "sponsored-post";
    link.href ="https://wa.me/14153166018?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Telerivet's%20WhatsApp%20offerings."
    storie_image.src = "./resources/post.jpg"  
    active_storie_img.src = "./resources/telerivetlogo.png"
    active_storie_username.textContent = "Telerivet"
    sponsor_username.textContent= "Sponsored"
    verify_icon.classList.add("material-symbols-sharp")
    verify_icon.textContent="verified"
    button.textContent="CONTACT US"
    button.style.position="absolute";
    button.style.top= "90%";
    button.style.left= "50%";
    button.style.transform="translate(-50%, -50%)";
    button.style.Zindex="7";
    button.style.cursor="pointer";
   
    sombrear_background_storie2()
}

function storie_number_three(){
    console.log("Story 3")
    active_storie = 3;
    
    storie_image.src = "./resources/ferrari.jpg" 
    active_storie_img.src = "./resources/abilio.jpg"
    active_storie_username.textContent = "Abel Johnson"

    sombrear_background_storie3()
}

function storie_number_four(){
    console.log("Story 4")
    active_storie = 4;

    storie_image.src = "./resources/tenis.jpg"
    active_storie_img.src = "./resources/jose.jpg"
    active_storie_username.textContent = "Victor Williams"

    sombrear_background_storie4()
}

function storie_number_five(){
    console.log("Story 5")
    active_storie = 5;

    storie_image.src = "./resources/soraya_storie.jpg" 
    active_storie_img.src = "./resources/soraya.jpg"
    active_storie_username.textContent = "Sophie Davis"

    sombrear_background_storie5()
}

function storie_number_six(){
    console.log("Story 6")
    active_storie = 6;

    storie_image.src = "" 
    active_storie_img.src = ""
    active_storie_username.textContent = ""

    sombrear_background_storie6()
}


// ********************* HIGHLIGHTING THE BACKGROUND OF EACH USER (LEFT SIDEBAR PANEL)
//background_user-selected


const storie_1 = document.getElementById("storie_1")
const storie_2 = document.getElementById("storie_2")
const storie_3 = document.getElementById("storie_3")
const storie_4 = document.getElementById("storie_4")
const storie_5 = document.getElementById("storie_5")
const storie_6 = document.getElementById("storie_6")

storie_1.addEventListener("click", storie_number_one)
storie_2.addEventListener("click", storie_number_two)
storie_3.addEventListener("click", storie_number_three)
storie_4.addEventListener("click", storie_number_four)
storie_5.addEventListener("click", storie_number_five)
storie_6.addEventListener("click", storie_number_six)



function sombrear_background_storie1(){
    storie_1.classList.add("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
    resetImageID();
}

function sombrear_background_storie2(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.add("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
   
}
function resetImageID() {
    if (storie_image.id) {
        storie_image.removeAttribute("id"); // Remove the ID
        sponsor_username.textContent =""
        link.removeAttribute("href")
        button.textContent=""
        button.removeAttribute("style");
        verify_icon.textContent=""

    }

}

function sombrear_background_storie3(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.add("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
    resetImageID();
}

function sombrear_background_storie4(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.add("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
    resetImageID();
}

function sombrear_background_storie5(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.add("background_user-selected")
    storie_6.classList.remove("background_user-selected")
    resetImageID();
}

function sombrear_background_storie6(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.add("background_user-selected")
    resetImageID();
}







//* ******************** AUTOMATICALLY PLAYING STORIES ********************** */
//open_storie1()

/*
function pause_play_stories(state){   // <= This function was called in the section "Changing Pause/Play icon"
    if (state == "playing"){ 
        var next_storie_interval = setInterval(next = () =>{            
                console.log("Next story")  
            }, 1000)        
        }
        else if(state == "paused")
    } 
*/

