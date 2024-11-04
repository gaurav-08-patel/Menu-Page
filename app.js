const menu=[
    {
        id:1,
        name:"Stack Pancakes",
        img:`https://www.seriouseats.com/thmb/oVyxCViOHfKt8Tbo1uDs2WtsBvU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__05__20150517-pancake-primary-213a7ae6fd7e4ceab13f1e34becaf1a6.jpg`,
        price:`$15.99`,
        desc:`Fluffy buttermilk pancakes  stacked high, drizzled with warm maple syrup, and topped with a dollop of whipped cream and fresh berries. Perfect for starting your day with a smile.`,
        type:`breakfast`,
    },
    {
        id:2,
        name:`Classic Diner Burger`,
        img:`https://www.seriouseats.com/thmb/8ciC6K_vYi79Lc9bHtU_BqFsy90=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__aht.seriouseats.com__images__2012__06__20100514-Crispy-Burger-primary-cc01728be9e6403dafff30591dbf28bd.jpg`,
        price:`$10.99`,
        desc:`A juicy beef patty grilled to perfection, served on a toasted brioche bun with crisp lettuce, ripe tomato, red onion, and a slice of cheddar cheese. Add a side of golden fries for the ultimate diner experience.`,
        type:`lunch`,
    },
    {
        id:3,
        name:`Southern Comfort Chicken`,
        img:`https://www.seriouseats.com/thmb/ZZQuX-cP9aQfK-GS6R1c98P3JT8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg`,
        price:`$20.99`,
        desc:`Crispy fried chicken served with creamy mashed potatoes, rich gravy, and a side of buttery corn on the cob. A taste of the South in every bite.`,
        type:`lunch`,
    },
    {
        id:4,
        name:`Avocado Toast Deluxe`,
        img:`https://cookieandkate.com/images/2012/04/avocado-toast-variations.jpg`,
        price:`$9.99`,
        desc:`Smashed avocado on toasted sourdough bread, topped with a poached egg, cherry tomatoes, and a sprinkle of feta cheese. A healthy and satisfying start to your morning.`,
        type:`breakfast`,
    },
    {
        id:5,
        name:`Classic Milkshake Trio`,
        img:`https://www.seriouseats.com/thmb/fgfXSUtShiJK01dY1dnFdM-Za5Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__09__20140920-peanut-butter-cup-shake-autumn-giles-725ee27cd3414b1cbd895ec647868b04.jpg`,
        price:`$5`,
        desc:`A trio of classic milkshakes in vanilla, chocolate, and strawberry flavors, each topped with whipped cream and a cherry. A nostalgic treat for all ages.`,
        type:`shakes`,
    },
    {
        id:6,
        name:`Veggie Delight Wrap`,
        img:`https://www.seriouseats.com/thmb/JmeFSZ1LdmuDFVs-6eB7cBVXBWo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2013__09__20110502-127355-dinner-tonight-dagwood-easy-packed-lunches-02-e71c6ddd41f648d0bfe882ba987632de.jpg`,
        price:`$7.99`,
        desc:`A fresh and healthy wrap filled with grilled vegetables, hummus, avocado, and a sprinkle of feta cheese. Served with a side of mixed greens and a light vinaigrette.`,
        type:`lunch`,
    },
    {
        id:7,
        name:`Breakfast Burrito`,
        img:`https://www.seriouseats.com/thmb/9ksKn5RFyoVQmqDg0Yg2iyfJkJw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200706-chorizo-egg-refried-bean-breakfast-burrito-daniel-gritzer-30-8c0e2a90d5d64399a58e1cf5e856922f.jpg`,
        price:`$12.99`,
        desc:`A warm tortilla filled with scrambled eggs, crispy bacon, cheddar cheese, and a touch of salsa. Served with a side of hash browns for a hearty breakfast.`,
        type:`breakfast`,
    },
    {
        id:8,
        name:`Berry Parfait`,
        img:`https://www.seriouseats.com/thmb/8XsePfue2JgZgijdpSobbu9HMtE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__08__20130808-wakeandbake-summerpudding-a156561140384fac8b583cdd53b7b625.JPG`,
        price:`$15.99`,
        desc:`Layers of creamy Greek yogurt, fresh berries, and crunchy granola. A light and refreshing option to kickstart your day.`,
        type:`breakfast`,
    },
    {
        id:9,
        name:`Banana Nut Shake`,
        img:`https://www.seriouseats.com/thmb/e3MW1ynWYfLDdJj3XYc_DD8F3yY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240430-BananaSmoothie-AmandaSuarez-14-f0ea51693ebd431d861acf9d7dc810bc.jpg`,
        price:`$12.99`,
        desc:`A creamy blend of ripe bananas, almond milk, and a hint of cinnamon, topped with crushed walnuts and a drizzle of honey. A deliciously nutty shake.`,
        type:`shakes`,
    },
    {
        id:10,
        name:`Chocolate Lava Cake`,
        img:`https://www.seriouseats.com/thmb/5Hl2WbGJGKjlPrJU70CBYMU0TWI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SEA-flourless-chocolate-lava-cake-recipe-hero-C-a0a88b49cca8499e96b12649c0d96240.jpg`,
        price:`$6.99`,
        desc:`A rich, molten chocolate cake with a gooey center, served warm with a scoop of vanilla ice cream and a drizzle of chocolate sauce. The perfect ending to any meal.`,
        type:`dessert`,
    },
    {
        id:11,
        name:`Mint Chocolate Chip Shake`,
        img:`https://www.seriouseats.com/thmb/H4VcPVxePAAMSzRGfguYeYWBIYE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__03__20120314-girl-scout-cookie-shake-green-7983b24f3d6c42568871695b1e624e50.jpg`,
        price:`$15.99`,
        desc:`A refreshing mix of mint ice cream and chocolate chips, blended to perfection and topped with whipped cream and a sprinkle of chocolate shavings. A cool and indulgent treat.`,
        type:`shakes`,
    },
    {
        id:12,
        name:`Seafood  Platter`,
        img:`https://www.seriouseats.com/thmb/QKk-0v2vBliupXNvCmEEo5PlQ9U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20211201-fritto-misto-vicky-wasik-22-19140dca6eff4de7ad0637641a013627.jpg`,
        price:`$20.99`,
        desc:`A medley of grilled shrimp, scallops, and fish fillets, served with a side of garlic butter rice and steamed vegetables. A seafood lover's dream come true.`,
        type:`lunch`,
    },
    {
        id:13,
        name:`Refreshing Citrus Salad`,
        img:`https://www.seriouseats.com/thmb/3Og0ODUChFeiELOJR6gdRFjZ4GU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__07__20160714-chilled-seafood-recipes-roundup-06-73a81103a5d84a558c004d540aef6d63.jpg`,
        price:`$15.00`,
        desc:`A vibrant mix of fresh greens, juicy orange segments, tangy grapefruit, and crunchy almonds, tossed in a light citrus dressing. A refreshing and zesty option.`,
        type:`lunch`,
    },
    {
        id:14,
        name:`Hearty Beef Stew`,
        img:`https://www.seriouseats.com/thmb/_ddF5Cj4vFLvn7owX-RJ3kKUKuc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220308-Guyanese-Pepperpot-Liz-Voltz-hero-horz-1-2-232649f358f54e6c8f883aa2582a17c2.JPG`,
        price:`$25.00`,
        desc:`Tender chunks of beef slow-cooked with carrots, potatoes, and onions in a savory broth. Served with a side of crusty bread for dipping.`,
        type:`lunch`,
    },
    {
        id:15,
        name:`Spicy Tex-Mex Tacos`,
        img:`https://www.seriouseats.com/thmb/B5N225hdeF2Cd2XhkW1nL5faVX4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20160525-corn-steak-taco-vicky-wasik-1-1500x1125-964f5016b8644298a5c4fe1d0e6ac63f.jpg`,
        price:`$16.99`,
        desc:`Soft corn tortillas filled with seasoned beef or chicken, topped with fresh salsa, guacamole, shredded lettuce, and a sprinkle of cheese. Served with a side of spicy rice and beans.`,
        type:`lunch`,
    },
    {
        id:16,
        name:`Lemon Meringue Pie`,
        img:`https://www.seriouseats.com/thmb/V2dHmFKCluxJ4rPj31A81g9Goug=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20231113-SEA-LemonMeringuePie-FredHardy-03-1519d9ad68484041bdfaba3c09b67411.jpg`,
        price:`$20.00`,
        desc:`A tangy lemon custard filling topped with a fluffy meringue, baked to a golden brown. A refreshing and light dessert.`,
        type:`dessert`,
    },
    {
        id:17,
        name:`Tiramisu`,
        img:`https://www.seriouseats.com/thmb/z8bfg5PG8CrfWCwIfT_aE8AOQ14=/375x250/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-tiramisu-vicky-wasik-41-00531445710a4dfa83ffc7d3a65abb12.jpg`,
        price:`$15.00`,
        desc:`Layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder. A classic Italian dessert with a rich and creamy texture.`,
        type:`dessert`,
    }

];

let sectionCenter=document.querySelector(".section-center");
let btns=document.querySelectorAll(".options");
let outerBorders=document.querySelectorAll(".outer-border");


window.addEventListener("DOMContentLoaded",()=>{
    displayMenuItems(menu);

});

function displayMenuItems(menuItems){
    let displayMenu=menuItems.map((item)=>{
        
        return `<div class="menu-items ">
                <img src="${item.img}" class="" alt="">
                <div class="details">
                    <div class="name-price">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-price">${item.price}</p>  
                    </div>
                    <div class="desc">
                        ${item.desc}
                    </div>
                </div>
            </div>`
        
    });
    
    displayMenu=displayMenu.join("");
    sectionCenter.innerHTML=displayMenu;
}


outerBorders.forEach((x)=>{
    x.addEventListener("click",(e)=>{
        removeBorder();
        e.target.parentElement.classList.toggle("show-border");
    
        
    })
})

function removeBorder(){
    outerBorders.forEach((x)=>{
        x.classList.remove("show-border");
    })
}

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const type=e.target.dataset.goga;
        const filteredMenu=menu.filter((item)=>{
            if(type===item.type){
                return item;
            }
        });
        
        if(type==="all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(filteredMenu);
        }

    })
})