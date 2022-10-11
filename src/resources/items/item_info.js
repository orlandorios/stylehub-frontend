const items = [
{
    title : 'green_platform',
    type : 'shoes',
    color : 'green',
    size : '8',
    material : 'silk',
    source : 'simmi shoes',
    tag : 'hard to walk in', 
    image : 'src/resources/items/images/green_platforms.jpeg'
},
{
    title : 'brown_heel',
    type : 'shoes',
    color : 'brown',
    size : '8',
    material : 'plastic',
    source : 'Forever 21',
    tag : 'easy to walk in, club-friendly',
    image : 'src/resources/items/images/brown_heels.jpeg'
},
{
    title: 'green_nikes',
    type : 'shoes',
    color : 'green',
    size : '8.5',
    material : 'leather',
    source : 'StockX',
    tag : 'creases and cleans easily',
    image: 'src/resources/items/images/green_sneakers.jpeg'
},
{
    title: 'neon_clogs',
    type: 'shoes',
    color: 'green',
    size: '7',
    material : 'foam',
    source: 'Oluolin',
    tag: 'too small; only wear with long pants',
    image: 'src/resources/items/images/neon_clogs.jpeg'
},
{
    title: 'pink_heels',
    type: 'shoes',
    color: 'pink',
    size: '8',
    material: 'leather',
    source: 'Simmi Shoes',
    tag: 'loose straps',
    image: 'src/resources/items/images/pink_heels.jpeg'
},
{
    title: 'white_platforms',
    type: 'shoes',
    color: 'white',
    size: '8',
    material: 'leather',
    source: 'Forever 21',
    tag: 'dog bite marks on left foot',
    image: 'src/resources/items/images/white_platforms.jpeg'
},
{
    title: 'wavy_crocs',
    type: 'shoes',
    color: 'green',
    size: '8',
    material: 'foam',
    source: 'StockX',
    tag: 'must wear with thick, long socks',
    image: 'src/resources/items/images/wavy_crocs.jpeg'
},
{
    title: 'chunky_boots',
    type: 'shoes',
    color: 'black',
    size: '8',
    material: 'leather',
    source: 'Simmi Shoes',
    tag: 'top part is stiff, wear with long socks',
    image: 'src/resources/items/images/chunky_boots.jpeg'
},
{
    title: 'forest_green_NB',
    type: 'shoes',
    color: 'green',
    size: '8',
    material: 'suede',
    source: 'StockX',
    tag: 'looks great with gold anklet',
    image: 'src/resources/items/images/forest_green_sneakers.jpeg'
},
{
    title: 'blue_jordans',
    type: 'shoes',
    color: 'blue',
    size: '8.5',
    material: 'leather',
    source: 'Good Times Charlotte',
    tag: '',
    image: 'src/resources/items/images/blue_jordans.jpeg'
},
{
    title: 'light_jeans',
    type: 'bottoms',
    color: 'blue',
    size: '6',
    material: 'denim',
    source: 'American Eagle',
    tag: 'super comfy! perfect length',
    image: 'src/resources/items/images/light_jeans.jpeg'
},
{
    title: 'navy_cargos',
    type: 'bottoms',
    color: 'blue',
    size: '6',
    material: 'cotton',
    source: 'American Eagle',
    tag: 'shrinks in the wash',
    image: 'src/resources/items/images/navy_cargos.jpeg'
}, 
{
    title: 'edgy_miniskirt',
    type: 'bottoms',
    color: 'black',
    size: 'S',
    material: 'denim',
    source: 'Urban Outfitters',
    tag: 'stretchy! super short',
    image: 'src/resources/items/images/edgy_miniskirt.jpeg'
},
{
    title: 'velvet_flare_pants',
    type: 'bottoms',
    color: 'green',
    size: 'S',
    material: 'velvet',
    source: 'Shein',
    tag: 'better with platforms. keep it groovy!',
    image: 'src/resources/items/images/velvet_flare_pants'
}, 
{
    title: 'black_jeans',
    type: 'bottoms',
    color: 'black',
    size: 'M',
    material: 'denim',
    source: 'Forever 21',
    tag: 'tight around hips, need a belt',
    image: 'src/resources/items/images/black_jeans',
},
{
    title: 'corduroy_jacket',
    type: 'outerwear',
    color: 'blue',
    size: 'L',
    material: 'corduroy',
    source: 'Forever 21',
    tag: 'very warm, perfect for layering',
    image: 'src/resources/items/images/corduroy_jacket'
},
{
    title: 'levis_jacket',
    type: 'outerwear',
    color: 'blue',
    size: 'L',
    material: 'denim',
    source: 'found at a party',
    tag: 'collar is twisted, but a cool rugged look',
    image: 'src/resources/items/images/levis_jacket'
},
{
    title: 'blue_windbreaker',
    type: 'outerwear',
    color: 'blue',
    size: 'L',
    material: 'swishy',
    source: 'Goodwill',
    tag: 'very thin, adjustable scrunch along the hem',
    image: 'src/resources/items/images/blue_windbreaker'
},
{
    title: 'stranger_holiday_sweater',
    type: 'tops',
    color: 'blue',
    size: 'M',
    material: 'knit',
    source: 'Target',
    tag: 'comfy convo starter',
    image: 'src/resources/items/images/stranger_holiday_sweater.jpeg'
},
{
    title: 'bape_croptop',
    type: 'tops',
    color: 'white',
    size: 'S',
    material: 'cotton',
    source: 'Stolen from my ex',
    tag: 'armpit stains!',
    image: 'src/resources/items/images/bape_croptop.jpeg'
},
{
    title: 'criss_cross_crop',
    type: 'tops',
    color: 'white',
    size: 'S',
    material: 'knit',
    source: 'Forever 21',
    tag: 'untrustworthy; should not lift arms too high',
    image: 'src/resources/items/images/criss_cross_crop',
}, 
{
    title: 'off_shoulder_crop',
    type: 'tops',
    color: 'black',
    size: 'S',
    material: 'knit',
    source: 'Forever 21',
    tag: 'extremely cropped',
    image: 'src/resources/items/images/off_shoulder_crop.jpeg'
},
{
    title: 'ribbed_tank',
    type: 'tops',
    color: 'black',
    size: 'S',
    material: 'stretch',
    source: 'Forever 21',
    tag: 'the comfiest',
    image: 'src/resources/items/images/ribbed_tank.jpeg'
},
{
    title: 'chocolate_swirl_skirt',
    type: 'bottoms',
    color: 'brown',
    size: 'M',
    material: 'polyester',
    source: 'Shein',
    tag: 'kinda loose, need to fold waistband a few times',
    image: 'src/resources/items/images/chocolate_swirl_skirt.jpeg'
},
{
    title: 'blessing_tee',
    type: 'tops',
    color: 'black',
    size: 'S',
    material: 'cotton',
    source: 'God is Dope Brand',
    tag: 'bleach stain near bottom',
    image: 'src/resources/items/images/blessing_tee.jpeg'
}, 
{
    title: 'high_life_tee',
    type: 'tops',
    color: 'green',
    size: 'M',
    material: 'cotton',
    source: 'Stole from my ex',
    tag: 'comfy',
    image: 'src/resources/items/images/high_life_tee.jpeg'
},
{
    title: 'camo_graphic_tee',
    type: 'tops',
    color: 'brown',
    size: 'M',
    material: 'cotton',
    source: 'Loved By Her Brand',
    tag: 'bright orange detail on back',
    image: 'src/resources/items/images/camo_graphic_tee.jpeg'
},
{
    title: 'bye_felicia_tee',
    type: 'tops',
    color: 'black',
    size: 'L',
    material: 'cotton',
    source: 'Zumiez',
    tag: 'kinda long',
    image: 'src/resources/items/images/bye_felicia_tee.jpeg'
},
{
    title: 'pink_halter_dress',
    type: 'tops',
    color: 'pink',
    size: 'S',
    material: 'beachtowel',
    source: 'Target',
    tag: '',
    image: 'src/resources/items/images/pink_halter_dress.jpeg'
},
{
    title: 'green_maxi_dress',
    type: 'tops',
    color: 'green',
    size: 'M',
    material: 'stretchy',
    source: 'Parade Brand',
    tag: 'gets stretched quick',
    image: 'src/resources/items/images/green_maxi_dress'
},
{
    title: 'floral_shirt_dress',
    type: 'tops',
    color: 'yellow',
    size: 'S',
    material: 'polyester',
    source: 'Ann Taylor',
    tag: 'interview',
    image: 'src/resources/items/images/floral_shirt_dress.jpeg'
},
{
    title: 'schoolgirl_skirt',
    type: 'bottoms',
    color: 'blue',
    size: 'M',
    material: 'polyester',
    source: 'H&M',
    tag: 'plaid with pleats',
    image: 'src/resources/items/images/schoolgirl_skirt.jpeg'
},
{
    title: 'orange_LA_cap',
    type: 'accessory',
    color: 'orange',
    size: '',
    material: '',
    source: 'Urban Outfitters',
    tag: 'casual',
    image: 'src/resources/items/images/orange_LA_cap.jpeg'
},
{
    title: 'trippy_trucker_hat',
    type: 'accessory',
    color: 'black',
    size: '',
    material: '',
    source: 'Urban Outfitters',
    tag: 'casual',
    image: 'src/resources/items/images/trippy_trucker_hat.jpeg'
},
{
    title: 'PBW_bag',
    type: 'accessory',
    color: 'pink',
    size: 'M',
    material: 'faux leather',
    source: 'CISE',
    tag: '',
    image: 'src/resources/items/images/PBW_bag.jpeg'
}, 
{
    title: 'mini_telfar',
    type: 'accessory',
    color: 'black',
    size: 'S',
    material: 'leather',
    source: 'Telfar',
    tag: 'versatile',
    image: 'src/resources/items/images/mini_telfar.jpeg'
}, 
{
    title: 'green_banded_purse',
    type: 'accessory',
    color: 'green',
    size: 'S',
    material: 'leather',
    source: 'Shein',
    tag: 'gold accents',
    image: 'src/resources/items/images/green_banded_purse.jpeg'
},
{
    title: 'gator_purse',
    type: 'accessory',
    color: 'black',
    size: 'S',
    material: 'faux alligator',
    source: 'Shein',
    tag: '',
    image: 'src/resources/items/images/gator_purse'
}





]