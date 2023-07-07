const creature = {
	mammal: {
		human: {
			male: {
				name: "John",
			},
		},
	},
};

const name1 = creature?.mammal?.human?.male?.name;
const name2 = creature?.mammal?.human?.female?.name;
console.log(name1);
console.log(name2);
