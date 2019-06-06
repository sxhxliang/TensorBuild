const PyTorch  = {
    'Module（模块）': {
        'name': {
            'name': 'name', 'type': []
        }, 'parameter': {
            'name': 'parameter', 'type': ['Parameter'
            ]
        }, 'state_dict': {
            'name': 'state_dict', 'type': ['dict'
            ]
        }, 'strict': {
            'name': 'strict', 'type': ['bool'
            ], 'default': 'True'
        }, 'prefix': {
            'name': 'prefix', 'type': ['str'
            ]
        }, 'recurse': {
            'name': 'recurse', 'type': ['bool'
            ]
        }, 'tensor': {
            'name': 'tensor', 'type': []
        }, 'device': {
            'name': 'device', 'type': []
        }, 'dtype': {
            'name': 'dtype', 'type': []
        }
    }, 'Sequential': {
        'name': 'Sequential'
    }, 'ModuleList(模块列表)': {
        'name': 'ModuleList(模块列表)', 'index': {
            'name': 'index', 'type': ['int'
            ]
        }, 'module': {
            'name': 'module', 'type': []
        }
    }, 'ModuleDict(模块词典)': {
        'name': 'ModuleDict(模块词典)'
    }, 'ParameterList(参数列表)': {
        'name': 'ParameterList(参数列表)'
    }, 'ParameterDict(参数词典)': {
        'name': 'ParameterDict(参数词典)'
    }, 'Conv1d': {
        'in_channels': {
            'type': ['int'
            ]
        }, 'out_channels': {
            'type': ['int'
            ]
        }, 'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'groups': {
            'type': ['int'
            ], 'default': 1
        }, 'bias': {
            'type': ['bool'
            ], 'default': 'True'
        }
    }, 'Conv2d': {
        'in_channels': {
            'type': ['int'
            ]
        }, 'out_channels': {
            'type': ['int'
            ]
        }, 'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'groups': {
            'type': ['int'
            ], 'default': 1
        }, 'bias': {
            'type': ['bool'
            ], 'default': 'True'
        }
    }, 'Conv3d': {
        'in_channels': {
            'type': ['int'
            ]
        }, 'out_channels': {
            'type': ['int'
            ]
        }, 'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'groups': {
            'type': ['int'
            ], 'default': 1
        }, 'bias': {
            'type': ['bool'
            ], 'default': 'True'
        }
    }, 'ConvTranspose1d': {
        'in_channels': {
            'type': ['int'
            ]
        }, 'out_channels': {
            'type': ['int'
            ]
        }, 'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'output_padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'groups': {
            'type': ['int'
            ], 'default': 1
        }, 'bias': {
            'type': ['bool'
            ], 'default': 'True'
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }
    }, 'ConvTranspose2d': {
        'in_channels': {
            'type': ['int'
            ]
        }, 'out_channels': {
            'type': ['int'
            ]
        }, 'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'output_padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'groups': {
            'type': ['int'
            ], 'default': 1
        }, 'bias': {
            'type': ['bool'
            ], 'default': 'True'
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }
    }, 'ConvTranspose3d': {
        'name': 'ConvTranspose3d', 'in_channels': {
            'type': ['int'
            ]
        }, 'out_channels': {
            'type': ['int'
            ]
        }, 'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'output_padding': {
            'type': ['int', 'tuple'
            ], 'default': 0
        }, 'groups': {
            'type': ['int'
            ], 'default': 1
        }, 'bias': {
            'type': ['bool'
            ], 'default': 'True'
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }
    }, 'Unfold': {
        'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ]
        }, 'padding': {
            'type': ['int', 'tuple'
            ]
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }
    }, 'Fold': {
        'output_size': {
            'type': ['int', 'tuple'
            ]
        }, 'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ]
        }, 'padding': {
            'type': ['int', 'tuple'
            ]
        }, 'dilation': {
            'type': ['int', 'tuple'
            ], 'default': 1
        }
    }, 'MaxPool1d': {
        'kernel_size': {
           'type': []
        }, 'stride': {
            'type': []
        }, 'padding': {
            'type': []
        }, 'dilation': {
            'type': []
        }, 'return_indices': {
            'type': ['bool'], 'default': 'False'
        }, 'ceil_mode': {
            'type': []
        }
    }, 'MaxPool2d': {
        'kernel_size': {
           'type': []
        }, 'stride': {
            'type': []
        }, 'padding': {
            'type': []
        }, 'dilation': {
            'type': []
        }, 'return_indices': {
            'type': ['bool'], 'default': 'False'
        }, 'ceil_mode': {
            'type': []
        }
    }, 'MaxPool3d': {
        'kernel_size': {
           'type': []
        }, 'stride': {
            'type': []
        }, 'padding': {
            'type': []
        }, 'dilation': {
            'type': []
        }, 'return_indices': {
            'type': []
        }, 'ceil_mode': {
            'type': []
        }
    }, 'MaxUnpool1d': {
        'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ]
        }, 'padding': {
            'type': ['int', 'tuple'
            ]
        }
    }, 'MaxUnpool2d': {
        'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ]
        }, 'padding': {
            'type': ['int', 'tuple'
            ]
        }
    }, 'MaxUnpool3d': {
        'kernel_size': {
           'type': ['int', 'tuple'
            ]
        }, 'stride': {
            'type': ['int', 'tuple'
            ]
        }, 'padding': {
            'type': ['int', 'tuple'
            ]
        }
    }, 'AvgPool1d': {
        'kernel_size': {
           'type': []
        }, 'stride': {
            'type': []
        }, 'padding': {
            'type': []
        }, 'ceil_mode': {
            'type': []
        }, 'count_include_pad': {
            'type': []
        }
    }, 'AvgPool2d': {
        'kernel_size': {
           'type': []
        }, 'stride': {
            'type': []
        }, 'padding': {
            'type': []
        }, 'ceil_mode': {
            'type': []
        }, 'count_include_pad': {
            'type': []
        }
    }, 'AvgPool3d': {
        'kernel_size': {
           'type': []
        }, 'stride': {
            'type': []
        }, 'padding': {
            'type': []
        }, 'ceil_mode': {
            'type': []
        }, 'count_include_pad': {
            'type': []
        }
    }, 'FractionalMaxPool2d': {
        'kernel_size': {
           'type': []
        }, 'output_size': {
            'type': []
        }, 'output_ratio': {
            'type': []
        }, 'return_indices': {
            'type': []
        }
    }, 'LPPool1d': {
        'name': 'LPPool1d'
    }, 'LPPool2d': {
        'name': 'LPPool2d'
    }, 'AdaptiveMaxPool1d': {
        'output_size': {
            'type': []
        }, 'return_indices': {
            'type': []
        }
    }, 'AdaptiveMaxPool2d': {
        'output_size': {
            'type': []
        }, 'return_indices': {
            'type': ['bool']
        }
    }, 'AdaptiveMaxPool3d': {
        'output_size': {
            'type': []
        }, 'return_indices': {
            'type': ['bool'], 'default': 'False'
        }
    }, 'AdaptiveAvgPool1d': {
        'output_size': {
            'type': []
        }
    }, 'AdaptiveAvgPool2d': {
        'output_size': {
            'type': []
        }
    }, 'AdaptiveAvgPool3d': {
        'output_size': {
            'type': []
        }
    }, 'ReflectionPad1d': {
        'name': 'ReflectionPad1d'
    }, 'ReflectionPad2d': {
        'name': 'ReflectionPad2d'
    }, 'ReplicationPad1d': {
        'name': 'ReplicationPad1d'
    }, 'ReplicationPad2d': {
        'name': 'ReplicationPad2d'
    }, 'ReplicationPad3d': {
        'name': 'ReplicationPad3d'
    }, 'ZeroPad2d': {
        'name': 'ZeroPad2d'
    }, 'ConstantPad1d': {
        'name': 'ConstantPad1d'
    }, 'ConstantPad2d': {
        'name': 'ConstantPad2d'
    }, 'ConstantPad3d': {
        'name': 'ConstantPad3d'
    }, 'ELU': {
        'name': 'ELU', 'alpha': {
            'name': 'alpha', 'type': []
        }, 'inplace': {
            'name': 'inplace', 'type': []
        }
    }, 'Hardshrink': {
        'name': 'Hardshrink'
    }, 'Hardtanh': {
        'name': 'Hardtanh', 'min_val': {
            'name': 'min_val', 'type': []
        }, 'max_val': {
            'name': 'max_val', 'type': []
        }, 'inplace': {
            'name': 'inplace', 'type': []
        }
    }, 'LeakyReLU': {
        'name': 'LeakyReLU', 'negative_slope': {
            'name': 'negative_slope', 'type': []
        }, 'inplace': {
            'name': 'inplace', 'type': []
        }
    }, 'LogSigmoid': {
        'name': 'LogSigmoid'
    }, 'PReLU': {
        'name': 'PReLU', 'num_parameters': {
            'name': 'num_parameters', 'type': ['int'
            ]
        }, 'init': {
            'name': 'init', 'type': ['float'
            ]
        }
    }, 'ReLU': {
        'name': 'ReLU'
    }, 'ReLU6': {
        'name': 'ReLU6'
    }, 'RReLU': {
        'name': 'RReLU', 'lower': {
            'name': 'lower', 'type': []
        }, 'upper': {
            'name': 'upper', 'type': []
        }, 'inplace': {
            'name': 'inplace', 'type': []
        }
    }, 'SELU': {
        'name': 'SELU'
    }, 'CELU': {
        'name': 'CELU', 'alpha': {
            'name': 'alpha', 'type': []
        }, 'inplace': {
            'name': 'inplace', 'type': []
        }
    }, 'Sigmoid': {
        'name': 'Sigmoid'
    }, 'Softplus': {
        'name': 'Softplus', 'beta': {
            'name': 'beta', 'type': []
        }, 'threshold': {
            'name': 'threshold', 'type': []
        }
    }, 'Softshrink': {
        'name': 'Softshrink'
    }, 'Softsign': {
        'name': 'Softsign'
    }, 'Tanh': {
        'name': 'Tanh'
    }, 'Tanhshrink': {
        'name': 'Tanhshrink'
    }, 'Threshold': {
        'name': 'Threshold', 'threshold': {
            'name': 'threshold', 'type': []
        }, 'value': {
            'name': 'value', 'type': []
        }, 'inplace': {
            'name': 'inplace', 'type': []
        }
    }, 'Softmin': {
        'name': 'Softmin'
    }, 'Softmax': {
        'name': 'Softmax'
    }, 'Softmax2d': {
        'name': 'Softmax2d'
    }, 'LogSoftmax': {
        'name': 'LogSoftmax'
    }, 'AdaptiveLogSoftmaxWithLoss': {
        'name': 'AdaptiveLogSoftmaxWithLoss', 'in_features': {
            'name': 'in_features', 'type': ['int'
            ]
        }, 'n_classes': {
            'name': 'n_classes', 'type': ['int'
            ]
        }, 'cutoffs': {
            'name': 'cutoffs', 'type': []
        }, 'div_value': {
            'name': 'div_value', 'type': ['float'
            ]
        }, 'output': {
            'name': 'output', 'type': []
        }, 'loss': {
            'name': 'loss', 'type': []
        }
    }, 'BatchNorm1d': {
        'name': 'BatchNorm1d', 'num_features': {
            'name': 'num_features', 'type': []
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'momentum': {
            'name': 'momentum', 'type': []
        }, 'affine': {
            'name': 'affine', 'type': []
        }, 'track_running_stats': {
            'name': 'track_running_stats', 'type': []
        }
    }, 'BatchNorm2d': {
        'name': 'BatchNorm2d', 'num_features': {
            'name': 'num_features', 'type': []
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'momentum': {
            'name': 'momentum', 'type': []
        }, 'affine': {
            'name': 'affine', 'type': []
        }, 'track_running_stats': {
            'name': 'track_running_stats', 'type': []
        }
    }, 'BatchNorm3d': {
        'name': 'BatchNorm3d', 'num_features': {
            'name': 'num_features', 'type': []
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'momentum': {
            'name': 'momentum', 'type': []
        }, 'affine': {
            'name': 'affine', 'type': []
        }, 'track_running_stats': {
            'name': 'track_running_stats', 'type': []
        }
    }, 'GroupNorm': {
        'name': 'GroupNorm', 'num_groups': {
            'name': 'num_groups', 'type': ['int'
            ]
        }, 'num_channels': {
            'name': 'num_channels', 'type': ['int'
            ]
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'affine': {
            'name': 'affine', 'type': []
        }
    }, 'InstanceNorm1d': {
        'name': 'InstanceNorm1d', 'num_features': {
            'name': 'num_features', 'type': []
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'momentum': {
            'name': 'momentum', 'type': []
        }, 'affine': {
            'name': 'affine', 'type': []
        }, 'track_running_stats': {
            'name': 'track_running_stats', 'type': []
        }
    }, 'InstanceNorm2d': {
        'name': 'InstanceNorm2d', 'num_features': {
            'name': 'num_features', 'type': []
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'momentum': {
            'name': 'momentum', 'type': []
        }, 'affine': {
            'name': 'affine', 'type': []
        }, 'track_running_stats': {
            'name': 'track_running_stats', 'type': []
        }
    }, 'InstanceNorm3d': {
        'name': 'InstanceNorm3d', 'num_features': {
            'name': 'num_features', 'type': []
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'momentum': {
            'name': 'momentum', 'type': []
        }, 'affine': {
            'name': 'affine', 'type': []
        }, 'track_running_stats': {
            'name': 'track_running_stats', 'type': []
        }
    }, 'LayerNorm': {
        'name': 'LayerNorm', 'normalized_shape': {
            'name': 'normalized_shape', 'type': ['int', 'list'
            ]
        }, 'eps': {
            'name': 'eps', 'type': []
        }, 'elementwise_affine': {
            'name': 'elementwise_affine', 'type': []
        }
    }, 'LocalResponseNorm': {
        'name': 'LocalResponseNorm', 'size': {
            'name': 'size', 'type': []
        }, 'alpha': {
            'name': 'alpha', 'type': []
        }, 'beta': {
            'name': 'beta', 'type': []
        }, 'k': {
            'name': 'k', 'type': []
        }
    }, 'RNN': {
        'name': 'RNN', 'input_size': {
            'name': 'input_size', 'type': []
        }, 'hidden_size': {
            'name': 'hidden_size', 'type': []
        }, 'num_layers': {
            'name': 'num_layers', 'type': []
        }, 'nonlinearity': {
            'name': 'nonlinearity', 'type': []
        }, 'bias': {
            'type': []
        }, 'batch_first': {
            'name': 'batch_first', 'type': []
        }, 'dropout': {
            'name': 'dropout', 'type': []
        }, 'bidirectional': {
            'name': 'bidirectional', 'type': []
        }, 'input': {
            'name': 'input', 'type': []
        }, 'h_0': {
            'name': 'h_0', 'type': []
        }, 'output': {
            'name': 'output', 'type': []
        }, 'h_n': {
            'name': 'h_n', 'type': []
        }
    }, 'LSTM': {
        'name': 'LSTM', 'input_size': {
            'name': 'input_size', 'type': []
        }, 'hidden_size': {
            'name': 'hidden_size', 'type': []
        }, 'num_layers': {
            'name': 'num_layers', 'type': []
        }, 'bias': {
            'type': []
        }, 'batch_first': {
            'name': 'batch_first', 'type': []
        }, 'dropout': {
            'name': 'dropout', 'type': []
        }, 'bidirectional': {
            'name': 'bidirectional', 'type': []
        }, 'input': {
            'name': 'input', 'type': []
        }, 'h_0': {
            'name': 'h_0', 'type': []
        }, 'c_0': {
            'name': 'c_0', 'type': []
        }, 'output': {
            'name': 'output', 'type': []
        }, 'h_n': {
            'name': 'h_n', 'type': []
        }, 'c_n': {
            'name': 'c_n', 'type': []
        }
    }, 'GRU': {
        'name': 'GRU', 'input_size': {
            'name': 'input_size', 'type': []
        }, 'hidden_size': {
            'name': 'hidden_size', 'type': []
        }, 'num_layers': {
            'name': 'num_layers', 'type': []
        }, 'bias': {
            'type': []
        }, 'batch_first': {
            'name': 'batch_first', 'type': []
        }, 'dropout': {
            'name': 'dropout', 'type': []
        }, 'bidirectional': {
            'name': 'bidirectional', 'type': []
        }, 'input': {
            'name': 'input', 'type': []
        }, 'h_0': {
            'name': 'h_0', 'type': []
        }, 'output': {
            'name': 'output', 'type': []
        }, 'h_n': {
            'name': 'h_n', 'type': []
        }
    }, 'RNNCell': {
        'name': 'RNNCell', 'input_size': {
            'name': 'input_size', 'type': []
        }, 'hidden_size': {
            'name': 'hidden_size', 'type': []
        }, 'bias': {
            'type': []
        }, 'nonlinearity': {
            'name': 'nonlinearity', 'type': []
        }, 'input': {
            'name': 'input', 'type': []
        }, 'hidden': {
            'name': 'hidden', 'type': []
        }, 'weight_ih': {
            'name': 'weight_ih', 'type': []
        }, 'weight_hh': {
            'name': 'weight_hh', 'type': []
        }, 'bias_ih': {
            'name': 'bias_ih', 'type': []
        }, 'bias_hh': {
            'name': 'bias_hh', 'type': []
        }
    }, 'LSTMCell': {
        'name': 'LSTMCell', 'input_size': {
            'name': 'input_size', 'type': []
        }, 'hidden_size': {
            'name': 'hidden_size', 'type': []
        }, 'bias': {
            'type': []
        }, 'input': {
            'name': 'input', 'type': []
        }, 'h_0': {
            'name': 'h_0', 'type': []
        }, 'c_0': {
            'name': 'c_0', 'type': []
        }, 'h_1': {
            'name': 'h_1', 'type': []
        }, 'c_1': {
            'name': 'c_1', 'type': []
        }, 'weight_ih': {
            'name': 'weight_ih', 'type': []
        }, 'weight_hh': {
            'name': 'weight_hh', 'type': []
        }, 'bias_ih': {
            'name': 'bias_ih', 'type': []
        }, 'bias_hh': {
            'name': 'bias_hh', 'type': []
        }
    }, 'GRUCell': {
        'name': 'GRUCell', 'input_size': {
            'name': 'input_size', 'type': []
        }, 'hidden_size': {
            'name': 'hidden_size', 'type': []
        }, 'bias': {
            'type': []
        }, 'input': {
            'name': 'input', 'type': []
        }, 'hidden': {
            'name': 'hidden', 'type': []
        }, 'weight_ih': {
            'name': 'weight_ih', 'type': []
        }, 'weight_hh': {
            'name': 'weight_hh', 'type': []
        }, 'bias_ih': {
            'name': 'bias_ih', 'type': []
        }, 'bias_hh': {
            'name': 'bias_hh', 'type': []
        }
    }, 'Linear': {
        'name': 'Linear', 'in_features': {
            'name': 'in_features', 'type': []
        }, 'out_features': {
            'name': 'out_features', 'type': []
        }, 'bias': {
            'type': []
        }
    }, 'Bilinear': {
        'name': 'Bilinear', 'in1_features': {
            'name': 'in1_features', 'type': []
        }, 'in2_features': {
            'name': 'in2_features', 'type': []
        }, 'out_features': {
            'name': 'out_features', 'type': []
        }, 'bias': {
            'type': []
        }
    }, 'Dropout': {
        'name': 'Dropout', 'p': {
            'name': 'p', 'type': []
        }, 'inplace': {
            'name': 'inplace', 'type': []
        }
    }, 'Dropout2d': {
        'name': 'Dropout2d', 'p': {
            'name': 'p', 'type': ['float'
            ]
        }, 'inplace': {
            'name': 'inplace', 'type': ['bool'
            ]
        }
    }, 'Dropout3d': {
        'name': 'Dropout3d', 'p': {
            'name': 'p', 'type': ['float'
            ]
        }, 'inplace': {
            'name': 'inplace', 'type': ['bool'
            ]
        }
    }, 'AlphaDropout': {
        'name': 'AlphaDropout', 'p': {
            'name': 'p', 'type': ['float'
            ]
        }, 'inplace': {
            'name': 'inplace', 'type': ['bool'
            ]
        }
    }, 'Embedding': {
        'name': 'Embedding', 'num_embeddings': {
            'name': 'num_embeddings', 'type': ['int'
            ]
        }, 'embedding_dim': {
            'name': 'embedding_dim', 'type': ['int'
            ]
        }, 'padding_idx': {
            'name': 'padding_idx', 'type': ['int'
            ]
        }, 'max_norm': {
            'name': 'max_norm', 'type': ['float'
            ]
        }, 'norm_type': {
            'name': 'norm_type', 'type': ['float'
            ]
        }, 'scale_grad_by_freq': {
            'name': 'scale_grad_by_freq', 'type': []
        }, 'sparse': {
            'name': 'sparse', 'type': ['bool'
            ]
        }
    }, 'EmbeddingBag': {
        'name': 'EmbeddingBag', 'num_embeddings': {
            'name': 'num_embeddings', 'type': ['int'
            ]
        }, 'embedding_dim': {
            'name': 'embedding_dim', 'type': ['int'
            ]
        }, 'max_norm': {
            'name': 'max_norm', 'type': ['float'
            ]
        }, 'norm_type': {
            'name': 'norm_type', 'type': ['float'
            ]
        }, 'scale_grad_by_freq': {
            'name': 'scale_grad_by_freq', 'type': []
        }, 'mode': {
            'name': 'mode', 'type': []
        }, 'sparse': {
            'name': 'sparse', 'type': ['bool'
            ]
        }
    }, 'CosineSimilarity': {
        'name': 'CosineSimilarity', 'dim': {
            'name': 'dim', 'type': ['int'
            ]
        }, 'eps': {
            'name': 'eps', 'type': ['float'
            ]
        }
    }, 'PairwiseDistance': {
        'name': 'PairwiseDistance', 'p': {
            'name': 'p', 'type': []
        }, 'eps': {
            'name': 'eps', 'type': ['float'
            ]
        }, 'keepdim': {
            'name': 'keepdim', 'type': ['bool'
            ]
        }
    }, 'L1Loss': {
        'name': 'L1Loss', 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'MSELoss': {
        'name': 'MSELoss', 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'CrossEntropyLoss': {
        'name': 'CrossEntropyLoss', 'weight': {
            'name': 'weight', 'type': ['Tensor'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'ignore_index': {
            'name': 'ignore_index', 'type': ['int'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'CTCLoss': {
        'name': 'CTCLoss', 'blank': {
            'name': 'blank', 'type': ['int'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'NLLLoss': {
        'name': 'NLLLoss', 'weight': {
            'name': 'weight', 'type': ['Tensor'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'ignore_index': {
            'name': 'ignore_index', 'type': ['int'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'PoissonNLLLoss': {
        'name': 'PoissonNLLLoss', 'log_input': {
            'name': 'log_input', 'type': ['bool'
            ]
        }, 'full': {
            'name': 'full', 'type': ['bool'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'eps': {
            'name': 'eps', 'type': ['float'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'KLDivLoss': {
        'name': 'KLDivLoss', 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'BCELoss': {
        'name': 'BCELoss', 'weight': {
            'name': 'weight', 'type': ['Tensor'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'BCEWithLogitsLoss': {
        'name': 'BCEWithLogitsLoss', 'weight': {
            'name': 'weight', 'type': ['Tensor'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }, 'pos_weight': {
            'name': 'pos_weight', 'type': []
        }
    }, 'MarginRankingLoss': {
        'name': 'MarginRankingLoss', 'margin': {
            'name': 'margin', 'type': ['float'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'HingeEmbeddingLoss': {
        'name': 'HingeEmbeddingLoss', 'margin': {
            'name': 'margin', 'type': ['float'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'MultiLabelMarginLoss': {
        'name': 'MultiLabelMarginLoss', 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'SmoothL1Loss': {
        'name': 'SmoothL1Loss', 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'SoftMarginLoss': {
        'name': 'SoftMarginLoss', 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'MultiLabelSoftMarginLoss': {
        'name': 'MultiLabelSoftMarginLoss', 'weight': {
            'name': 'weight', 'type': ['Tensor'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'CosineEmbeddingLoss': {
        'name': 'CosineEmbeddingLoss', 'margin': {
            'name': 'margin', 'type': ['float'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'MultiMarginLoss': {
        'name': 'MultiMarginLoss', 'p': {
            'name': 'p', 'type': ['int'
            ]
        }, 'margin': {
            'name': 'margin', 'type': ['float'
            ]
        }, 'weight': {
            'name': 'weight', 'type': ['Tensor'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'TripletMarginLoss': {
        'name': 'TripletMarginLoss', 'margin': {
            'name': 'margin', 'type': ['float'
            ]
        }, 'p': {
            'name': 'p', 'type': ['int'
            ]
        }, 'swap': {
            'name': 'swap', 'type': ['float'
            ]
        }, 'size_average': {
            'name': 'size_average', 'type': ['bool'
            ]
        }, 'reduce': {
            'name': 'reduce', 'type': ['bool'
            ]
        }, 'reduction': {
            'name': 'reduction', 'type': []
        }
    }, 'PixelShuffle': {
        'name': 'PixelShuffle'
    }, 'Upsample': {
        'name': 'Upsample', 'size': {
            'name': 'size', 'type': ['tuple'
            ]
        }, 'scale_factor': {
            'name': 'scale_factor', 'type': []
        }, 'mode': {
            'name': 'mode', 'type': []
        }, 'align_corners': {
            'name': 'align_corners', 'type': ['bool'
            ]
        }
    }, 'UpsamplingNearest2d': {
        'name': 'UpsamplingNearest2d', 'size': {
            'name': 'size', 'type': ['tuple'
            ]
        }, 'scale_factor': {
            'name': 'scale_factor', 'type': ['int'
            ]
        }
    }, 'UpsamplingBilinear2d': {
        'name': 'UpsamplingBilinear2d', 'size': {
            'name': 'size', 'type': ['tuple'
            ]
        }, 'scale_factor': {
            'name': 'scale_factor', 'type': ['int'
            ]
        }
    }, 'DataParallel': {
        'name': 'DataParallel', 'module': {
            'name': 'module', 'type': ['Module'
            ]
        }, 'device_ids': {
            'name': 'device_ids', 'type': []
        }, 'output_device': {
            'name': 'output_device', 'type': ['int'
            ]
        }
    }, 'DistributedDataParallel': {
        'name': 'DistributedDataParallel', 'module': {
            'name': 'module', 'type': ['Module'
            ]
        }, 'device_ids': {
            'name': 'device_ids', 'type': []
        }, 'output_device': {
            'name': 'output_device', 'type': ['int'
            ]
        }, 'broadcast_buffers': {
            'name': 'broadcast_buffers', 'type': ['bool'
            ]
        }, 'process_group': {
            'name': 'process_group', 'type': []
        }, 'bucket_cap_mb': {
            'name': 'bucket_cap_mb', 'type': []
        }, 'check_reduction': {
            'name': 'check_reduction', 'type': []
        }
    }, 'DistributedDataParallelCPU': {
        'name': 'DistributedDataParallelCPU'
    }, 'clip_grad_norm_': {
        'name': 'clip_grad_norm_', 'parameters': {
            'name': 'parameters', 'type': ['Tensor', 'Tensor'
            ]
        }, 'max_norm': {
            'name': 'max_norm', 'type': ['float', 'int'
            ]
        }, 'norm_type': {
            'name': 'norm_type', 'type': ['float', 'int'
            ]
        }
    }, 'clip_grad_value_': {
        'name': 'clip_grad_value_', 'parameters': {
            'name': 'parameters', 'type': ['Tensor', 'Tensor'
            ]
        }, 'clip_value': {
            'name': 'clip_value', 'type': ['float', 'int'
            ]
        }
    }, 'parameters_to_vector': {
        'name': 'parameters_to_vector'
    }, 'vector_to_parameters': {
        'name': 'vector_to_parameters', 'vec': {
            'name': 'vec', 'type': ['Tensor'
            ]
        }, 'parameters': {
            'name': 'parameters', 'type': ['Tensor'
            ]
        }
    }, 'weight_norm': {
        'name': {
            'name': 'name', 'type': ['str'
            ]
        }, 'module': {
            'name': 'module', 'type': []
        }, 'dim': {
            'name': 'dim', 'type': ['int'
            ]
        }
    }, 'remove_weight_norm': {
        'name': {
            'name': 'name', 'type': ['str'
            ]
        }, 'module': {
            'name': 'module', 'type': []
        }
    }, 'spectral_norm': {
        'name': {
            'name': 'name', 'type': ['str'
            ]
        }, 'module': {
            'name': 'module', 'type': []
        }, 'n_power_iterations': {
            'name': 'n_power_iterations', 'type': ['int'
            ]
        }, 'eps': {
            'name': 'eps', 'type': ['float'
            ]
        }, 'dim': {
            'name': 'dim', 'type': ['int'
            ]
        }
    }, 'remove_spectral_norm': {
        'name': {
            'name': 'name', 'type': ['str'
            ]
        }, 'module': {
            'name': 'module', 'type': []
        }
    }, 'PackedSequence': {
        'name': 'PackedSequence', 'data': {
            'name': 'data', 'type': ['Tensor'
            ]
        }, 'batch_sizes': {
            'name': 'batch_sizes', 'type': ['Tensor'
            ]
        }
    }, 'pack_padded_sequence': {
        'name': 'pack_padded_sequence', 'input': {
            'name': 'input', 'type': ['Tensor'
            ]
        }, 'lengths': {
            'name': 'lengths', 'type': ['Tensor'
            ]
        }, 'batch_first': {
            'name': 'batch_first', 'type': ['bool'
            ]
        }
    }, 'pad_packed_sequence': {
        'name': 'pad_packed_sequence', 'sequence': {
            'name': 'sequence', 'type': []
        }, 'batch_first': {
            'name': 'batch_first', 'type': ['bool'
            ]
        }, 'padding_value': {
            'name': 'padding_value', 'type': ['float'
            ]
        }, 'total_length': {
            'name': 'total_length', 'type': ['int'
            ]
        }
    }, 'pad_sequence': {
        'name': 'pad_sequence', 'sequences': {
            'name': 'sequences', 'type': ['list', 'Tensor'
            ]
        }, 'batch_first': {
            'name': 'batch_first', 'type': ['bool'
            ]
        }, 'padding_value': {
            'name': 'padding_value', 'type': ['float'
            ]
        }
    }
}
export{PyTorch}