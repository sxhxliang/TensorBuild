const Conv1dBnRelu = 
`
class Conv1dBnRelu(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size, stride=1, padding=0, dilation=1, groups=1, bias=True):
        super(Conv1dBnRelu, self).__init__()
        self.conv = nn.Conv1d(in_channels, out_channels, kernel_size, stride, padding, dilation, groups, bias)
        self.bn = nn.BatchNorm1d(out_channels)
        self.relu = nn.Relu()


    def forward(self, x):
        x = self.conv(x)
        x = self.bn(x)
        x = self.relu(x)
        return x

`      

const Conv2dBnRelu = 
`
class Conv2dBnRelu(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size, stride=1, padding=0, dilation=1, groups=1, bias=True):
        super(Conv2dBnRelu, self).__init__()
        self.conv = nn.Conv2d(in_channels, out_channels, kernel_size, stride, padding, dilation, groups, bias)
        self.bn = nn.BatchNorm2d(out_channels)
        self.relu = nn.Relu()


    def forward(self, x):
        x = self.conv(x)
        x = self.bn(x)
        x = self.relu(x)
        return x

`   

const Conv3dBnRelu = 
`
class Conv3dBnRelu(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size, stride=1, padding=0, dilation=1, groups=1, bias=True):
        super(Conv3dBnRelu, self).__init__()
        self.conv = nn.Conv3d(in_channels, out_channels, kernel_size, stride, padding, dilation, groups, bias)
        self.bn = nn.BatchNorm3d(out_channels)
        self.relu = nn.Relu()


    def forward(self, x):
        x = self.conv(x)
        x = self.bn(x)
        x = self.relu(x)
        return x
`             

const ConcatLayer =
`
class ConcatLayer(nn.Module):
    def __init__(self, dim=1):
        super().__init__()
        self.dim=dim

    def forward(self, x1, x2): return torch.cat([x1,x2], dim=self.dim)
`
const SumLayer = 
`
class SumLayer(nn.Module):
    def __init__(self, dim=1):
        super().__init__()
        self.dim=dim

    def forward(self, x1, x2): return torch.sum([x1,x2], dim=self.dim)
`
const ViewLayer = 
`
class ViewLayer(nn.Module):
    def __init__(self, *shape):
        super(View, self).__init__()
        self.shape = shape
    def forward(self, input):
        return input.view(*shape)
`

const MulLayer = 
`
class MulLayer(nn.Module):
    def __init__(self, dim=1):
        super().__init__()
        self.dim=dim

    def forward(self, x1,x2): return x1*x2
`


const Block = {
    Conv1dBnRelu: Conv1dBnRelu,
    Conv2dBnRelu: Conv2dBnRelu,
    Conv3dBnRelu: Conv3dBnRelu,
    ConcatLayer: ConcatLayer,
    SumLayer: SumLayer,
    ViewLayer: ViewLayer,
    MulLayer: MulLayer
    // ReshapeLayer: ReshapeLayer
}
export {Block}