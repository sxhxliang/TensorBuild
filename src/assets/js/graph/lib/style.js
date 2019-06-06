
// import graphFlow from 'd3-graph-flow'

import graphFlow from 'dagre-d3'
import * as d3 from "d3";

function apply_style(){
    // Round the corners of the nodes
    // console.log(this.g)
    const _this = this
    // this.g.nodes().forEach(function(v) {
    //     // console.log('node:',v)
    //     // var node = _this.g.node(v);
    //     // node.rx = node.ry = 5;
    // });   
    this.tooltip = d3.select('body').append("div")	
        .attr("class", "tooltip")				
        .style("opacity", 0);

     // Add our custom arrow (a hollow-point)
    this.render.arrows().hollowPoint = function normal(parent, id, edge, type) {
        var marker = parent.append("marker")
        .attr("id", id)
        .attr("viewBox", "0 0 10 10")
        .attr("refX", 9)
        .attr("refY", 5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 10)
        .attr("markerHeight", 8)
        .attr("orient", "auto");

        var path = marker.append("path")
        .attr("d", "M 0 0 L 10 5 L 0 10 z")
        .style("stroke-width", 1)
        .style("stroke-dasharray", "1,0")
        .style("fill", "#fff")
        .style("stroke", "#333");
        graphFlow.util.applyStyle(path, edge[type + "Style"]);
    };

}

const Style = {
    apply_style: apply_style
}

export {Style}