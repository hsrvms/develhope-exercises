import fs from 'fs';

const dataToWrite = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum finibus arcu, id pellentesque dui vestibulum ac. Mauris lobortis in justo sit amet interdum. Integer lectus lectus, egestas placerat dui non, ultrices dictum neque. Quisque nec tincidunt libero. Pellentesque id ante vel augue dictum sollicitudin. Praesent ullamcorper turpis non diam dictum, sit amet auctor orci pellentesque. Pellentesque sollicitudin ligula a imperdiet pellentesque. Pellentesque eu lacus bibendum dui consequat ultrices eu vitae erat. Proin eget condimentum ante, et dignissim velit. Quisque fringilla ex in interdum dignissim. Nullam lectus nulla, sodales pharetra augue dignissim, luctus lacinia felis. Duis non purus sem. Vivamus ultrices nisl risus, vitae luctus dolor tempor accumsan. Morbi porta arcu hendrerit neque faucibus tincidunt.

Donec ante massa, cursus at pellentesque in, dictum cursus quam. Aenean dapibus fermentum urna nec consequat. Mauris dapibus metus vestibulum nisl faucibus, et tincidunt urna maximus. Suspendisse bibendum sollicitudin odio, non sodales est tincidunt at. Suspendisse potenti. Sed ipsum nisl, placerat at varius quis, eleifend feugiat elit. Donec bibendum posuere tempor. Aenean in ullamcorper tellus. Proin lectus est, rhoncus ac leo sit amet, porttitor semper diam. In hac habitasse platea dictumst. Maecenas interdum et lacus et faucibus. Nulla vehicula orci id felis finibus consectetur. Mauris eu nisl elit. Aenean pharetra lectus sed risus luctus euismod. Aenean turpis elit, placerat at sem sed, elementum molestie leo. Vivamus nibh nunc, ultricies eget ultricies in, aliquet a est.

Suspendisse elit ante, efficitur at diam id, condimentum vehicula lectus. Maecenas ex velit, porttitor eu sagittis rutrum, faucibus id ipsum. Praesent tellus nunc, feugiat et tellus vitae, accumsan lacinia mauris. Nunc condimentum, nibh nec viverra dapibus, justo dolor accumsan dui, ut blandit tellus risus quis diam. Curabitur consequat iaculis gravida. Etiam nec blandit metus. Mauris a ipsum non tortor tempus pulvinar accumsan vel lorem. Sed tristique nunc nec nisl ultricies, eu viverra magna sodales. Nulla quis risus vitae tortor blandit tincidunt. Duis gravida lacus et risus semper, non vestibulum eros euismod. Integer sollicitudin felis enim, id fermentum nisi congue quis. Ut eros tortor, blandit at vestibulum et, sollicitudin ac metus. Quisque risus est, vehicula eget magna vitae, dapibus eleifend felis.

Quisque et finibus arcu, sed dapibus ligula. Sed urna velit, efficitur at finibus vitae, malesuada non orci. Morbi in erat eu orci tincidunt volutpat. Integer sit amet nisi et quam molestie feugiat. Nunc quis tempor magna. Duis venenatis turpis aliquet feugiat iaculis. Donec interdum in tellus id tincidunt. Phasellus sodales nibh at ligula luctus mollis. Donec elit nisi, egestas in interdum ultrices, feugiat at tellus. Sed in nibh faucibus, condimentum ligula porttitor, feugiat velit. Morbi commodo mi turpis, eu venenatis libero euismod non. Integer placerat eu risus eu placerat. Nam a cursus neque.`;

const filePath = 'loremIpsum.txt'

fs.writeFile(filePath, dataToWrite, (err) => {
  if(err) {
    console.error(err);
  } else {
    console.log('Data has been written to', filePath)
  }
})