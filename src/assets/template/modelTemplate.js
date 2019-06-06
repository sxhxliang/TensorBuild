const ModelTemplate =
`
import torch.nn as nn
import torchvision.models as models

{{BlockModule}}

class {{PREFIX}}{{CLASSNAME}}(nn.Module):
    def __init__(self):
        super({{PREFIX}}{{CLASSNAME}}, self).__init__()

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

const ConcatLayer =
`
class ConcatLayer(nn.Module):
    "Merge a shortcut with the result of the module by adding them or concatenating thme if dense=True."
    def __init__(self, dim=1):
        super().__init__()
        self.dim=dim

    def forward(self, x1, x2): return torch.cat([x1,x2], dim=self.dim)
`

export {ModelTemplate, ConcatLayer}