var nunjucks = require('nunjucks')
// import {template} from '../src/assets/template/modelTemplate'
// import {mode_graph_demo} from '../src/assets/js/graph/demo/model-graph-demo'

// graph: graphFlow.graphlib.json.write(this.g),
// params: this.model_graph_nodes_params,

// order: node_coords,
// edges: this.g.edges(),

// last_node_id: this.g.last_node_id,
// last_edge_id: this.g.last_edge_id,

// global_inputs: this.global_inputs,
// global_outputs: this.global_outputs,

var template = `
        class {{PREFIX}}{{CLASSNAME}}(nn.Module):
            def __init__(self, target,):
                super({{PREFIX}}, self).__init__()

                {% for item in OPTNODES -%}
                {% if item['opt'] -%}
                self.{{PREFIX}}{{item['name']}} = {{item['type']}}({{item['params']}})
                {% endif -%}
                {% endfor %}

            def forward(self, {{INPUTS}} ):
                {% for item in FORWARDOPTS -%}
                {{item}}
                {% endfor %}
                return {{OUTPUTS}}
            `


const mode_graph_demo = {"__date__":"2019-05-20T14:35:00.169Z","graph":{"options":{"directed":true,"multigraph":false,"compound":true},"nodes":[{"v":"Input_0","value":{"svgId":"node0","label":"Input","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"package":"Graph.Global.Input"}},"x":123.625,"y":16.2421875,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"Input_0","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"Resnet50_1","value":{"svgId":"node1","label":"Resnet50","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"package":"ModelZoom"}},"x":123.625,"y":98.7265625,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"Resnet50_1","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"Conv2d_2","value":{"svgId":"node2","label":"Conv2d","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"attributes":[{"name":"output_padding","visible":false},{"name":"in_channels","visible":false},{"name":"out_channels","visible":false},{"default":1,"name":"groups"},{"default":false,"name":"transposed"},{"default":[0,0],"name":"padding"},{"default":[1,1],"name":"dilation"},{"default":[1,1],"name":"stride"},{"default":true,"name":"bias"}],"category":"Layer","package":"torch.nn.modules.conv"}},"x":44.3125,"y":428.6640625,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"Conv2d_2","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"BatchNorm2d_3","value":{"svgId":"node3","label":"BatchNorm2d","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"attributes":[{"default":0.00001,"name":"eps"},{"default":0.1,"name":"momentum"},{"default":true,"name":"affine"},{"default":true,"name":"track_running_stats"}],"category":"Normalization","inputs":[{"name":"input"},{"name":"weight"},{"name":"bias"},{"name":"running_mean"},{"name":"running_var"},{"name":"num_batches_tracked"}],"package":"torch.nn.modules.batchnorm"}},"x":44.3125,"y":511.1484375,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"BatchNorm2d_3","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"ReLU_4","value":{"svgId":"node4","label":"ReLU","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"attributes":[{"default":false,"name":"inplace","visible":false},{"default":0,"name":"threshold"},{"default":0,"name":"value"}],"category":"Activation","package":"torch.nn.modules.activation"}},"x":44.3125,"y":593.6328125,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"ReLU_4","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"Conv2d_5","value":{"svgId":"node5","label":"Conv2d","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"attributes":[{"name":"output_padding","visible":false},{"name":"in_channels","visible":false},{"name":"out_channels","visible":false},{"default":1,"name":"groups"},{"default":false,"name":"transposed"},{"default":[0,0],"name":"padding"},{"default":[1,1],"name":"dilation"},{"default":[1,1],"name":"stride"},{"default":true,"name":"bias"}],"category":"Layer","package":"torch.nn.modules.conv"}},"x":123.625,"y":181.2109375,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"Conv2d_5","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"BatchNorm2d_6","value":{"svgId":"node6","label":"BatchNorm2d","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"attributes":[{"default":0.00001,"name":"eps"},{"default":0.1,"name":"momentum"},{"default":true,"name":"affine"},{"default":true,"name":"track_running_stats"}],"category":"Normalization","inputs":[{"name":"input"},{"name":"weight"},{"name":"bias"},{"name":"running_mean"},{"name":"running_var"},{"name":"num_batches_tracked"}],"package":"torch.nn.modules.batchnorm"}},"x":123.625,"y":263.6953125,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"BatchNorm2d_6","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"ReLU_7","value":{"svgId":"node7","label":"ReLU","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"attributes":[{"default":false,"name":"inplace","visible":false},{"default":0,"name":"threshold"},{"default":0,"name":"value"}],"category":"Activation","package":"torch.nn.modules.activation"}},"x":123.625,"y":346.1796875,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"ReLU_7","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"ResBlocKV2_8","value":{"svgId":"node8","label":"ResBlocKV2","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"package":"ModelBlock"}},"x":211.0546875,"y":593.6328125,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"ResBlocKV2_8","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"ConvBnRelu_9","value":{"svgId":"node9","label":"ConvBnRelu","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"package":"ModelBlock"}},"x":133.625,"y":676.1171875,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"ConvBnRelu_9","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}},{"v":"Output_10","value":{"svgId":"node10","label":"Output","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"package":"Graph.Global.Output"}},"x":133.625,"y":758.6015625,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"Output_10","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false},{"type":"dblclick","name":"","capture":false}]}}}],"edges":[{"v":"Input_0","w":"Resnet50_1","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"Input_0 to Resnet50_1","labelType":"html","lineInterpolate":"basis","class":"","id":"arc0","labelId":"arc0-label","points":[{"x":123.625,"y":32.484375},{"x":123.625,"y":57.484375},{"x":123.625,"y":82.484375}],"elem":{"__data__":{"v":"Input_0","w":"Resnet50_1"}},"arrowheadId":"arrowhead965"}},{"v":"Resnet50_1","w":"Conv2d_2","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"Resnet50_1 to Conv2d_2","labelType":"html","lineInterpolate":"basis","class":"","id":"arc1","labelId":"arc1-label","points":[{"x":90.40625,"y":114.06611649317705},{"x":34.3125,"y":139.96875},{"x":34.3125,"y":181.2109375},{"x":34.3125,"y":222.453125},{"x":34.3125,"y":263.6953125},{"x":34.3125,"y":304.9375},{"x":34.3125,"y":346.1796875},{"x":34.3125,"y":387.421875},{"x":40.374254120098506,"y":412.421875}],"elem":{"__data__":{"v":"Resnet50_1","w":"Conv2d_2"}},"arrowheadId":"arrowhead966"}},{"v":"Resnet50_1","w":"Conv2d_5","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"Resnet50_1 to Conv2d_5","labelType":"html","lineInterpolate":"basis","class":"","id":"arc2","labelId":"arc2-label","points":[{"x":123.625,"y":114.96875},{"x":123.625,"y":139.96875},{"x":123.625,"y":164.96875}],"elem":{"__data__":{"v":"Resnet50_1","w":"Conv2d_5"}},"arrowheadId":"arrowhead967"}},{"v":"Conv2d_2","w":"BatchNorm2d_3","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"Conv2d_2 to BatchNorm2d_3","labelType":"html","lineInterpolate":"basis","class":"","id":"arc3","labelId":"arc3-label","points":[{"x":44.3125,"y":444.90625},{"x":44.3125,"y":469.90625},{"x":44.3125,"y":494.90625}],"elem":{"__data__":{"v":"Conv2d_2","w":"BatchNorm2d_3"}},"arrowheadId":"arrowhead968"}},{"v":"BatchNorm2d_3","w":"ReLU_4","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"BatchNorm2d_3 to ReLU_4","labelType":"html","lineInterpolate":"basis","class":"","id":"arc4","labelId":"arc4-label","points":[{"x":44.3125,"y":527.390625},{"x":44.3125,"y":552.390625},{"x":44.3125,"y":577.390625}],"elem":{"__data__":{"v":"BatchNorm2d_3","w":"ReLU_4"}},"arrowheadId":"arrowhead969"}},{"v":"Conv2d_5","w":"BatchNorm2d_6","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"Conv2d_5 to BatchNorm2d_6","labelType":"html","lineInterpolate":"basis","class":"","id":"arc5","labelId":"arc5-label","points":[{"x":123.625,"y":197.453125},{"x":123.625,"y":222.453125},{"x":123.625,"y":247.453125}],"elem":{"__data__":{"v":"Conv2d_5","w":"BatchNorm2d_6"}},"arrowheadId":"arrowhead970"}},{"v":"BatchNorm2d_6","w":"ReLU_7","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"BatchNorm2d_6 to ReLU_7","labelType":"html","lineInterpolate":"basis","class":"","id":"arc6","labelId":"arc6-label","points":[{"x":123.625,"y":279.9375},{"x":123.625,"y":304.9375},{"x":123.625,"y":329.9375}],"elem":{"__data__":{"v":"BatchNorm2d_6","w":"ReLU_7"}},"arrowheadId":"arrowhead971"}},{"v":"Resnet50_1","w":"ResBlocKV2_8","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"Resnet50_1 to ResBlocKV2_8","labelType":"html","lineInterpolate":"basis","class":"","id":"arc7","labelId":"arc7-label","points":[{"x":156.84375,"y":114.39645627624877},{"x":211.0546875,"y":139.96875},{"x":211.0546875,"y":181.2109375},{"x":211.0546875,"y":222.453125},{"x":211.0546875,"y":263.6953125},{"x":211.0546875,"y":304.9375},{"x":211.0546875,"y":346.1796875},{"x":211.0546875,"y":387.421875},{"x":211.0546875,"y":428.6640625},{"x":211.0546875,"y":469.90625},{"x":211.0546875,"y":511.1484375},{"x":211.0546875,"y":552.390625},{"x":211.0546875,"y":577.390625}],"elem":{"__data__":{"v":"Resnet50_1","w":"ResBlocKV2_8"}},"arrowheadId":"arrowhead972"}},{"v":"ReLU_4","w":"ConvBnRelu_9","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"ReLU_4 to ConvBnRelu_9","labelType":"html","lineInterpolate":"basis","class":"","id":"arc9","labelId":"arc9-label","points":[{"x":44.3125,"y":609.875},{"x":44.3125,"y":634.875},{"x":98.45154148512975,"y":659.875}],"elem":{"__data__":{"v":"ReLU_4","w":"ConvBnRelu_9"}},"arrowheadId":"arrowhead973"}},{"v":"ReLU_7","w":"ConvBnRelu_9","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"ReLU_7 to ConvBnRelu_9","labelType":"html","lineInterpolate":"basis","class":"","id":"arc10","labelId":"arc10-label","points":[{"x":127.5632458799015,"y":362.421875},{"x":133.625,"y":387.421875},{"x":133.625,"y":428.6640625},{"x":133.625,"y":469.90625},{"x":133.625,"y":511.1484375},{"x":133.625,"y":552.390625},{"x":133.625,"y":593.6328125},{"x":133.625,"y":634.875},{"x":133.625,"y":659.875}],"elem":{"__data__":{"v":"ReLU_7","w":"ConvBnRelu_9"}},"arrowheadId":"arrowhead974"}},{"v":"ResBlocKV2_8","w":"ConvBnRelu_9","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"ResBlocKV2_8 to ConvBnRelu_9","labelType":"html","lineInterpolate":"basis","class":"","id":"arc11","labelId":"arc11-label","points":[{"x":211.0546875,"y":609.875},{"x":211.0546875,"y":634.875},{"x":164.11871477789353,"y":659.875}],"elem":{"__data__":{"v":"ResBlocKV2_8","w":"ConvBnRelu_9"}},"arrowheadId":"arrowhead975"}},{"v":"ConvBnRelu_9","w":"Output_10","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"ConvBnRelu_9 to Output_10","labelType":"html","lineInterpolate":"basis","class":"","id":"arc12","labelId":"arc12-label","points":[{"x":133.625,"y":692.359375},{"x":133.625,"y":717.359375},{"x":133.625,"y":742.359375}],"elem":{"__data__":{"v":"ConvBnRelu_9","w":"Output_10"}},"arrowheadId":"arrowhead976"}},{"v":"ReLU_7","w":"Conv2d_2","value":{"arrowhead":"hollowPoint","arrowheadClass":"arrowhead","label":"ReLU_7 to Conv2d_2","labelType":"html","lineInterpolate":"basis","class":"","id":"arc13","labelId":"arc13-label","points":[{"x":108.00739368251563,"y":362.421875},{"x":83.96875,"y":387.421875},{"x":59.93010631748437,"y":412.421875}],"elem":{"__data__":{"v":"ReLU_7","w":"Conv2d_2"}},"arrowheadId":"arrowhead977"}}],"value":{"width":251.6015625,"height":774.84375}},"params":{"Conv2d_2":{"in_channels":{"type":["int"],"value":21},"out_channels":{"type":["int"],"value":10},"kernel_size":{"type":["int","tuple"],"value":9},"stride":{"type":["int","tuple"],"default":1,"value":14},"padding":{"type":["int","tuple"],"default":0,"value":13},"dilation":{"type":["int","tuple"],"default":1,"value":23},"groups":{"type":["int"],"default":1,"value":22},"bias":{"type":["bool"],"default":"True","value":true}},"BatchNorm2d_3":{"name":"BatchNorm2d","num_features":{"name":"num_features","type":[]},"eps":{"name":"eps","type":[]},"momentum":{"name":"momentum","type":[]},"affine":{"name":"affine","type":[]},"track_running_stats":{"name":"track_running_stats","type":[]}},"ReLU_4":{"name":"ReLU"},"Conv2d_5":{"in_channels":{"type":["int"],"value":21},"out_channels":{"type":["int"],"value":10},"kernel_size":{"type":["int","tuple"],"value":9},"stride":{"type":["int","tuple"],"default":1,"value":14},"padding":{"type":["int","tuple"],"default":0,"value":13},"dilation":{"type":["int","tuple"],"default":1,"value":23},"groups":{"type":["int"],"default":1,"value":22},"bias":{"type":["bool"],"default":"True","value":true}},"BatchNorm2d_6":{"name":"BatchNorm2d","num_features":{"name":"num_features","type":[]},"eps":{"name":"eps","type":[]},"momentum":{"name":"momentum","type":[]},"affine":{"name":"affine","type":[]},"track_running_stats":{"name":"track_running_stats","type":[]}},"ReLU_7":{"name":"ReLU"}},"order":[{"opt":"Input_0","inputs":[],"outputs":["Resnet50_1"],"coords":[123.625,16.2421875]},{"opt":"Resnet50_1","inputs":["Input_0"],"outputs":["Conv2d_2","Conv2d_5","ResBlocKV2_8"],"coords":[123.625,98.7265625]},{"opt":"Conv2d_5","inputs":["Resnet50_1"],"outputs":["BatchNorm2d_6"],"coords":[123.625,181.2109375]},{"opt":"BatchNorm2d_6","inputs":["Conv2d_5"],"outputs":["ReLU_7"],"coords":[123.625,263.6953125]},{"opt":"ReLU_7","inputs":["BatchNorm2d_6"],"outputs":["ConvBnRelu_9","Conv2d_2"],"coords":[123.625,346.1796875]},{"opt":"Conv2d_2","inputs":["Resnet50_1","ReLU_7"],"outputs":["BatchNorm2d_3"],"coords":[44.3125,428.6640625]},{"opt":"BatchNorm2d_3","inputs":["Conv2d_2"],"outputs":["ReLU_4"],"coords":[44.3125,511.1484375]},{"opt":"ReLU_4","inputs":["BatchNorm2d_3"],"outputs":["ConvBnRelu_9"],"coords":[44.3125,593.6328125]},{"opt":"ResBlocKV2_8","inputs":["Resnet50_1"],"outputs":["ConvBnRelu_9"],"coords":[211.0546875,593.6328125]},{"opt":"ConvBnRelu_9","inputs":["ReLU_4","ReLU_7","ResBlocKV2_8"],"outputs":["Output_10"],"coords":[133.625,676.1171875]},{"opt":"Output_10","inputs":["ConvBnRelu_9"],"outputs":[],"coords":[133.625,758.6015625]}],"edges":[{"v":"Input_0","w":"Resnet50_1"},{"v":"Resnet50_1","w":"Conv2d_2"},{"v":"Resnet50_1","w":"Conv2d_5"},{"v":"Conv2d_2","w":"BatchNorm2d_3"},{"v":"BatchNorm2d_3","w":"ReLU_4"},{"v":"Conv2d_5","w":"BatchNorm2d_6"},{"v":"BatchNorm2d_6","w":"ReLU_7"},{"v":"Resnet50_1","w":"ResBlocKV2_8"},{"v":"ReLU_4","w":"ConvBnRelu_9"},{"v":"ReLU_7","w":"ConvBnRelu_9"},{"v":"ResBlocKV2_8","w":"ConvBnRelu_9"},{"v":"ConvBnRelu_9","w":"Output_10"},{"v":"ReLU_7","w":"Conv2d_2"}],"last_node_id":10,"last_edge_id":13,"global_inputs":["Input_1","Input_0"],"global_outputs":["Output_7","Output_10"]}

