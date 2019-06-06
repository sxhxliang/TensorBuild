var nunjucks = require('nunjucks')
import {ModelTemplate} from './modelTemplate.js'
import {Block} from './block'

function TemplateRender(graphModel){

 
  const nodes_op = {}

  const inputs = []
  const outputs = []
  const GraphNodes = []
  const GraphNodesMap = {}
  const inputNames ={}
  
  const prefix = ''
  const modelName = 'Model'

  const forwardStrs = []
  let import_modules = []
  let forwardStr = ''
  let package_name
  let block_module = ''

  // function format_param(op_params){
  //   Object.keys(op_params).forEach(function(key){
  //     if(op_params[key].value != undefined){
  //         htmls.push(key +': '+op_params[key].value)
  //     }else if(op_params[key].default != undefined) {
  //         htmls.push(key +': '+op_params[key].default)
  //     }else{
  //         htmls.push(key +': None')
  //     }
  //     console.log(op_params[key])
  //   })
  // }

  graphModel.graph.nodes.forEach(node => {
    
      const node_type = node.value.label
      const schema = node.value.properties.schema
      let opt = true

      if(node_type == 'Input'){
        opt = false
        inputs.push(node.v)
        // inputIds.push(node.v)
        inputNames[node.v] = node.v
      }

      if(node_type == 'Output'){
          opt = false
          outputs.push(node.v)
        //   outputIds.push(node.v)
        }
      

      // if 
     
      if(Object.keys(Block).indexOf(node_type) != -1){
        package_name = node_type
        if(import_modules.indexOf(node_type) == -1){
          import_modules.push(node_type)
          console.log(node_type)
          block_module = block_module + Block[node_type]
        }
      }else{
        if(schema.package == 'torchvison.models'){
          package_name = 'models.'+ node_type.toLowerCase()
        }else{
          package_name = 'nn.'+node_type
        }
       
      }

      const opt_node = {'type': package_name, 'name': node.v,'opt':opt}

      if(opt){
        const op_params = graphModel.params[node.v]
        const params = []
        let key,param


        for(key in op_params){
        
            if(op_params[key] != ''){
                if(op_params[key].value != undefined){
                    param = key +'='+ op_params[key].value
                }else if(op_params[key].default != undefined){
                    param = key +'='+ op_params[key].default
                }else{
                    param = key +'=None'
                }
                params.push(param)
            }
        }
        opt_node['params'] = params.join(',')
        GraphNodes.push(opt_node)
        GraphNodesMap[node.v] = opt_node
      }
    });

  // forward
  graphModel.order.forEach(node => {
      let input_data,output_data

      if(graphModel.global_inputs.indexOf(node.opt)!==-1){
          input_data = node.opt
          output_data =  'out_'+ node.opt
          forwardStr = output_data + ' = '+ input_data

      }else if(graphModel.global_outputs.indexOf(node.opt)!==-1){
          input_data = 'out_'+ node.inputs.join(', out_')
          output_data =  'out_'+ node.opt
          forwardStr = output_data + ' = '+ input_data

      }else{
          input_data = 'out_'+ node.inputs.join(', out_')
          output_data = 'out_'+ node.opt
          forwardStr = output_data + ' = self.'+ prefix+ node.opt+'('+input_data+')'
      }

      forwardStrs.push(forwardStr)
  });


  // console.log(forwardStrs)
  const _context = {
    CLASSNAME: modelName,
    PREFIX: prefix,
    BlockModule: block_module,
    INPUTS: inputs.join(','),
    INPUTNAMES:inputNames,
    INPUTSIDS:inputs,
    OUTPUTSIDS:outputs,
    OUTPUTS: 'out_' + outputs.join(', out_'),
    OPTNODES: GraphNodes,
    FORWARDOPTS:forwardStrs,
    OPTNODESMAP: GraphNodesMap
  };

  const res = nunjucks.renderString(ModelTemplate, _context);

  return res
}

export {TemplateRender}