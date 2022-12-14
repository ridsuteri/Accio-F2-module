let colorArr = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'silver', 'gold', 'teal', 'maroon', 'navy', 'olive', 'lime', 'aqua', 'fuchsia', 'indigo', 'violet', 'coral', 'crimson', 'khaki', 'magenta', 'plum', 'turquoise', 'wheat', 'beige', 'azure', 'lavender', 'mint', 'peach', 'salmon', 'tan', 'tomato', 'chocolate', 'copper', 'gold', 'silver', 'bronze', 'platinum', 'emerald', 'ruby', 'sapphire', 'amethyst', 'aquamarine', 'topaz', 'amber', 'jade', 'obsidian', 'pearl', 'peridot', 'agate', 'opal', 'onyx', 'sardonyx', 'zircon', 'jacinth', 'jasper', 'jet', 'lapis', 'malachite', 'marble', 'maroon', 'pearl', 'quartz', 'ruby', 'sapphire', 'turquoise', 'agate', 'amber', 'amethyst', 'aquamarine', 'azurite', 'beryl', 'carnelian', 'chrysoberyl', 'chrysoprase', 'coral', 'diamond', 'emerald', 'garnet', 'heliotrope', 'jade', 'jasper', 'jet', 'lapis', 'lazuli', 'malachite', 'moonstone', 'obsidian', 'onyx', 'opal', 'pearl', 'peridot', 'quartz', 'ruby', 'sapphire', 'spinel', 'tiger eye', 'topaz', 'turquoise', 'zircon', 'amber', 'amethyst', 'aquamarine', 'azurite', 'beryl', 'carnelian', 'chrysoberyl', 'chrysoprase', 'coral', 'diamond', 'emerald', 'garnet', 'heliotrope', 'jade', 'jasper', 'jet', 'lapis', 'lazuli', 'malachite', 'moonstone', 'obsidian', 'onyx', 'opal', 'pearl', 'peridot', 'quartz', 'ruby', 'sapphire'];

let button = document.getElementsByTagName('button')[0];

button.addEventListener('click', changeBg)

function changeBg() {
    let decimal = Math.random() * colorArr.length;
    let number = Math.floor(decimal);
    let color = colorArr[number];
    document.body.style.backgroundColor = color;
}