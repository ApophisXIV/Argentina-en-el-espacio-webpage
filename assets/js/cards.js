const card_template = (card, style) => `
<div class="card ${style}">
    <div class="card-image">
        <img src="${card.img_url}" alt="" />
    </div>
    <div class="card-body">
        <div class="card-title">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
        <button type="button">
            <i class="fa-solid fa-eye"></i>
        </button>
    </div>
</div>
`;

const styles = ["card-t1", "card-t2", "card-t3", "card-t4"];
const satellites = [
	{
		title: "Victor-1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/satellites/victor-1.jpg",
	},
	{
		title: "SAC-B",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/satellites/sac-b.jpg",
	},
	// TODO: Add more cards
	{
		title: "Victor-1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/satellites/victor-1.jpg",
	},
	{
		title: "SAC-B",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/satellites/sac-b.jpg",
	},
];

const launchers = [
	{
		title: "Tronador II",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/launchers/tronador-ii.jpg",
	},
	{
		title: "VEX-1A",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/launchers/vex-1a.png",
	},
	{
		title: "VEX-1B",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/launchers/vex-1b.png",
	},
	{
		title: "VEX-5A",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		img_url: "assets/images/launchers/vex-5a.jpg",
	},
];

for (let i = 0; i < satellites.length; i++)
	document.querySelectorAll(".card-container")[0].innerHTML += card_template(satellites[i], styles[i % styles.length]);

for (let i = 0; i < launchers.length; i++)
	document.querySelectorAll(".card-container")[1].innerHTML += card_template(launchers[i], styles[i % styles.length]);
