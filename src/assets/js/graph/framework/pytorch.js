const PyTorch = {
    'Conv1d': {
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'], 
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'groups': {
            'type': ['int'], 
            'default': 1
        }, 'bias': {
            'type': ['bool'], 
            'default': 'True'
        }, 'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    }, 'Conv2d': {
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'], 
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'groups': {
            'type': ['int'], 
            'default': 1
        }, 'bias': {
            'type': ['bool'], 
            'default': 'True'
        }, 'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    }, 'Conv3d': {
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'], 
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'groups': {
            'type': ['int'], 
            'default': 1
        }, 'bias': {
            'type': ['bool'], 
            'default': 'True'
        }, 'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    }, 'ConvTranspose1d': {
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'output_padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'groups': {
            'type': ['int'],
            'default': 1
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }, 'dilation': {
            'type': ['int', 'tuple'],
            'default': 1
        }, 'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    }, 'ConvTranspose2d': {
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'output_padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'groups': {
            'type': ['int'],
            'default': 1
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }, 'dilation': {
            'type': ['int', 'tuple'],
            'default': 1
        },  'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    }, 'ConvTranspose3d': {
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'output_padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'groups': {
            'type': ['int'],
            'default': 1
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }, 'dilation': {
            'type': ['int', 'tuple'],
            'default': 1
        },  'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    }, 'Unfold': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'],
            'default': 1
        }
    }, 'Fold': {
        'output_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'],
            'default': 1
        }
    }, 'MaxPool1d': {
        'kernel_size': {
            'type': ['int'],
            'default': null
        }, 'stride': {
            'type': ['int'],
            'default': null
        }, 'padding': {
            'type': ['int'],
            'default': 0
        }, 'dilation': {
            'type': ['int'],
            'default': 1
        }, 'return_indices': {
            'type': ['bool'], 
            'default': 'False'
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'MaxPool2d': {
        'kernel_size': {
            'type': ['int'],
            'default': null
        }, 'stride': {
            'type': ['int'],
            'default': null
        }, 'padding': {
            'type': ['int'],
            'default': 0
        }, 'dilation': {
            'type': ['int'],
            'default': 1
        }, 'return_indices': {
            'type': ['bool'], 
            'default': 'False'
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'MaxPool3d': {
        'kernel_size': {
            'type': ['int'],
            'default': null
        }, 'stride': {
            'type': ['int'],
            'default': null
        }, 'padding': {
            'type': ['int'],
            'default': 0
        }, 'dilation': {
            'type': ['int'],
            'default': 1
        }, 'return_indices': {
            'type': ['bool'], 
            'default': 'False'
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'MaxUnpool1d': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }
    }, 'MaxUnpool2d': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }
    }, 'MaxUnpool3d': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }
    }, 'AvgPool1d': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }, 'count_include_pad': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'AvgPool2d': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }, 'count_include_pad': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'AvgPool3d': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'padding': {
            'type': ['int', 'tuple'],
            'default': 0
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }, 'count_include_pad': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'FractionalMaxPool2d': {
        'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'output_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'output_ratio': {
            'type': ['float'],
            'default': null
        }, 'return_indices': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'LPPool1d': {
        'norm_type': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int'],
            'default': null
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'LPPool2d': {
        'norm_type': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int'],
            'default': null
        }, 'ceil_mode': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'AdaptiveMaxPool1d': {
        'output_size': {
            'type': ['int'],
            'default': null
        }, 'return_indices': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'AdaptiveMaxPool2d': {
        'output_size': {
            'type': ['int'],
            'default': null
        }, 'return_indices': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'AdaptiveMaxPool3d': {
        'output_size': {
            'type': ['int'],
            'default': null
        }, 'return_indices': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'AdaptiveAvgPool1d': {
        'output_size': {
            'type': ['int'],
            'default': null
        }
    }, 'AdaptiveAvgPool2d': {
        'output_size': {
            'type': ['int'],
            'default': null
        }
    }, 'AdaptiveAvgPool3d': {
        'output_size': {
            'type': ['int'],
            'default': null
        }
    }, 'ReflectionPad1d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }
    }, 'ReflectionPad2d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }
    }, 'ReplicationPad1d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }
    }, 'ReplicationPad2d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }
    }, 'ReplicationPad3d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }
    }, 'ZeroPad2d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }
    }, 'ConstantPad1d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }, 'value': {
            'type': ['float'],
            'default': null
        }
    }, 'ConstantPad2d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }, 'value': {
            'type': ['float'],
            'default': null
        }
    }, 'ConstantPad3d': {
        'padding': {
            'type': ['int', 'Tuple'],
            'default': null
        }, 'value': {
            'type': ['float'],
            'default': null
        }
    },

    //  Non-linear activations (weighted sum, nonlinearity)
    'ELU': {
        'alpha': {
            'type': ['int'],
            'default': 1.0
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'Hardshrink': {
        'lambd':{
            'type': ['float'],
            'default': 0.5
        }
    }, 'Hardtanh': {
        'min_val': {
            'type': ['int'],
            'default': -1.0
        }, 'max_val': {
            'type': ['int'],
            'default': 1.0
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'LeakyReLU': {
        'negative_slope': {
            'type': ['float'],
            'default': 0.01
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'LogSigmoid': {
    },
    'MultiheadAttention':{
        'embed_dim': {
            'type': ['int']
        }, 'num_heads': {
            'type': ['int']
        }, 'dropout':{
            'type': ['float'],
            'default': 0.0
        }, 'bias':{
            'type': ['bool'],
            'default': 'True'
        }, 'add_bias_kv':{
            'type': ['bool'],
            'default': 'False'
        }, 'add_zero_attn':{
            'type': ['bool'],
            'default': 'False'
        }
    },
    'PReLU': {
        'num_parameters': {
            'type': ['int'],
            'default': 1
        }, 'init': {
            'type': ['float'],
            'default': 0.25
        }
    }, 'ReLU': {
        'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'ReLU6': {
        'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'RReLU': {
        'lower': {
            'type': ['float'],
            'default': 0.125
        }, 'upper': {
            'type': ['float'],
            'default': 0.3333333333333333,
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'SELU': {
        'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'CELU': {
        'alpha': {
            'type': ['float'],
            'default': 1.0
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'Sigmoid': {
    }, 'Softplus': {
        'beta': {
            'type': ['float'],
            'default': 1
        }, 'threshold': {
            'type': ['int'],
            'default': 20
        }
    }, 'Softshrink': {
        'lambd': {
            'type': ['float'],
            'default': 0.5
        }
    }, 'Softsign': {
    }, 'Tanh': {
    }, 'Tanhshrink': {
    }, 'Threshold': {
        'threshold': {
            'type': ['float'],
            'default': 0.1
        }, 'value': {
            'type': ['float'],
            'default': 20
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 
    // Non-linear activations (other)
    'Softmin': {
        'dim': {
            'type': ['int'],
            'default': null
        }
    }, 'Softmax': {
        'dim': {
            'type': ['int'],
            'default': null
        }
    }, 'Softmax2d': {
    }, 'LogSoftmax': {
        'dim': {
            'type': ['int'],
            'default': null
        }
    }, 'AdaptiveLogSoftmaxWithLoss': {
        'in_features': {
            'type': ['int'],
            'default': null
        }, 'n_classes': {
            'type': ['int'],
            'default': null
        }, 'cutoffs': {
            'type': ['Sequence'],
            'default': null
        }, 'div_value': {
            'type': ['float'],
            'default': 4.0
        }, 'head_bias': {
            'type': ['bool'],
            'default': 'False'
        }
    },
    //  ================
    'log_prob': {
    }, 'predict': {
    },
    // ==================Normalization layers================
    'BatchNorm1d': {
        'num_features': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'momentum': {
            'type': ['float'],
            'default': 0.1
        }, 'affine': {
            'type': ['bool'],
            'default': 'True'
        }, 'track_running_stats': {
            'type': ['bool'],
            'default': 'True'
        }
    }, 'BatchNorm2d': {
        'num_features': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'momentum': {
            'type': ['float'],
            'default': 0.1
        }, 'affine': {
            'type': ['bool'],
            'default': 'True'
        }, 'track_running_stats': {
            'type': ['bool'],
            'default': 'True'
        }
    }, 'BatchNorm3d': {
        'num_features': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'momentum': {
            'type': ['float'],
            'default': 0.1
        }, 'affine': {
            'type': ['bool'],
            'default': 'True'
        }, 'track_running_stats': {
            'type': ['bool'],
            'default': 'True'
        }
    }, 'GroupNorm': {
        'num_groups': {
            'type': ['int'],
            'default': null
        }, 'num_channels': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'affine': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    // TODO //
    'SyncBatchNorm': {
        'num_features': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'momentum': {
            'type': ['float'],
            'default': 0.1
        }, 'affine': {
            'type': ['bool'],
            'default': 'True'
        }, 'track_running_stats': {
            'type': ['bool'],
            'default': 'True'
        }, 'process_group': {
            'type': ['obj'],
            'default': 'torch.distributed.new_group(process_ids)'
        }
    }, 'InstanceNorm1d': {
        'num_features': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'momentum': {
            'type': ['float'],
            'default': 0.1
        }, 'affine': {
            'type': ['bool'],
            'default': 'False'
        }, 'track_running_stats': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'InstanceNorm2d': {
        'num_features': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'momentum': {
            'type': ['float'],
            'default': 0.1
        }, 'affine': {
            'type': ['bool'],
            'default': 'False'
        }, 'track_running_stats': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'InstanceNorm3d': {
        'num_features': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'momentum': {
            'type': ['float'],
            'default': 0.1
        }, 'affine': {
            'type': ['bool'],
            'default': 'False'
        }, 'track_running_stats': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'LayerNorm': {
        'normalized_shape': {
            'type': ['int'],
            'default': null
        }, 'eps': {
            'type': ['float'],
            'default': 0.00001
        }, 'elementwise_affine': {
            'type': ['bool'],
            'default': 'True'
        }
    }, 'LocalResponseNorm': {
        'size': {
            'type': ['int'],
            'default': null
        }, 'alpha': {
            'type': ['float'],
            'default': 0.0001
        }, 'beta': {
            'type': ['float'],
            'default': 0.75
        }, 'k': {
            'type': ['float'],
            'default': 1.0
        }
    }, 
    
    //  ===================layer====================
    'RNN': {
        'input_size': {
            'type': ['int'],
            'default': null
        }, 'hidden_size': {
            'type': ['int'],
            'default': null
        }, 'num_layers': {
            'type': ['int'],
            'default': null
        }, 'nonlinearity': {
            'type': ['obj'],
            'default': 'tanh'
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }, 'batch_first': {
            'type': ['bool'],
            'default': 'False'
        }, 'dropout': {
            'type': ['float'],
            'default': 0
        }, 'bidirectional': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'LSTM': {
        'input_size': {
            'type': ['int'],
            'default': null
        }, 'hidden_size': {
            'type': ['int'],
            'default': null
        }, 'num_layers': {
            'type': ['int'],
            'default': null
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }, 'batch_first': {
            'type': ['bool'],
            'default': 'False'
        }, 'dropout': {
            'type': ['float'],
            'default': 0
        }, 'bidirectional': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'GRU': {
        'input_size': {
            'type': ['int'],
            'default': null
        }, 'hidden_size': {
            'type': ['int'],
            'default': null
        }, 'num_layers': {
            'type': ['int'],
            'default': null
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }, 'batch_first': {
            'type': ['bool'],
            'default': 'False'
        }, 'dropout': {
            'type': ['float'],
            'default': 0
        }, 'bidirectional': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'RNNCell': {
        'input_size': {
            'type': ['int'],
            'default': null
        }, 'hidden_size': {
            'type': ['int'],
            'default': null
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }, 'nonlinearity': {
            'type': ['obj'],
            'default': 'tanh'
        },
    }, 'LSTMCell': {
        'input_size': {
            'type': ['int'],
            'default': null
        }, 'hidden_size': {
            'type': ['int'],
            'default': null
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }
    }, 'GRUCell': {
        'input_size': {
            'type': ['int'],
            'default': null
        }, 'hidden_size': {
            'type': ['int'],
            'default': null
        }, 'bias': {
            'type': ['bool'],
            'default': 'True'
        }
    }, 
    // ================ Linear layers (Identity) =============
    // 'Identity': {
    //     'args': {
    //         'type': ['str'],
    //         'default': null
    //     }
    // },
    // ================ Linear layers (Linear) =============
    'Linear': {
        'in_features': {
            'type': ['int'],
            'default': null
        }, 'out_features': {
            'type': ['int'],
            'default': null
        }, 'bias': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'Bilinear': {
        'in1_features': {
            'type': ['int'],
            'default': null
        },'in2_features': {
            'type': ['int'],
            'default': null
        }, 'out_features': {
            'type': ['int'],
            'default': null
        }, 'bias': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'Dropout': {
        'p': {
            'type': ['float'],
            'default': 0.5
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'Dropout2d': {
        'p': {
            'type': ['float'],
            'default': 0.5
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'Dropout3d': {
        'p': {
            'type': ['float'],
            'default': 0.5
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'AlphaDropout': {
        'p': {
            'type': ['float'],
            'default': 0.5
        }, 'inplace': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 
    // =============== Sparse layers ===============
    'Embedding': {
        'num_embeddings': {
            'type': ['int'],
            'default': null
        }, 'embedding_dim': {
            'type': ['int'],
            'default': null
        }, 'padding_idx': {
            'type': ['int'],
            'default': 'None'
        }, 'max_norm': {
            'type': ['float'],
            'default': 'None'
        }, 'norm_type': {
            'type': ['float'],
            'default': 2.0
        }, 'scale_grad_by_freq': {
            'type': ['bool'],
            'default': 'False'
        }, 'sparse': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'EmbeddingBag': {
        'num_embeddings': {
            'type': ['int'],
            'default': null
        }, 'embedding_dim': {
            'type': ['int'],
            'default': null
        }, 'max_norm': {
            'type': ['float'],
            'default': 'None'
        }, 'norm_type': {
            'type': ['float'],
            'default': 2.0
        }, 'scale_grad_by_freq': {
            'type': ['bool'],
            'default': 'False'
        }, 'mode': {
            'type': ['str'],
            'default': 'mean'
        }, 'sparse': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 
    // ================ Distance functions ==================
    'CosineSimilarity': {
        'dim': {
            'type': ['int'],
            'default': 1
        }, 'eps': {
            'type': ['float'],
            'default': 0.00000001
        }
    }, 'PairwiseDistance': {
        'p': {
            'type': ['float'],
            'default': 2
        }, 'eps': {
            'type': ['float'],
            'default': 0.00000001
        }, 'keepdim': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 
    // =================== Vision layers ======================
    'PixelShuffle': {
       'upscale_factor':{ 
            'type': ['int'],
            'default': null
        }
    }, 'Upsample': {
        'size': {
            'type': ['int', 'Tuple'],
            'default': null
        }, 'scale_factor': {
            'type': ['int', 'Tuple'],
            'default': null
        }, 'mode': {
            'type': ['str'],
            'default': 'nearest'
        }, 'align_corners': {
            'type': ['bool'],
            'default': 'False'
        }
    }, 'UpsamplingNearest2d': {
        'size': {
            'type': ['int', 'Tuple'],
            'default': null
        }, 'scale_factor': {
            'type': ['flaot', 'Tuple'],
            'default': null
        }
    }, 'UpsamplingBilinear2d': {
        'size': {
            'type': ['int', 'Tuple'],
            'default': null
        }, 'scale_factor': {
            'type': ['flaot', 'Tuple'],
            'default': null
        }
    },
    'Conv1dBnRelu':{
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'], 
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'groups': {
            'type': ['int'], 
            'default': 1
        }, 'bias': {
            'type': ['bool'], 
            'default': 'True'
        }, 'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    },

    'Conv2dBnRelu':{
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'], 
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'groups': {
            'type': ['int'], 
            'default': 1
        }, 'bias': {
            'type': ['bool'], 
            'default': 'True'
        }, 'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    },
    'Conv3dBnRelu':{
        'in_channels': {
            'type': ['int'],
            'default': null
        }, 'out_channels': {
            'type': ['int'],
            'default': null
        }, 'kernel_size': {
            'type': ['int', 'tuple'],
            'default': null
        }, 'stride': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'padding': {
            'type': ['int', 'tuple'], 
            'default': 0
        }, 'dilation': {
            'type': ['int', 'tuple'], 
            'default': 1
        }, 'groups': {
            'type': ['int'], 
            'default': 1
        }, 'bias': {
            'type': ['bool'], 
            'default': 'True'
        }, 'padding_mode': {
            'type': ['str'], 
            'default': 'zeros'
        }
    },
    'ConcatLayer':{
        'dim': {
            'type': ['int'],
            'default': 1
        },
    },
    'SumLayer':{
        'dim': {
            'type': ['int'],
            'default': 1
        },
    },
    'ViewLayer':{
        'dim': {
            'type': ['str'],
            'default': null
        },
    },
    'MulLayer':{
    },

    // 
    'AlexNet':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG11':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG13':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG16':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG19':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG11_Bn':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG13_Bn':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG16_Bn':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'VGG19_Bn':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'ResNet18':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'ResNet34':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'ResNet50':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'ResNet101':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'ResNet152':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'SqueezeNet1_0':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'SqueezeNet1_1':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'Densenet121':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'Densenet169':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'Densenet201':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'Densenet161':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'Inception_V3':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'GoogleNet':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },
    'ShuffleNet-V2':{
        'pretrained': {
            'type': ['bool'],
            'default': 'False'
        },
        'progress': {
            'type': ['bool'],
            'default': 'True'
        }
    },   
    // resnet18 = models.resnet18()
    // alexnet = models.alexnet()
    // vgg16 = models.vgg16()
    // squeezenet = models.squeezenet1_0()
    // densenet = models.densenet161()
    // inception = models.inception_v3()
    // googlenet = models.googlenet()
    // shufflenet = models.shufflenetv2()



}
export { PyTorch }