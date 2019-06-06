
import {baseNodeMetas} from './base'
import {pytorchNodeMetas} from './pytorch'
import {backboneMetas} from './backbone'
import {blockMetas} from './block'
const NodeMetas = []
// console
// const layers = []
// pytorchNodeMetas.forEach(function(item){
//     layers.push(item.name)
// })
// console.log(layers)
// console.log(Object.keys(pytorchNodeMetas));
NodeMetas.push.apply(NodeMetas, blockMetas);
NodeMetas.push.apply(NodeMetas, backboneMetas);
NodeMetas.push.apply(NodeMetas, baseNodeMetas);
NodeMetas.push.apply(NodeMetas, pytorchNodeMetas);

export{NodeMetas}

