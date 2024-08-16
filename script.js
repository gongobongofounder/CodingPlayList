document.body.style.backgroundColor = "black"
let card_length = document.getElementsByClassName("card").length
//Card Making Function
function CardMaker(cName, views, img_link, video_duration, ago, title, video_link, channelLink) {
    let card_container = document.createElement("div")
    card_container.setAttribute("class", "card-container")
    document.querySelector(".container").append(card_container)
    let card_container_length = document.getElementsByClassName("card-container").length
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.innerHTML = `<a href=\"${video_link}\"><img src=\"${img_link}\"
                    alt=\"My Video Collection\"></a>\n <div class=\"duration\">${video_duration}</div>`
    document.getElementsByClassName("card-container")[card_container_length - 1].append(card)
    let text = document.createElement("div")
    text.setAttribute("class", "text")
    text.innerHTML = `<div class=\"text-title\">${title}
                </div>
                <div class=\"text-metadata\"> <a href=\"${channelLink}\">${cName}</a> • ${views} views • ${ago}</div>`
    document.getElementsByClassName("card-container")[card_container_length - 1].append(text)
}

CardMaker("CodeWithHarry","2.3M","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ","12:30","10 months ago","JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","https://www.youtube.com/watch?v=CO_DAXswOrc&t=25s","https://www.youtube.com/@CodeWithHarry")

CardMaker("NetworkChuck","2.3M","https://i.ytimg.com/vi/mRMmlo_Uqcs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCk-gtVqJS5v-qGrWr9L7mqiPbZbg","17:42","3 years ago","you need to learn Python RIGHT NOW!! // EP 1","https://www.youtube.com/watch?v=mRMmlo_Uqcs&list=PLIhvC56v63ILPDA2DQBv0IKzqsWTZxCkp&index=1","https://www.youtube.com/@NetworkChuck")

CardMaker("CodeWithHarry","460K","https://i.ytimg.com/an_webp/qPxvmrtTQ_4/mqdefault_6s.webp?du=3000&sqp=CIzI_bUG&rs=AOn4CLB-9Tz77M3xkyP_4CZpbQa1mpX6jA","9:48","4 months ago","🎮 How to Become a Game Developer | Complete Roadmap for Game Development 🎮","https://www.youtube.com/watch?v=qPxvmrtTQ_4&t=324s","https://www.youtube.com/@CodeWithHarry")