function TemplateRender(graphModel){

 
  const nodes_op = {}

  const inputs = []
  const outputs = []
  const GraphNodes = []
  const GraphNodesMap = {}
  const inputNames ={}
  
  var prefix = ''
  var modelName = 'Model'

  const forwardStrs = []
  var forwardStr = ''



  graphModel.graph['nodes'].forEach(node => {
    
      var node_type = node.value.label
      var opt = true

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
          
      var opt_node = {'type':node_type,'name': node.v,'opt':opt}

      if(opt){
        var op_params = graphModel.params[node.v]
        var params = []
        var key

        for(key in op_params){
        
            if(op_params[key] != ''){
                if(op_params[key].value){
                    var param = key +'='+ op_params[key].value
                }else{
                    var param = key +'='+ op_params[key].default
                }
                params.push(param)
            }
        }
        opt_node['params'] = params.join(',')
        GraphNodes.push(opt_node)
        GraphNodesMap[node.v] = opt_node
      }
    });

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

// graphModel.edges.forEach(edge => {
//     // console.log(edge)
//     const input_data = 'out_'+ edge.v
//     const output_data = 'out_'+ edge.w
    
//     forwardStr = output_data + ' = self.'+ prefix+ edge.w+'('+input_data+')'
//     // record_node_output_name[id] = new_out_name
//     // console.log(forwardStr)
//     forwardStrs.push(forwardStr)
// });

  const _context = {
    CLASSNAME: modelName,
    PREFIX: prefix,
    INPUTS: inputs.join(','),
    INPUTNAMES:inputNames,
    INPUTSIDS:inputs,
    OUTPUTSIDS:outputs,
    OUTPUTS: 'out_' + outputs.join(', out_'),
    // ORDEREdgeS: nodeEdges,
    OPTNODES: GraphNodes,
    FORWARDOPTS:forwardStrs,
    OPTNODESMAP: GraphNodesMap
  };

  // console.log(nodeSorted);
  // console.log(nodeEdges)
  // console.log(GraphNodesMap)
  // console.log(GraphNodes)
  // _context['ORDEREdgeS'] = nodeEdges
  // _context['OPTNODES'] = GraphNodes
  // _context['OPTNODESMAP'] = GraphNodesMap

  var res = nunjucks.renderString(template, _context);
  // console.log(res)
  console.log(graphModel.order)
  return res
}

console.log(TemplateRender(mode_graph_demo))
// export {TemplateRender}