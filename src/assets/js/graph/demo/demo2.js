

import dagreD3 from 'dagre-d3'

function demo_data(){    
    

    const mode_graph_demo = {"__date__":"2019-05-12T11:47:59.094Z","graph":{"options":{"directed":true,"multigraph":false,"compound":true},"nodes":[{"v":"Conv2d_0","value":{"svgId":"node0","label":"Conv2d","labelType":"text","properties":{"anchors":[{"id":0,"type":"input"},{"id":1,"type":"output"}],"schema":{"attributes":[{"name":"output_padding","visible":false},{"name":"in_channels","visible":false},{"name":"out_channels","visible":false},{"default":1,"name":"groups"},{"default":false,"name":"transposed"},{"default":[0,0],"name":"padding"},{"default":[1,1],"name":"dilation"},{"default":[1,1],"name":"stride"},{"default":true,"name":"bias"}],"category":"Layer","package":"torch.nn.modules.conv"}},"x":33.2109375,"y":18.25,"paddingLeft":10,"paddingRight":10,"paddingTop":10,"paddingBottom":10,"rx":0,"ry":0,"shape":"rect","dagre_to_x":0,"dagre_to_y":0,"group_width":0,"group_height":0,"elem":{"__data__":"Conv2d_0","__on":[{"type":"mousedown","name":"drag","capture":false},{"type":"contextmenu","name":"","capture":false},{"type":"click","name":"","capture":false}]}}}],"edges":[],"value":{"width":66.421875,"height":36.5}},"params":{"Conv2d_0":{"name":"Conv2d","in_channels":{"name":"in_channels","type":["int"]},"out_channels":{"name":"out_channels","type":["int"]},"kernel_size":{"name":"kernel_size","type":["int","tuple"]},"stride":{"name":"stride","type":["int","tuple"],"default":1},"padding":{"name":"padding","type":["int","tuple"],"default":0},"dilation":{"name":"dilation","type":["int","tuple"],"default":1},"groups":{"name":"groups","type":["int"],"default":1},"bias":{"name":"bias","type":["bool"],"default":"True"}}},"order":[{"opt":"Conv2d_0","inputs":[],"outputs":[],"coords":[33.2109375,18.25]}],"edges":[],"global_inputs":[],"global_outputs":[],"last_node_id":0,"last_edge_id":-1}
    // const mode_graph_demo = {
    //     "__date__": "2019-05-10T13:02:31.574Z",
    //     "graph": {
    //         "options": {
    //             "directed": true,
    //             "multigraph": false,
    //             "compound": true
    //         },
    //         "nodes": [
    //             {
    //                 "v": "Input_0",
    //                 "value": {
    //                     "id": "node0",
    //                     "label": "Input",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "package": "Graph.Global.Input"
    //                         }
    //                     },
    //                     "x": 130.57421875,
    //                     "y": 18.390625,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "Input_0",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "Resnet50_1",
    //                 "value": {
    //                     "id": "node1",
    //                     "label": "Resnet50",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "package": "ModelZoom"
    //                         }
    //                     },
    //                     "x": 130.57421875,
    //                     "y": 105.171875,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "Resnet50_1",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "ResBlocK_2",
    //                 "value": {
    //                     "id": "node2",
    //                     "label": "ResBlocK",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "package": "ModelZoom"
    //                         }
    //                     },
    //                     "x": 93.671875,
    //                     "y": 191.953125,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "ResBlocK_2",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "Conv2d_3",
    //                 "value": {
    //                     "id": "node3",
    //                     "label": "Conv2d",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "attributes": [
    //                                 {
    //                                     "name": "output_padding",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "name": "in_channels",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "name": "out_channels",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "default": 1,
    //                                     "name": "groups"
    //                                 },
    //                                 {
    //                                     "default": false,
    //                                     "name": "transposed"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         0,
    //                                         0
    //                                     ],
    //                                     "name": "padding"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         1,
    //                                         1
    //                                     ],
    //                                     "name": "dilation"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         1,
    //                                         1
    //                                     ],
    //                                     "name": "stride"
    //                                 },
    //                                 {
    //                                     "default": true,
    //                                     "name": "bias"
    //                                 }
    //                             ],
    //                             "category": "Layer",
    //                             "package": "torch.nn.modules.conv"
    //                         }
    //                     },
    //                     "x": 50.78125,
    //                     "y": 278.734375,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "Conv2d_3",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "BatchNorm2d_4",
    //                 "value": {
    //                     "id": "node4",
    //                     "label": "BatchNorm2d",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "attributes": [
    //                                 {
    //                                     "default": 0.00001,
    //                                     "name": "eps"
    //                                 },
    //                                 {
    //                                     "default": 0.1,
    //                                     "name": "momentum"
    //                                 },
    //                                 {
    //                                     "default": true,
    //                                     "name": "affine"
    //                                 },
    //                                 {
    //                                     "default": true,
    //                                     "name": "track_running_stats"
    //                                 }
    //                             ],
    //                             "category": "Normalization",
    //                             "inputs": [
    //                                 {
    //                                     "name": "input"
    //                                 },
    //                                 {
    //                                     "name": "weight"
    //                                 },
    //                                 {
    //                                     "name": "bias"
    //                                 },
    //                                 {
    //                                     "name": "running_mean"
    //                                 },
    //                                 {
    //                                     "name": "running_var"
    //                                 },
    //                                 {
    //                                     "name": "num_batches_tracked"
    //                                 }
    //                             ],
    //                             "package": "torch.nn.modules.batchnorm"
    //                         }
    //                     },
    //                     "x": 50.78125,
    //                     "y": 365.515625,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "BatchNorm2d_4",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "ReLU_5",
    //                 "value": {
    //                     "id": "node5",
    //                     "label": "ReLU",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "attributes": [
    //                                 {
    //                                     "default": false,
    //                                     "name": "inplace",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "default": 0,
    //                                     "name": "threshold"
    //                                 },
    //                                 {
    //                                     "default": 0,
    //                                     "name": "value"
    //                                 }
    //                             ],
    //                             "category": "Activation",
    //                             "package": "torch.nn.modules.activation"
    //                         }
    //                     },
    //                     "x": 93.671875,
    //                     "y": 452.296875,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "ReLU_5",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "Conv2d_6",
    //                 "value": {
    //                     "id": "node6",
    //                     "label": "Conv2d",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "attributes": [
    //                                 {
    //                                     "name": "output_padding",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "name": "in_channels",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "name": "out_channels",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "default": 1,
    //                                     "name": "groups"
    //                                 },
    //                                 {
    //                                     "default": false,
    //                                     "name": "transposed"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         0,
    //                                         0
    //                                     ],
    //                                     "name": "padding"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         1,
    //                                         1
    //                                     ],
    //                                     "name": "dilation"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         1,
    //                                         1
    //                                     ],
    //                                     "name": "stride"
    //                                 },
    //                                 {
    //                                     "default": true,
    //                                     "name": "bias"
    //                                 }
    //                             ],
    //                             "category": "Layer",
    //                             "package": "torch.nn.modules.conv"
    //                         }
    //                     },
    //                     "x": 93.671875,
    //                     "y": 539.078125,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "Conv2d_6",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "ReLU_7",
    //                 "value": {
    //                     "id": "node7",
    //                     "label": "ReLU",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "attributes": [
    //                                 {
    //                                     "default": false,
    //                                     "name": "inplace",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "default": 0,
    //                                     "name": "threshold"
    //                                 },
    //                                 {
    //                                     "default": 0,
    //                                     "name": "value"
    //                                 }
    //                             ],
    //                             "category": "Activation",
    //                             "package": "torch.nn.modules.activation"
    //                         }
    //                     },
    //                     "x": 130.57421875,
    //                     "y": 625.859375,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "ReLU_7",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "Conv2d_8",
    //                 "value": {
    //                     "id": "node8",
    //                     "label": "Conv2d",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "attributes": [
    //                                 {
    //                                     "name": "output_padding",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "name": "in_channels",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "name": "out_channels",
    //                                     "visible": false
    //                                 },
    //                                 {
    //                                     "default": 1,
    //                                     "name": "groups"
    //                                 },
    //                                 {
    //                                     "default": false,
    //                                     "name": "transposed"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         0,
    //                                         0
    //                                     ],
    //                                     "name": "padding"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         1,
    //                                         1
    //                                     ],
    //                                     "name": "dilation"
    //                                 },
    //                                 {
    //                                     "default": [
    //                                         1,
    //                                         1
    //                                     ],
    //                                     "name": "stride"
    //                                 },
    //                                 {
    //                                     "default": true,
    //                                     "name": "bias"
    //                                 }
    //                             ],
    //                             "category": "Layer",
    //                             "package": "torch.nn.modules.conv"
    //                         }
    //                     },
    //                     "x": 130.57421875,
    //                     "y": 712.640625,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "Conv2d_8",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             {
    //                 "v": "Output_9",
    //                 "value": {
    //                     "id": "node9",
    //                     "label": "Output",
    //                     "labelType": "text",
    //                     "properties": {
    //                         "anchors": [
    //                             {
    //                                 "id": 0,
    //                                 "type": "input"
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "type": "output"
    //                             }
    //                         ],
    //                         "schema": {
    //                             "package": "Graph.Global.Output"
    //                         }
    //                     },
    //                     "x": 130.57421875,
    //                     "y": 799.421875,
    //                     "paddingLeft": 10,
    //                     "paddingRight": 10,
    //                     "paddingTop": 10,
    //                     "paddingBottom": 10,
    //                     "rx": 0,
    //                     "ry": 0,
    //                     "shape": "rect",
    //                     "dagre_to_x": 0,
    //                     "dagre_to_y": 0,
    //                     "group_width": 0,
    //                     "group_height": 0,
    //                     "elem": {
    //                         "__data__": "Output_9",
    //                         "__on": [
    //                             {
    //                                 "type": "mousedown",
    //                                 "name": "drag",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "contextmenu",
    //                                 "name": "",
    //                                 "capture": false
    //                             },
    //                             {
    //                                 "type": "click",
    //                                 "name": "",
    //                                 "capture": false
    //                             }
    //                         ]
    //                     }
    //                 }
    //             }
    //         ],
    //         "edges": [
    //             {
    //                 "v": "Input_0",
    //                 "w": "Resnet50_1",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "Input_0 to Resnet50_1",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc0",
    //                     "labelId": "arc0-label",
    //                     "points": [
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 36.78125
    //                         },
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 61.78125
    //                         },
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 86.78125
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "Input_0",
    //                             "w": "Resnet50_1"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1063"
    //                 }
    //             },
    //             {
    //                 "v": "Resnet50_1",
    //                 "w": "ResBlocK_2",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "Resnet50_1 to ResBlocK_2",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc1",
    //                     "labelId": "arc1-label",
    //                     "points": [
    //                         {
    //                             "x": 114.93357827691753,
    //                             "y": 123.5625
    //                         },
    //                         {
    //                             "x": 93.671875,
    //                             "y": 148.5625
    //                         },
    //                         {
    //                             "x": 93.671875,
    //                             "y": 173.5625
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "Resnet50_1",
    //                             "w": "ResBlocK_2"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1064"
    //                 }
    //             },
    //             {
    //                 "v": "ResBlocK_2",
    //                 "w": "Conv2d_3",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "ResBlocK_2 to Conv2d_3",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc2",
    //                     "labelId": "arc2-label",
    //                     "points": [
    //                         {
    //                             "x": 75.49316933741447,
    //                             "y": 210.34375
    //                         },
    //                         {
    //                             "x": 50.78125,
    //                             "y": 235.34375
    //                         },
    //                         {
    //                             "x": 50.78125,
    //                             "y": 260.34375
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "ResBlocK_2",
    //                             "w": "Conv2d_3"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1065"
    //                 }
    //             },
    //             {
    //                 "v": "Conv2d_3",
    //                 "w": "BatchNorm2d_4",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "Conv2d_3 to BatchNorm2d_4",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc3",
    //                     "labelId": "arc3-label",
    //                     "points": [
    //                         {
    //                             "x": 50.78125,
    //                             "y": 297.125
    //                         },
    //                         {
    //                             "x": 50.78125,
    //                             "y": 322.125
    //                         },
    //                         {
    //                             "x": 50.78125,
    //                             "y": 347.125
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "Conv2d_3",
    //                             "w": "BatchNorm2d_4"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1066"
    //                 }
    //             },
    //             {
    //                 "v": "BatchNorm2d_4",
    //                 "w": "ReLU_5",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "BatchNorm2d_4 to ReLU_5",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc4",
    //                     "labelId": "arc4-label",
    //                     "points": [
    //                         {
    //                             "x": 50.78125,
    //                             "y": 383.90625
    //                         },
    //                         {
    //                             "x": 50.78125,
    //                             "y": 408.90625
    //                         },
    //                         {
    //                             "x": 75.49316933741447,
    //                             "y": 433.90625
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "BatchNorm2d_4",
    //                             "w": "ReLU_5"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1067"
    //                 }
    //             },
    //             {
    //                 "v": "ReLU_5",
    //                 "w": "Conv2d_6",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "ReLU_5 to Conv2d_6",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc7",
    //                     "labelId": "arc7-label",
    //                     "points": [
    //                         {
    //                             "x": 93.671875,
    //                             "y": 470.6875
    //                         },
    //                         {
    //                             "x": 93.671875,
    //                             "y": 495.6875
    //                         },
    //                         {
    //                             "x": 93.671875,
    //                             "y": 520.6875
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "ReLU_5",
    //                             "w": "Conv2d_6"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1068"
    //                 }
    //             },
    //             {
    //                 "v": "Conv2d_6",
    //                 "w": "ReLU_7",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "Conv2d_6 to ReLU_7",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc8",
    //                     "labelId": "arc8-label",
    //                     "points": [
    //                         {
    //                             "x": 93.671875,
    //                             "y": 557.46875
    //                         },
    //                         {
    //                             "x": 93.671875,
    //                             "y": 582.46875
    //                         },
    //                         {
    //                             "x": 114.93357827691753,
    //                             "y": 607.46875
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "Conv2d_6",
    //                             "w": "ReLU_7"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1069"
    //                 }
    //             },
    //             {
    //                 "v": "ReLU_7",
    //                 "w": "Conv2d_8",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "ReLU_7 to Conv2d_8",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc9",
    //                     "labelId": "arc9-label",
    //                     "points": [
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 644.25
    //                         },
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 669.25
    //                         },
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 694.25
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "ReLU_7",
    //                             "w": "Conv2d_8"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1070"
    //                 }
    //             },
    //             {
    //                 "v": "ResBlocK_2",
    //                 "w": "ReLU_5",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "ResBlocK_2 to ReLU_5",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc10",
    //                     "labelId": "arc10-label",
    //                     "points": [
    //                         {
    //                             "x": 111.85058066258553,
    //                             "y": 210.34375
    //                         },
    //                         {
    //                             "x": 136.5625,
    //                             "y": 235.34375
    //                         },
    //                         {
    //                             "x": 136.5625,
    //                             "y": 278.734375
    //                         },
    //                         {
    //                             "x": 136.5625,
    //                             "y": 322.125
    //                         },
    //                         {
    //                             "x": 136.5625,
    //                             "y": 365.515625
    //                         },
    //                         {
    //                             "x": 136.5625,
    //                             "y": 408.90625
    //                         },
    //                         {
    //                             "x": 111.85058066258553,
    //                             "y": 433.90625
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "ResBlocK_2",
    //                             "w": "ReLU_5"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1071"
    //                 }
    //             },
    //             {
    //                 "v": "Resnet50_1",
    //                 "w": "ReLU_7",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "Resnet50_1 to ReLU_7",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc11",
    //                     "labelId": "arc11-label",
    //                     "points": [
    //                         {
    //                             "x": 152.99131116087506,
    //                             "y": 123.5625
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 148.5625
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 191.953125
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 235.34375
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 278.734375
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 322.125
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 365.515625
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 408.90625
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 452.296875
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 495.6875
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 539.078125
    //                         },
    //                         {
    //                             "x": 183.46484375,
    //                             "y": 582.46875
    //                         },
    //                         {
    //                             "x": 152.99131116087506,
    //                             "y": 607.46875
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "Resnet50_1",
    //                             "w": "ReLU_7"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1072"
    //                 }
    //             },
    //             {
    //                 "v": "Conv2d_8",
    //                 "w": "Output_9",
    //                 "value": {
    //                     "arrowhead": "hollowPoint",
    //                     "arrowheadClass": "arrowhead",
    //                     "label": "Conv2d_8 to Output_9",
    //                     "labelType": "html",
    //                     "lineInterpolate": "basis",
    //                     "class": "",
    //                     "id": "arc13",
    //                     "labelId": "arc13-label",
    //                     "points": [
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 731.03125
    //                         },
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 756.03125
    //                         },
    //                         {
    //                             "x": 130.57421875,
    //                             "y": 781.03125
    //                         }
    //                     ],
    //                     "elem": {
    //                         "__data__": {
    //                             "v": "Conv2d_8",
    //                             "w": "Output_9"
    //                         }
    //                     },
    //                     "arrowheadId": "arrowhead1073"
    //                 }
    //             }
    //         ],
    //         "value": {
    //             "width": 168.83203125,
    //             "height": 817.8125
    //         }
    //     },
    //     "order": [
    //         {
    //             "node": "node0",
    //             "inputs": [],
    //             "outputs": [
    //                 "Resnet50_1"
    //             ],
    //             "coords": [
    //                 130.57421875,
    //                 18.390625
    //             ]
    //         },
    //         {
    //             "node": "node1",
    //             "inputs": [
    //                 "Input_0"
    //             ],
    //             "outputs": [
    //                 "ResBlocK_2",
    //                 "ReLU_7"
    //             ],
    //             "coords": [
    //                 130.57421875,
    //                 105.171875
    //             ]
    //         },
    //         {
    //             "node": "node2",
    //             "inputs": [
    //                 "Resnet50_1"
    //             ],
    //             "outputs": [
    //                 "Conv2d_3",
    //                 "ReLU_5"
    //             ],
    //             "coords": [
    //                 93.671875,
    //                 191.953125
    //             ]
    //         },
    //         {
    //             "node": "node3",
    //             "inputs": [
    //                 "ResBlocK_2"
    //             ],
    //             "outputs": [
    //                 "BatchNorm2d_4"
    //             ],
    //             "coords": [
    //                 50.78125,
    //                 278.734375
    //             ]
    //         },
    //         {
    //             "node": "node4",
    //             "inputs": [
    //                 "Conv2d_3"
    //             ],
    //             "outputs": [
    //                 "ReLU_5"
    //             ],
    //             "coords": [
    //                 50.78125,
    //                 365.515625
    //             ]
    //         },
    //         {
    //             "node": "node5",
    //             "inputs": [
    //                 "BatchNorm2d_4",
    //                 "ResBlocK_2"
    //             ],
    //             "outputs": [
    //                 "Conv2d_6"
    //             ],
    //             "coords": [
    //                 93.671875,
    //                 452.296875
    //             ]
    //         },
    //         {
    //             "node": "node6",
    //             "inputs": [
    //                 "ReLU_5"
    //             ],
    //             "outputs": [
    //                 "ReLU_7"
    //             ],
    //             "coords": [
    //                 93.671875,
    //                 539.078125
    //             ]
    //         },
    //         {
    //             "node": "node7",
    //             "inputs": [
    //                 "Conv2d_6",
    //                 "Resnet50_1"
    //             ],
    //             "outputs": [
    //                 "Conv2d_8"
    //             ],
    //             "coords": [
    //                 130.57421875,
    //                 625.859375
    //             ]
    //         },
    //         {
    //             "node": "node8",
    //             "inputs": [
    //                 "ReLU_7"
    //             ],
    //             "outputs": [
    //                 "Output_9"
    //             ],
    //             "coords": [
    //                 130.57421875,
    //                 712.640625
    //             ]
    //         },
    //         {
    //             "node": "node9",
    //             "inputs": [
    //                 "Conv2d_8"
    //             ],
    //             "outputs": [],
    //             "coords": [
    //                 130.57421875,
    //                 799.421875
    //             ]
    //         }
    //     ],
    //     "edges": [
    //         {
    //             "v": "Input_0",
    //             "w": "Resnet50_1"
    //         },
    //         {
    //             "v": "Resnet50_1",
    //             "w": "ResBlocK_2"
    //         },
    //         {
    //             "v": "ResBlocK_2",
    //             "w": "Conv2d_3"
    //         },
    //         {
    //             "v": "Conv2d_3",
    //             "w": "BatchNorm2d_4"
    //         },
    //         {
    //             "v": "BatchNorm2d_4",
    //             "w": "ReLU_5"
    //         },
    //         {
    //             "v": "ReLU_5",
    //             "w": "Conv2d_6"
    //         },
    //         {
    //             "v": "Conv2d_6",
    //             "w": "ReLU_7"
    //         },
    //         {
    //             "v": "ReLU_7",
    //             "w": "Conv2d_8"
    //         },
    //         {
    //             "v": "ResBlocK_2",
    //             "w": "ReLU_5"
    //         },
    //         {
    //             "v": "Resnet50_1",
    //             "w": "ReLU_7"
    //         },
    //         {
    //             "v": "Conv2d_8",
    //             "w": "Output_9"
    //         }
    //     ]
    // }

    
    
    // var g = new dagreD3.graphlib.Graph({compound:true})
    //     .setGraph({})
    //     .setDefaultEdgeLabel(function() { return {}; });

    
    const g = dagreD3.graphlib.json.read(mode_graph_demo.graph);

    return g
}

export{demo_data}