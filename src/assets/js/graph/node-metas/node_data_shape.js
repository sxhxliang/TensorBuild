// const layers = ["Conv1d", "ConvTranspose1d", "Conv2d", "ConvTranspose2d", "Conv3d", "ConvTranspose3d", "Linear", "Sigmoid", "Softmax", "Tanh", "LogSoftmax", "ReLU", "ReLU6", "PReLU", "ELU", "Hardtanh", "LeakyReLU", "MaxPool1d", "MaxPool2d", "MaxPool3d", "MaxUnpool1d", "MaxUnpool2d", "MaxUnpool3d", "AvgPool2d", "AvgPool3d", "AdaptiveAvgPool1d", "AdaptiveAvgPool2d", "AdaptiveAvgPool3d", "AdaptiveMaxPool1d", "AdaptiveMaxPool2d", "AdaptiveMaxPool3d", "BatchNorm1d", "BatchNorm2d", "GroupNorm", "LayerNorm", "Dropout2d", "Dropout", "GRU", "GRUCell", "LSTM", "LSTMCell", "RNN", "Embedding", "ReflectionPad1d", "ReflectionPad2d", "ReplicationPad1d", "ReplicationPad2d", "ReplicationPad3d", "ZeroPad2d", "ConstantPad1d", "ConstantPad2d", "ConstantPad3d", "PixelShuffle", "InstanceNorm1d", "InstanceNorm2d", "InstanceNorm3d"]

const oneInputs = ["Conv1d", "ConvTranspose1d", "Conv2d", "ConvTranspose2d", "Conv3d", "ConvTranspose3d", "Linear", "Sigmoid", "Softmax", "Tanh", "LogSoftmax", "ReLU", "ReLU6", "PReLU", "ELU", "Hardtanh", "LeakyReLU", "MaxPool1d", "MaxPool2d", "MaxPool3d", "MaxUnpool1d", "MaxUnpool2d", "MaxUnpool3d", "AvgPool2d", "AvgPool3d", "AdaptiveAvgPool1d", "AdaptiveAvgPool2d", "AdaptiveAvgPool3d", "AdaptiveMaxPool1d", "AdaptiveMaxPool2d", "AdaptiveMaxPool3d", "BatchNorm1d", "BatchNorm2d", "GroupNorm", "LayerNorm", "Dropout2d", "Dropout", "Embedding", "ReflectionPad1d", "ReflectionPad2d", "ReplicationPad1d", "ReplicationPad2d", "ReplicationPad3d", "ZeroPad2d", "ConstantPad1d", "ConstantPad2d", "ConstantPad3d", "PixelShuffle", "InstanceNorm1d", "InstanceNorm2d", "InstanceNorm3d"]

const oneOutputs = ["Conv1d", "ConvTranspose1d", "Conv2d", "ConvTranspose2d", "Conv3d", "ConvTranspose3d", "Linear", "Sigmoid", "Softmax", "Tanh", "LogSoftmax", "ReLU", "ReLU6", "PReLU", "ELU", "Hardtanh", "LeakyReLU", "MaxPool1d", "MaxPool2d", "MaxPool3d", "MaxUnpool1d", "MaxUnpool2d", "MaxUnpool3d", "AvgPool2d", "AvgPool3d", "AdaptiveAvgPool1d", "AdaptiveAvgPool2d", "AdaptiveAvgPool3d", "AdaptiveMaxPool1d", "AdaptiveMaxPool2d", "AdaptiveMaxPool3d", "BatchNorm1d", "BatchNorm2d", "GroupNorm", "LayerNorm", "Dropout2d", "Dropout", "GRUCell", "LSTM", "RNN", "RNNCell", "Embedding", "ReflectionPad1d", "ReflectionPad2d", "ReplicationPad1d", "ReplicationPad2d", "ReplicationPad3d", "ZeroPad2d", "ConstantPad1d", "ConstantPad2d", "ConstantPad3d", "PixelShuffle", "InstanceNorm1d", "InstanceNorm2d", "InstanceNorm3d"]

const twoInputs = ["GRU", "GRUCell", "LSTM", "LSTMCell", "RNN", "RNNCell"]
const twoOutputs = ["GRU", "LSTM", "LSTMCell", "RNN"]


const DataFlowConfig = {
    oneInputs: oneInputs,
    oneOutputs: oneOutputs,
    twoInputs: twoInputs,
    twoOutputs: twoOutputs
}

export{DataFlowConfig}
