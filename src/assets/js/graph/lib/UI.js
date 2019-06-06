
import * as d3 from "d3";
/**
 * func.apply(graph svg, ['A', 'B']);
 */
const UI = function(vue){
    const _this = this

    this.root_graph.on("dblclick.zoom", function(){
        console.log('dblclick.zoom')

        _this.SearchBox = document.querySelector('#SearchBox')
        _this.SearchBox.style.display=""
        _this.SearchBox.style.left = d3.event.clientX+ "px";
        _this.SearchBox.style.top = d3.event.clientY+'px';

    }).on('click',function(){

        if(_this.SearchBox){
            _this.SearchBox.style.display="none"
            console.log('click', d3.event.clientX, d3.event.clientY)
        }
        _this.connect_source_node_id = -1
       
    })
}



export {UI}