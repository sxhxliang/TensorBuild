
import * as d3 from "d3";
import dagreD3 from 'dagre-d3'
var dagre = require("dagre");
import {topsort} from "./dag_order"
function demo_data(){
//     var g = new dagreD3.graphlib.Graph()
//   .setGraph({})
//   .setDefaultEdgeLabel(function() { return {}; });

    
    
    
    // group
    
    
    var g = new dagreD3.graphlib.Graph({compound:true})
        .setGraph({
            ranksep: 30,
            nodesep: 30,
            edgesep: 10
        })
        .setDefaultEdgeLabel(function() { return {}; });

//     // Here we're setting the nodes
//     g.setNode('a', {label: 'A'});
//     g.setNode('b', {label: 'B'});
//     g.setNode('c', {label: 'C'});
//     g.setNode('d', {label: 'D'});
//     g.setNode('e', {label: 'E'});
//     g.setNode('f', {label: 'F'});
//     g.setNode('g', {label: 'G'});
//     g.setNode('group', {label: 'Group', clusterLabelPos: 'top', style: 'fill: #d3d7e8'});
//     g.setNode('top_group', {label: 'Top Group', clusterLabelPos: 'bottom', style: 'fill: #ffd47f'});
//     g.setNode('bottom_group', {label: 'Bottom Group', style: 'fill: #5f9488'});

//     // Set the parents to define which nodes belong to which cluster
//     g.setParent('top_group', 'group');
//     g.setParent('bottom_group', 'group');
//     g.setParent('b', 'top_group');
//     g.setParent('c', 'bottom_group');
//     g.setParent('d', 'bottom_group');
//     g.setParent('e', 'bottom_group');
//     g.setParent('f', 'bottom_group');

//     // Set up edges, no special attributes.
//     g.setEdge('a', 'b');
//     g.setEdge('b', 'c');
//     g.setEdge('b', 'd');
//     g.setEdge('b', 'e');
//     g.setEdge('b', 'f');
//     g.setEdge('b', 'g');

//     g.nodes().forEach(function(v) {
//     var node = g.node(v);
//     // Round the corners of the nodes
//     node.rx = node.ry = 5;
//     });


// // Here we"re setting nodeclass, which is used by our custom drawNodes function
// // below.
// g.setNode(0,  { label: "TOP",       class: "type-TOP" });
// g.setNode(1,  { label: "S",         class: "type-S" });
// g.setNode(2,  { label: "NP",        class: "type-NP" });
// g.setNode(3,  { label: "DT",        class: "type-DT" });
// g.setNode(4,  { label: "This",      class: "type-TK" });
// g.setNode(5,  { label: "VP",        class: "type-VP" });
// g.setNode(6,  { label: "VBZ",       class: "type-VBZ" });
// g.setNode(7,  { label: "is",        class: "type-TK" });
// g.setNode(8,  { label: "NP",        class: "type-NP" });
// g.setNode(9,  { label: "DT",        class: "type-DT" });
// g.setNode(10, { label: "an",        class: "type-TK" });
// g.setNode(11, { label: "NN",        class: "type-NN" });
// g.setNode(12, { label: "example",   class: "type-TK" });
// g.setNode(13, { label: ".",         class: "type-." });
// g.setNode(14, { label: "sentence",  class: "type-TK" });

// g.nodes().forEach(function(v) {
//   var node = g.node(v);
//   // Round the corners of the nodes
//   node.rx = node.ry = 5;
// });

// // Set up edges, no special attributes.
// g.setEdge(3, 4, {curve: d3.curveBasis});
// g.setEdge(2, 3, {curve: d3.curveBasis});
// g.setEdge(1, 2, {curve: d3.curveBasis});
// g.setEdge(6, 7, {curve: d3.curveBasis});
// g.setEdge(5, 6, {curve: d3.curveBasis});
// g.setEdge(9, 10, {curve: d3.curveBasis});
// g.setEdge(8, 9, {curve: d3.curveBasis});
// g.setEdge(11,12, {curve: d3.curveBasis});
// g.setEdge(8, 11, {curve: d3.curveBasis});
// g.setEdge(5, 8, {curve: d3.curveBasis});
// g.setEdge(1, 5, {curve: d3.curveBasis});
// g.setEdge(13,14, {curve: d3.curveBasis});
// g.setEdge(1, 13, {curve: d3.curveBasis});
// g.setEdge(0, 1, {curve: d3.curveBasis});

    // // Create a new directed graph
    // var g = new dagreD3.graphlib.Graph().setGraph({});

    // // States and transitions from RFC 793
    // var states = {
    
    // "F": {
    //     description: "represents waiting for a connection termination "         

    // },

    // "G": {
    //     description:  "request from the remote TCP."
    // },


    // "H": {
    //     description:  "request from the local user."
    // },

    // I: {
    //     description:"request acknowledgment from the remote TCP."
    // },

    // "J": {
    //     description: "termination request)."
    // },

    // "K": {
    //     description: "connection termination request."
    // }
    // ,"Input": {
    //     description: "represents no connection state at all.",
    //     style: "fill: #f77"
    // },

    // B: {
    //     description: "remote TCP and port."
    // },

    // "Conv2d": {
    //     description: "represents waiting for a matching connection " 
                   
    // },

    // "D": {
    //     description:  "connection request."
    // },


    // E: {
    //     description: "transfer phase of the connection.",
    //     style: "fill: #7f7"
    // }
    // };

    // // Add states to the graph, set labels, and style
    // Object.keys(states).forEach(function(state) {
    //     var value = states[state];
    //     value.id = state
    //     value.label = state;
    //     value.rx = value.ry = 5;
    //     g.setNode(state, value);
    // });

    // Set up the edges
    // g.setEdge("Input",     "B",     { label: "open" , curve: d3.curveBasis,});
    // g.setEdge("B",     "D",   { label: "rcv SYN", curve: d3.curveBasis });
    // g.setEdge("B",     "Conv2d",   { label: "send" , curve: d3.curveBasis});
    // // g.setEdge("B",     "Input",     { label: "close", curve: d3.curveBasis });
    // g.setEdge("D",   "F",  { label: "close" , curve: d3.curveBasis});
    // g.setEdge("D",   "E",      { label: "rcv ACK of SYN" , curve: d3.curveBasis});
    // g.setEdge("Conv2d",   "D",   { label: "rcv SYN" , curve: d3.curveBasis});
    // g.setEdge("Conv2d",   "E",      { label: "rcv SYN, ACK", curve: d3.curveBasis });
    // g.setEdge("Input",   "Conv2d",     { label: "close" , curve: d3.curveBasis});
    // g.setEdge("E",      "F",  { label: "close" , curve: d3.curveBasis});
    // g.setEdge("E",      "H", { label: "rcv FIN" , curve: d3.curveBasis});
    // g.setEdge("F",  "G",  { label: "rcv ACK of FIN", curve: d3.curveBasis });
    // g.setEdge("F",  "I",    { label: "rcv FIN" , curve: d3.curveBasis});
    // g.setEdge("H", "J",   { label: "close" , curve: d3.curveBasis});
    // g.setEdge("H", "F",   { label: "close" , curve: d3.curveBasis});
    // g.setEdge("G",  "K",  { label: "rcv FIN" , curve: d3.curveBasis});
    // g.setEdge("I",    "K",  { label: "rcv ACK of FIN" , curve: d3.curveBasis});
    // g.setEdge("Input",   "J",     { label: "rcv ACK of FIN" , curve: d3.curveBasis});
    // g.setEdge("Input",  "K",     { label: "timeout=2MSL" , curve: d3.curveBasis});
    // g.setEdge("J",    "K",  { label: "rcv ACK of FIN" , curve: d3.curveBasis});

    // g.setNode('G1', {label: 'Group', clusterLabelPos: 'top', style: 'fill: #d3d7e8'});
    // g.setNode('G2', {label: 'Group2', clusterLabelPos: 'top', style: 'fill: #d3d7e8'});


    // g.setParent('H', 'G1');
    // g.setParent('J', 'G1');
    // g.setParent('I', 'G2');
    // g.setParent('G', 'G2');
    // g.setParent('J', 'None');
    // g.removeNode('H')

    // const value = {} 
    // value.label = 'state';
    // value.rx = value.ry = 5;
    // console.log(g.predecessors('K'))
   console.log('order', topsort(g.edges())) 

    // console.log('E', g.nodeEdges('E'))
    // var data = dagreD3.graphlib.json.write(g);
    // console.log('g',data);
    // console.log('g',g);

    // const str = JSON.stringify(data)

    // g.setNode('H',value);
    // g.setEdge("H", "J",   { label: "close" , curve: d3.curveBasis});
    // g.setEdge("E",      "H", { label: "rcv FIN" , curve: d3.curveBasis});
    // dagre.layout(g);
    // dagre.write(g);
    // g = dagreD3.graphlib.json.read(JSON.parse(str));
    // g = dagreD3.graphlib.json.read(dagreD3.graphlib.json.write(g));
    return g
}

export{demo_data}