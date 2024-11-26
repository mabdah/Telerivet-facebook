// CLOSE THE "POSTING" DIV
const publications_background = document.querySelector(".publications_container-background")
const publication_container = document.querySelector(".publication_container")
const close_posting_btn = document.querySelector(".close_posting")

publications_background.addEventListener("mousedown", background_close)
close_posting_btn.addEventListener("click", close_posting)

function background_close (event){
    if (event.target == publication_container){
        console.log("do nothing")
    } else if(event.target == publications_background){
        close_posting()
        console.log(event.target)
    }
}

function close_posting (){   
    publications_background.classList.add("hidden")
    publications_background.classList.remove("flex_center")
}

// ************************* opening the posting div


const publication_var = document.querySelector(".publication-var")
publication_var.addEventListener("click", open_publication)

function open_publication (){
    publications_background.classList.remove("hidden")
    publications_background.classList.add("flex_center")
}


// **********************Posting functions

posting_text_container = document.querySelector('.posting_text_container');
post_btn = document.querySelector(".post_btn")
const posts_container = document.querySelector(".posts_container")


post_btn.addEventListener("click", make_post)//<!--Posting when clicking 'Publish'-->

posting_text_container.addEventListener("click", post_activate) //<!--Activating 'Publish' button-->



function post_activate(){
    post_btn.classList.add("post_btn-color")
}

let post_num = 1;

function make_post(){
    posting_content_input = posting_text_container.value;
    if (posting_content_input == ""){
        console.log("Publication")
    } else{
        //posting_template >> <!--Template with the post content-->

        posting_template = (` 
            
            
            <div class="post_user-container">
                                <figure class="post_user-picture">
                                    <img src="./resources/profile.jpg" alt="usrPic"> 
                                </figure>
                                <div class="post_user-details">
                                    <div class="post_user_name-details">
                                        <h4 class="post_user-name">Agastaya KC</h4>
                                        <img src="./resources/triangle-grey.png" alt="" class="arrow-right">
                                        <h4 class="post_user-name">Tech Enthusiasts Group </h4>
                                    </div>

                                    <div class="post_time-details">
                                        <p> <small>3h</small>  </p>
                                        <img class="group_post-logo" src="./resources/groups.png" alt="">
                                    </div>

                                </div>
                            </div>


                            <div class="post_text-container">
                                <p class="post_text-content">${posting_content_input}</p> <!--Post text content-->
                          
                            </div>

                            <div class="likes_and_comments">
                                <div class="likes_post_container">
                                    <img class="likes_post-icon" src="./resources/like.png" alt="">
                                    <p>0</p>
                                </div>

                                <div class="post_comments-container">
                                    <p>No comments</p>
                                </div>
                            </div>

                            <div class="like_and_comment-btn">
                                <div class="i_like_it">
                                    <button class="like_post_btn"> <img src="./resources/like_post.jpg" alt=""> Me gusta</button>
                                </div>
                                <div class="i_comment">
                                    <button class="comment_post_btn"> <img src="./resources/comment_post.jpg" alt=""> Comentar</button>
                                </div>
                            </div>

                            <div class="write_a_comment_container">
                                <figure class="comment_profile_image">
                                    <img src="./resources/profile.jpg" alt="">
                                    <div class="active_user_symbol"></div>
                                </figure>

                                <input class="post_a_comment" type="text" placeholder="Write a comment">
                            </div>


        `)
        

        let before_element = document.querySelector(`.publication_${post_num}`) //<!--Fetching the previous post-->
        post_num +=1;
        let div_element = document.createElement("div")//<!--Creating DIV Element-->
     
        div_element.classList.add("post_wrapper")
        div_element.classList.add(`publication_${post_num}`)  
        posts_container.insertBefore(div_element, before_element) //<!--Asking the document to insert the new post before the previous one-->
        const new_post = document.querySelector(`.publication_${post_num}`)
        new_post.innerHTML = posting_template;  
        posting_text_container.value = ("");
        close_posting()

        console.log(posting_content_input)
    }


}