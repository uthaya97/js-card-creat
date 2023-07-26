var c=[
	{
	id:1,
	img:"images/pawan-shrerat.jpg",
    name:"KABADDI",
    content:"Kabaddi is a sport developed centered on Jallikattu. It is common among the Ayar tribal people who lived in the Mullai geographical region",
	},
	{
	id:2,
	img:"images/Sehwag.jpg",
    name:"CRICKET",
    content:"Cricket News Live: Check live cricket scores, schedule, results, scorecard, and ball by ball commentary along with player stats, ...",
	},
	{
	id:3,
	img:"images/football.jpg",
    name:"FOOTBALL",
    content:"Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word",
	},
	{
	id:4,
	img:"images/basketball.jpg",
    name:"BASKETBALL",
    content:"Basketball is a team sport ; Players advance the ball by bouncing it while walking or running (dribbling) or by passing it to a teammate",
	},
    {
    id:5,
    img:"images/volleyball.jpg",
     name:"VOLLEYBALL",
    content:"Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team",
    },
    {
     id:6,
    img:"images/batmittan.jpg",
    name:"BATMITTAN",
     content:"Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams",
    }
	

]


var card=document.getElementById("card-section");

var container=document.createElement("div");
    container.classList.add("container");
    card.appendChild(container);

    var head=document.createElement("h1");
    container.appendChild(head);


    var cardrow=document.createElement("div");
    cardrow.classList.add("card-row");
    container.appendChild(cardrow);

    c.forEach(function(e){

    var cardcol=document.createElement("div");
    cardcol.classList.add("card-col");
    cardrow.appendChild(cardcol);

    var mcard=document.createElement("div");
    mcard.classList.add("card");
    cardcol.appendChild(mcard);

    var picture=document.createElement("img");
    mcard.appendChild(picture);
    picture.setAttribute("src",e.img);

    var heading=document.createElement("h1");
    mcard.appendChild(heading);
    heading.innerHTML=e.name;

    var para=document.createElement("p");
    mcard.appendChild(para);
    para.innerHTML=e.content;


    })
