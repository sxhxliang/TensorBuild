

const Config = {

    cur_framework: 'PyTorch',
    mini_scale: 0.1,
    max_scale: 3,
    // node
    global_input_node_opt:[
        'Input', 'Tensor'
    ],
    global_output_node_opt:[
        'Output'
    ],
    // edge
    connection_class: '',
    // hover edge highlight
    edge_stroke: 'black',
    edge_stroke_width: '1.5',
    edge_highlight_stroke :'#69b3b2',
    edge_highlight_stroke_width: '4',

    // UI
    SearchBoxId:'#SearchBox',
    input_node_style: '"fill: #f77"',
    output_node_style: '"fill: #f77"'

    

}


export{Config}